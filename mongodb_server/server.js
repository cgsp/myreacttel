const express = require('express');
// 引入user文档
const userRouter = require('./user');

// 创建app
const app = express();

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

