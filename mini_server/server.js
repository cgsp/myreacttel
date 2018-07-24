"use strict";
/*
 * @Author: John.Guan
 * @Date: 2018-05-29 23:01:41
 * @Last Modified by: John.Guan
 * @Last Modified time: 2018-07-24 14:29:33
 */
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var path = require("path");
var ws_1 = require("ws");
var app = express();
var axios = require('axios');


// 处理静态资源
// app.use('/', express.static(path.join(__dirname, '..', 'client')));
// app.get('/api', function (req, res) {
//     res.send('这里是首页');
// });
// app.get('/api/stock', function (req, res) {
//     res.json(stocks);
// });
// app.get('/api/stock/:id', function (req, res) {
//     res.json(stocks.find(function (item) { return item.id == req.params.id; }));
// });

var apiRoutes = express.Router()

apiRoutes.get('/getDiscList', function (req, res) {
  var url = 'https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg'
  axios.get(url, {
    headers: {
      referer: 'https://c.y.qq.com/',
      host: 'c.y.qq.com'
    },
    params: req.query
  }).then((response) => {
    res.json(response.data)
  }).catch((e) => {
    console.log(e)
  })
})

apiRoutes.get('/getCdInfo', function (req, res) {
  var url = 'https://c.y.qq.com/qzone/fcg-bin/fcg_ucc_getcdinfo_byids_cp.fcg'
  axios.get(url, {
    headers: {
      referer: 'https://c.y.qq.com/',
      host: 'c.y.qq.com'
    },
    params: req.query
  }).then((response) => {
    var ret = response.data
    if (typeof ret === 'string') {
      var reg = /^\w+\(({.+})\)$/
      var matches = ret.match(reg)
      if (matches) {
        ret = JSON.parse(matches[1])
      }
    }
    res.json(ret)
  }).catch((e) => {
    console.log(e)
  })
})

apiRoutes.get('/lyric', function (req, res) {
  var url = 'https://c.y.qq.com/lyric/fcgi-bin/fcg_query_lyric_new.fcg'

  axios.get(url, {
    headers: {
      referer: 'https://c.y.qq.com/',
      host: 'c.y.qq.com'
    },
    params: req.query
  }).then((response) => {
    var ret = response.data

    // 如果返回的是jsonp的话，转化成json给自己

    if (typeof ret === 'string') {
      var reg = /^\w+\(({.+})\)$/
      // console.log(+new Date)
      var matches = ret.match(reg)
      // console.log(+new Date)

      if (matches) {
        ret = JSON.parse(matches[1])
      }
    }

    // 通过res.json()输出出去
    res.json(ret)
  }).catch((e) => {
    console.log(e)
  })
})

// app.use('/api', apiRoutes);
app.use('', apiRoutes);



var server = app.listen(8888, 'localhost', function () {
  console.log('服务启动，地址8888');
});



// const wsServer = new Server({ port: 8081 });
// wsServer.on('connection', websocket => {
//   websocket.send('欢迎连接ws服务器');
//   websocket.on('message', message => {
//     console.log(`接收到客户端发送的消息${message}`);
//   })
// })
// setInterval(() => {
//   if (wsServer.clients) {
//     wsServer.clients.forEach(client => {
//       client.send('hahhaha');
//     })
//   }
// }, 2000)
var subscriptions = new Set(); //客户端集合
var wsServer = new ws_1.Server({ port: 8081 });
wsServer.on('connection', function (websocket) {
  subscriptions.add(websocket); //客户端集合
});
var messageCount = 0;
setInterval(function () {
  subscriptions.forEach(function (subscription) {
    // 判断是否还连接着
    if (subscription.readyState === 1) {
      subscription.send(JSON.stringify({ messageCount: messageCount++ }));
    }
    else {
      subscriptions.delete(subscription);
    }
  });
}, 2000);
var Stock = /** @class */ (function () {
  function Stock(id, name, price, rating, desc, categories) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.rating = rating;
    this.desc = desc;
    this.categories = categories;
  }
  return Stock;
}());
exports.Stock = Stock;
var stocks = [
  new Stock(1, '第1个股票', 1, 1, 'gsp第1个股票', ['IT', '互联网', '金融']),
  new Stock(2, '第2个股票', 2, 2, 'gsp第2个股票', ['IT', '互联网']),
  new Stock(3, '第3个股票', 3, 3, 'gsp第3个股票', ['金融']),
  new Stock(4, '第4个股票', 4, 4.3, 'gsp第4个股票', ['IT', '互联网']),
  new Stock(5, '第5个股票', 5, 5.3, 'gsp第5个股票', ['IT', '互联网'])
];

app.get('/stock', function (req, res) {
  res.json(stocks);
});
