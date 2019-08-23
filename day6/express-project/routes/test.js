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
    ObjectId,
} = require('../libs/db');

//加密
const {
    createToken,
    decodeToken,
    checkToken
} = require('../libs/token');


//登录
router.post("/login", async (req, res, next) => {
    let {
        inputEmail,
        inputPassword,
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
        const token = createToken({
            'nsername': inputEmail,
        }, 500);
        // console.log(token);
        res.json({
            status: '登录成功', //账号存在，登录成功
            token
        })

    } else {
        res.send('登录失败'); //账号不存在，登录失败
    }

})



console.log('服务器开启1');

module.exports = router;














//加密
// const token = createToken({
//     'nsername': 'bo',
//     'password': 123456
// }, 500);
// console.log(token);
//eyJkYXRhIjp7Im5zZXJuYW1lIjoiYm8iLCJwYXNzd29yZCI6MTIzNDU2fSwiY3JlYXRlZCI6MTU2Mzc4ODA0MSwiZXhwIjo1MDB9.agkJpcalDfPlDtyVIPyAwrqTKXvDZYzW7Yx7JnVuGKs=




//解码
// const tokenencode = decodeToken('eyJkYXRhIjp7Im5zZXJuYW1lIjoiYm8iLCJwYXNzd29yZCI6MTIzNDU2fSwiY3JlYXRlZCI6MTU2Mzc4ODA0MSwiZXhwIjo1MDB9.agkJpcalDfPlDtyVIPyAwrqTKXvDZYzW7Yx7JnVuGKs=');
// console.log(tokenencode);



//校验
// const check = checkToken('eyJkYXRhIjp7Im5zZXJuYW1lIjoiYm8iLCJwYXNzd29yZCI6MTIzNDU2fSwiY3JlYXRlZCI6MTU2Mzc4ODI1MiwiZXhwIjo1MDB9.XpLLeR4yDocx8QecoxEAlDIUk2f/GQqEiBRcI3olmeg=');
// console.log(check);