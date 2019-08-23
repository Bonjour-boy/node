var express = require("express");
var router = express.Router();

//查找
// var {
//     find
// } = require('../libs/db.js');

// /* GET users listing. */
// router.get('/find', function (req, res, next) {
//     find('users', null, (results) => {
//         res.send(results);
//     })

// });

//增加
// var {
//     add
// } = require('../libs/db.js');

// router.get('/find', function (req, res, next) {
//     add('users', 'haohao', 1234444, (results) => {
//         res.send(results);
//     })

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

var {
  change
} = require("../libs/db.js");

router.get("/find", function (req, res, next) {
  change("users", "kkk", 44444, results => {
    results = "修改成功";
    res.send(results);
  });
});
module.exports = router;