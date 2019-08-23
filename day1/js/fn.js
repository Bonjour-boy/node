var fs = require('fs');
// console.log(fs);


// var data = fs.readFileSync('../dsc/123.txt', { //同步
//     encoding: 'utf8', //编码格式
//     flag: 'r'
// });

// console.log(data);

// var data = fs.appendFile('red.txt', '你不好a', (err) => { //添加文件
//     if (err) {
//         console.log('添加失败');
//     } else {
//         console.log('添加成功');
//     }
// })

var fs = require('fs');
fs.open('../dsc/123.txt', 'a', function (err, fd) {
    if (err) {
        throw err;
    }
    fs.futimes(fd, 1388648322, 1388648325, function (err) {
        if (err) {
            throw err;
        }
        console.log('futimes complete');
        // fs.close(fd, function () {
        //     console.log('Done');
        // });
    });
});