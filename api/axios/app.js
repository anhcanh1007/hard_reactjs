// axios.get("https://reqres.in/api/users/23")
// .then((res) => {
//     console.log(res);
// }).catch(err => console.log(err));


// axios.post("https://reqres.in/api/users/23", {
//     name: 'anh canh',
//     job: 'it'
// })
// .then((res) => {
//     console.log(res);
// }).catch(err => console.log(err));

// axios.delete("https://reqres.in/api/users/23")
// .then((res) => {
//     console.log(res);
// }).catch(err => console.log(err));

// tạo instance axios để giúp linh động gọi api ngắn gọn hơn
const http = axios.create({
    baseURL: "https://reqres.in/api"
})


//sử dụng interceptor để tiền xử lý api request hoặc api reponse
http.interceptors.request.use((config) => {
    // config.headers.Timeout = 200
    console.log(config);
    return config
}, (err => {
    return Promise.reject(err);
}))
//interceptor request

http.interceptors.response.use((reponse) => {
    return reponse.data.data
}, (err => {
    return Promise.reject(err);
}))
//interceptor reponse
http.get("/users?page=2")
.then((res) => {
    console.log(res);
}).catch(err => console.log(err));

