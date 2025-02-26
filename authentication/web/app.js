class Http {
  constructor() {
    this.instance = axios.create({
      //khởi tạo đối tượng axios tự config thay vì gọi trực tiếp như axios.get or axios.post
      baseURL: "http://localhost:4000/",
      timeout: 10000,
    });
    this.refreshTokenRequest = null;
    this.instance.interceptors.request.use(
      //tiền xử lí request trước khi gửi lên server
      (config) => {
        const access_token = localStorage.getItem("access_token");
        if (access_token) {
          config.headers.Authorization = `Bearer ${access_token}`;
        }
        return config;
      },
      (err) => Promise.reject(err)
    );
    this.instance.interceptors.response.use(
      //tiền xử lí reqquest sau khi server trả về response
      (config) => config.data,
      (error) => {
        //logic thực hiện tự refreshtoken khi token hết hạn
        console.log(error);
        if (
          error.response.data.name === "EXPIRED_ACCESS_TOKEN" &&
          error.response.status === 401
        ) {
          this.refreshTokenRequest = this.refreshTokenRequest
            ? this.refreshTokenRequest
            : refreshToken().finally(() => {
                this.refreshTokenRequest = null;
              });
          return this.refreshTokenRequest
            .then((access_token) => {
              error.response.config.Authorization = access_token;
              return this.instance(error.response.config);
            })
            .catch((refreshTokenError) => {
              throw refreshTokenError;
            });
        }
        return Promise.reject(err);
      }
    );
  }
  get(url) {
    return this.instance.get(url);
  }
  post(url, body) {
    return this.instance.post(url, body);
  }
}

const http = new Http();

const refreshToken = async () => {
  const refresh_token = localStorage.getItem("refresh_token");
  try {
    const res = await http.post("refresh-token", {
      refresh_token,
    });
    const access_token = res.data.access_token;
    localStorage.setItem("access_token", access_token);
    return access_token;
  } catch (error) {
    localStorage.clear();
    throw error.config;
  }
};

function fetchProfile() {
  http
    .get("profile")
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
}

function fetchProducts() {
  http
    .get("products")
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
}
document.getElementById("login-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  http
    .post("login", {
      username,
      password,
    })
    .then((res) => {
      console.log(res);
      localStorage.setItem("access_token", res.data.access_token);
      localStorage.setItem("refresh_token", res.data.refresh_token);
    })
    .catch((error) => {
      console.log("loi", error);
    });
});

document
  .getElementById("btn-get-profile")
  .addEventListener("click", (event) => {
    fetchProfile();
  });

document
  .getElementById("btn-get-products")
  .addEventListener("click", (event) => {
    fetchProducts();
  });

document.getElementById("btn-get-both").addEventListener("click", (event) => {
  fetchProfile();
  fetchProducts();
});

document
  .getElementById("btn-refresh-token")
  .addEventListener("click", (event) => {
    refreshToken();
  });
