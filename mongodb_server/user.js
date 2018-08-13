const express = require('express');
const Router = express.Router();
const model = require('./model');
const User = model.getModel('user');

Router.get('/list', function (req, res) {
  const { type } = req.query;
  if (!type) {
    User.find({}, function (err, doc) {
      return res.json({ code: '0', data: doc });
    })
    return;
  }
  User.find({ type }, function (err, doc) {
    return res.json({ code: '0', data: doc });
  })
})

Router.post('/register', function (req, res) {
  console.log(req.body);
  const { user, type, pwd } = req.body;
  User.findOne({ user: user }, function (err, doc) {
    if (doc) {
      return res.json({ code: '1', msg: '该用户名已经被注册' });
    }

    const userModel = new User({ user, type, pwd });

    userModel.save(function (e, d) {
      if (e) {
        return res.json({ code: '1', msg: '后端出错' });
      }

      const { user, type, _id } = d;
      res.cookie('userid', _id);

      return res.json({ code: '0', data: { user, type, _id } });
    })
  })
})

Router.post('/login', function (req, res) {
  console.log(req.body);
  const { user, type, pwd } = req.body;
  // { pwd: 0 }让pwd不在前端显示
  User.findOne({ user, type, pwd }, { pwd: 0 }, function (err, doc) {
    if (doc) {
      // 设置cookie
      res.cookie('userid', doc._id);
      return res.json({ code: '0', msg: '登录成功', data: doc });
    } else {
      return res.json({ code: '1', msg: '用户名或密码或类型错误' });
    }
  })
})

Router.get('/info', function (req, res) {
  const { userid } = req.cookies;
  if (!userid) {
    return res.json({
      code: '1'
    })
  }

  User.findOne({ _id: userid }, { pwd: 0 }, function (err, doc) {
    if (err) {
      return res.json({ code: '1', msg: '后端出错了' });
    }
    return res.json({
      code: '0',
      data: doc
    })
  })

})

Router.post('/update', function (req, res) {
  const { userid } = req.cookies;
  console.log(userid);
  if (!userid) {
    return json.dumps({
      code: '1'
    })
  }

  const body = req.body;
  User.findByIdAndUpdate(userid, body, function (err, doc) {
    if (err) {
      return res.json({
        code: '1',
        err: err,
        msg: '后端报错'
      })
    }
    const data = Object.assign({}, {
      user: doc.user,
      type: doc.type
    }, body);

    return res.json({
      code: '0',
      data: data
    });
  })
})

// 删除全部
// User.remove({user:'gsp'}, function (e, d) {

// })

module.exports = Router;
