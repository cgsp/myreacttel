const express = require('express');
// 解析post参数的
const bodyParser = require('body-parser');
// 解析cookie的
const cookieParser = require('cookie-parser');

// 引入user文档
const userRouter = require('./user');

// 创建app
const app = express();
// 使用
app.use(cookieParser());
app.use(bodyParser.json());

// 访问根目录的话
app.get('/', function (req, res) {
  res.send('<h1>Hello world 这里是根目录</h1>');
});

// 访问/user目录
app.use('/user', userRouter);

// 监听端口号
app.listen(9093, function () {
  console.log('Node app start at port 9093');
});

