var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use((req, res, next) => {
    // 全局添加
    res.append('Access-Control-Allow-Origin', '*');
    next();
})
app.post('/login', (req, res) => {
    // res.append('Access-Control-Allow-Origin', '*');
    console.log(req.body);
    let {
        username,
        password
    } = req.body;
    if (username === 'bo' && password === '123') {
        console.log('登录成功');
    } else {
        console.log('登录失败');
    }
    res.send(req.body);
})

app.listen(4567);
console.log('启动服务器');