var express = require('express');
var app = express();

app.get('/home', (req, res) => {
    res.append('Access-Control-Allow-Origin', '*');
    res.send('你好');
});

app.post('/settimg', (req, res) => {
    res.append('Access-Control-Allow-Origin', '*');
    res.send(
        JSON.stringify(['a', 'b', 'c', 'd', 'e'])

    );
});
app.listen(3456);
console.log('启动服务器');