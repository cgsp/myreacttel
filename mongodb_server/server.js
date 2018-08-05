const express = require('express');
const mongoose = require('mongoose');

// mongoose连接mongodb
// const DB_URL = 'mongodb://localhost:27017';
// 没有gsp的话，会自动新建一个gsp的集合
const DB_URL = 'mongodb://127.0.0.1:27017/gsp';
mongoose.connect(DB_URL);
mongoose.connection.on('connected', function () {
  console.log('mongodb连接成功了');
});

// 类似于mysql里面的表，mongo里面有文档、字段的概念
// 通过mongoose操作mongodb，存储的就是json，相对于mysql来说，要简单的多
const User = mongoose.model('user', new mongoose.Schema({
  user: { type: String, require: true },
  age: { type: Number, require: true }
}));

// 新增
// User.create({
//   user: 'xiaoming',
//   age: 12
// }, function (err, doc) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(doc);
//   }
// })

// 删除
// User.remove({ age: 18 }, function (err, doc) {
//   if (!err) {
//     console.log('删除成功');
// 查找
//     User.find({}, function (e, d) {
//       console.log(d);
//     })
//   }
// })

// 修改
// User.update({ 'user': 'chang' }, { '$set': { age: 8888 } }, function (err, doc) {
//   if (!err) {
//     console.log('修改成功');
//     User.find({ 'user': 'chang' }, function (err, doc) {
//       console.log(doc);
//     })
//   }
// });

// 创建app
const app = express();
// 监听端口号
app.listen(9093, function () {
  console.log('Node app start at port 9093');
});
// 访问根目录的话
app.get('/', function (req, res) {
  res.send('<h1>Hello world 这里是根目录</h1>');
});

app.get('/data', function (req, res) {
  // 查找
  User.find({}, function (err, doc) {
    res.json(doc);
  })
})
