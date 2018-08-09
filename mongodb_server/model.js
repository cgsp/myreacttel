const mongoose = require('mongoose');
// mongoose连接mongodb
// const DB_URL = 'mongodb://localhost:27017';
// 没有gsp的话，会自动新建一个gsp的集合
const DB_URL = 'mongodb://127.0.0.1:27017/chat';
mongoose.connect(DB_URL);
mongoose.connection.on('connected', function () {
  console.log('mongodb连接成功了');
});

const models = {
  user: {
    'user': { type: String, require: true },
    'pwd': { type: String, require: true },
    'type': { 'type': String, require: true },
    // 头像
    'avatar': { 'type': String, require: true },
    // 个人简介或者职位简介
    'desc': { 'type': String },
    // 职位名
    'title': { 'type': String },
    // 如果是boss的话，还有3个字段
    'company': { 'type': String },
    'money': { 'type': String }
  },
  chat: {

  }
}


// 批量创建表
for (let m in models) {
  mongoose.model(m, new mongoose.Schema(models[m]));
}

module.exports = {
  getModel: function (name) {
    // 获取表
    return mongoose.model(name);
  }
}
