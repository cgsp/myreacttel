const mongoose = require('mongoose');
// mongoose连接mongodb
// const DB_URL = 'mongodb://localhost:27017';
// 没有gsp的话，会自动新建一个gsp的集合
const DB_URL = 'mongodb://127.0.0.1:27017/gsp';
mongoose.connect(DB_URL);
mongoose.connection.on('connected', function () {
  console.log('mongodb连接成功了');
});
