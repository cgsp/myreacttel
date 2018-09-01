const express = require('express');
// 解析post参数的
const bodyParser = require('body-parser');
// 解析cookie的
const cookieParser = require('cookie-parser');
// 创建app
const app = express();
// 引入user文档
const userRouter = require('./user');

// socket与express结合
const server = require('http').Server(app);
const io = require('socket.io')(server);

// socket事件的接口
io.on('connection', function (socket) {
  console.log('连接到服务端了');
  // 当前实例监听
  socket.on('sendMsg', function (data) {
    console.log(data);
    // 发送到全局
    io.emit('receiveMsg', data);
  })
})


// 使用解析post和cookie的包
app.use(cookieParser());
app.use(bodyParser.json());

// 访问根目录的话
app.get('/', function (req, res) {
  res.send('<h1>Hello world 这里是根目录</h1>');
});

// 访问/user目录
app.use('/user', userRouter);

// 监听端口号
// app.listen(9093, function () {
//   console.log('Node app start at port 9093');
// });
server.listen(9093, function () {
  console.log('Node app start at port 9093');
});

app.use('/test/id', function (req, res) {
  setTimeout(() => {
    res.json({
      code: 0,
      msg: '成功',
      data: {
        total: 15,
        id: 111112222
      }
    })
  }, 1000);
})

app.use('/test/info', function (req, res) {
  console.log(req.body)
  setTimeout(() => {
    if (req.body.id === 111112222) {
      res.json({
        code: 0,
        msg: '成功',
        data: {
          info: '我爱常慧'
        }
      })
    } else {
      res.json({
        code: 1,
        msg: '失败'
      })
    }
  }, 2000);
})


