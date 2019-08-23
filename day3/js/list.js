var express = require('express'); //express是帮你做了http添砖加瓦，做完了一个后端该有的一 个框架
var app = express(); //初始化express，让诞生第一个项目的对象

var bodyParser = require('body-parser'); // 解析请求体的模块
var fs = require('fs'); // 该app对象调用其他模块来去处理请求和响应


app.use(bodyParser.urlencoded({
    extended: false
}));
//全局添加CORS方法解决跨域
app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', '*');
    next();
});

app.get('/list', async (req, res) => {
    let data = await new Promise((resolve, reject) => {
        fs.readFile('list.json', (err, data) => {
            err ? reject(err) : resolve(data);
        });
    });
    res.send(data);
});

app.listen(34567);
console.log('服务器开启');