const express = require('express');

const app = express();

app.listen(9093, function () {
  console.log('Node app start at port 9093');
});


// 访问根目录的话
app.get('/', function (req, res) {
  res.send('<h1>Hello world 这里是根目录</h1>');
});

app.get('/data', function (req, res) {
  res.json({
    name: 'it',
    age: 18
  });
})
