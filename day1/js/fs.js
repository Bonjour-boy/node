// console.log(666);

// var fd = 123344657;
// console.log(fd);

// console.log(666);

//文件写入
// var {
//     writeFile
// } = require('fs');

// writeFile('../dsc/123.txt', '你好a ', (err, data) => { //异步
//     if (err) {
//         console.log('写入失败');
//     } else {
//         console.log('写入成功');
//     }

// });

//添加文件
// var {
//     appendFile
// } = require('fs');

// appendFile('../dsc/456.txt', '成功', (err) => {
//     if (err) {
//         console.log('添加失败');
//     } else {
//         console.log('添加成功');
//     }
// });

// var {
//     close
// } = require('fs');
// close(123, (err) => {
//     if (err) {
//         console.log('成功');
//     } else {
//         console.log('失败');
//     }
// })
//创建服务器
var http = require('http');

var data = http.createServer((req, res) => {

    // console.log(req.httpVersion);
    // console.log(req.headers);
    // console.log(req.method);
    // console.log(req.url);
    // console.log(req.trailers);
    // console.log(req.complete);
    res.writeHead(200, {
        'Content-Type': 'text/html;charset=UTF8'
    });
    // console.log(res);
    res.write("你好")
    res.end('<h1>我是H1标签</h1>'); //写在最后


}).listen(8000);
// console.log(data);