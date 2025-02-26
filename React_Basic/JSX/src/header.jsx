const name = "anh canh";

const sum = (a, b) => a + b;

const element = (
  <h1>
    hello world! i am {name}, i am {sum(10, 15)}
  </h1>
);

// Tên thuộc tính phải code theo dạng camelCase
const element2 = (
  <a href="google.com" className="link_google">
    Google
  </a>
);

const element3 = <h1 />;
const element4 = <img />;
const element5 = <input type="text" />;

// const element6 = <h1 className="greeting">Hello word</h1>;
//Bable biên dịch
// const element6 = React.createElement(
//   "h1",
//   { className: "greeting" },
//   "Hello word"
// );
//Sau đó chuyển thành object
const element6 = {
  type: h1,
  props: {
    className: "greeting",
    children: "Hello word",
  },
};
