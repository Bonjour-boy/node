var express = require("express");
var router = express.Router();
// var app = express();
var bodyParser = require("body-parser");

router.use(
  bodyParser.urlencoded({
    extended: false
  })
);

router.use((req, res, next) => {
  // 全局添加
  res.append("Access-Control-Allow-Origin", "*");
  next();
});

var {
  finds,
  find,
  add
} = require('../libs/db.js');


//注册
router.post("/add", function (req, res, next) {
  let {
    username,
    password
  } = req.body;
  // console.log(req.body);
  find('users', username, (results) => {

    if (results == "no") {
      res.send('该用户已被注册');
    } else {
      add("users", username, password, (rest) => {
        if (rest) {
          rest = "注册成功";
          console.log(rest);
          res.send(rest);
        }
      });
    }
  })
});

//查找账户密码(登录)
router.post('/find', function (req, res, next) {
  let userPass = {
    username,
    password
  } = req.body;

  finds('users', userPass, (results) => {
    console.log(results);
    if (results == 'yes') {
      res.send('登录成功');
    } else {
      res.send('登录失败');
    }

  })

});

console.log("启动服务器123");
//增加
// var {
//   add,
//   find
// } = require("../libs/db.js");

// router.post("/add", function (req, res, next) {
//   let {
//     username,
//     password
//   } = req.body;
//   // console.log(req.body);
//   find('users', username, (results) => {
//     // console.log(results[0]);
//     if (results[0]) {
//       results = '该用户已被注册'
//       res.send(results);
//     } else {
//       add("users", username, password, (rest) => {
//         if (rest) {
//           rest = "注册成功";
//           console.log(rest);
//         }
//       });
//       res.send('yes');
//     }
//   })
// });

//删除
// var {
//     dalect
// } = require('../libs/db.js');

// router.get('/find', function (req, res, next) {
//     dalect('users', 'haohao', (results) => {
//         res.send(results);
//     })

// });

//更改

// var {
//   change
// } = require("../libs/db.js");

// router.get("/find", function (req, res, next) {
//   change("users", "kkk", 44444, results => {
//     results = "修改成功";
//     res.send(results);
//   });
// });
module.exports = router;