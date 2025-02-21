const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { clear } = require('console');

module.exports = (env) => {
  const isDevelopment = Boolean(env.development)
  return  {
  mode: "production",
  entry: {
    app: path.resolve('./src/index.js')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    clean: true //xóa các file build cũ trong thư mục dist
  },
  devtool: isDevelopment ? 'source-map' : false,
  module: {
    rules: [
      {
        test: /\.s[ac]ss|css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css'
    }),
    new HtmlWebpackPlugin({
      title: "Webpack App",
      filename: "index.html",
      template: "src/template.html"
    })
  ],
  devServer: {
    static: {
      directory: "dist" //đường dẫn tương đối đến thư mục dist chứa index
    },
    port: 3000, //port thay cho port mặc định 8080
    open: true, //mở trang webpack khi chạy teminal
    hot: true, //bật tính năng reload nhanh
    compress: true, //bật gzip cho các tài nguyên (giảm dung lượng tài nguyên)
    historyApiFallback: true //Set true nếu bạn dùng cho các SPA và sử dụng History API của HTML5
  }
}
};