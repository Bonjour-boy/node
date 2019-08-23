var express = require("express");
var router = express.Router();
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

let {
    find,
    add,
    ObjectId,
    updata,
    delect
} = require('../libs/db');


//注册
router.post("/logup", async (req, res, next) => {
    let {
        Email,
        Password
    } = req.body;

    let data = await find('name', {
        'name': Email
    });
    // console.log(data);
    if (data.length) {
        res.send('该用户已存在'); //账号存在,不给注册
    } else {
        let result = await add('name', {
            'name': Email,
            'password': Password
        });
        // console.log(result);
        if (result) {
            res.send('注册成功');
        } else {
            res.send('注册失败');
        }
    }

})

//登录
router.post("/login", async (req, res, next) => {
    let {
        inputEmail,
        inputPassword
    } = req.body;

    let data = await find('name', {
        $and: [{
            'name': inputEmail
        }, {
            'password': inputPassword
        }]
    });
    // console.log(data);
    if (data.length) {
        res.send('登录成功'); //账号存在，可以登录
    } else {
        res.send('登录失败'); //账号不存在，登录失败
    }

})

//查找全部
router.get("/find", async (req, res, next) => {
    let data = await find('name');
    console.log(data);
})


// //查找
// router.post("/find", async (req, res, next) => {
//     let data = await find('name', {
//         $and: [{
//             'name': 'bon'
//         }, {
//             'password': '123123'
//         }]
//     });
//     console.log(data);
//     res.send(data);

// });
// //增加
// router.post("/add", async (req, res, next) => {
//     let data = await add('name', {
//         'name': 'xian',
//         'password': 123123
//     });
//     // console.log(data);
//     res.send(data);

// });

// //更新(注意：要更改的数据以数组的形式传入)
// router.post("/updata", async (req, res, next) => {
//     let data = await updata('name', [{
//         'name': 'xian'
//     }, {
//         'password': 46464
//     }]);
//     // console.log(data);
//     res.send(data);

// });

// //删除
// router.post("/delect", async (req, res, next) => {
//     let data = await delect('name', {
//         'name': 'ling'
//     });
//     // console.log(data);
//     res.send(data);

// });

console.log('服务器开启');

module.exports = router;