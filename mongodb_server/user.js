const express = require('express');
const Router = express.Router();
const model = require('./model');
const User = model.getModel('user');

Router.get('/list', function (req, res) {
  User.find({}, function (err, doc) {
    return res.json(doc);
  })
})

Router.post('/register', function (req, res) {
  console.log(req.body);
  const { user, type, pwd } = req.body;
  User.findOne({ user: user }, function (err, doc) {
    if (doc) {
      return res.json({ code: '1', msg: '该用户名已经被注册' });
    }
    User.create({ user, pwd, type }, function (e, d) {
      if (e) {
        return res.json({ code: '1', msg: '后端出错了' });
      } else {
        return res.json({ code: '0', msg: '注册成功' });
      }
    })
  })
})

Router.get('/info', function (req, res) {
  return res.json({
    code: 1
  })
})

module.exports = Router;
