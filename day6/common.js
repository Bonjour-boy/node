//封装下拉菜单函数（select1）
function select1() {
    var html = ''; //存拼接的验证码
    html += '<option value="">省份</option>' +
        '<option value="">广东</option>' +
        '<option value="">广西</option>' +
        '<option value="">湖南</option>' +
        '<option value="">湖北</option>';
    return html;
}

//封装函数xiala（显示或隐藏菜单） isok为ture值或者flase值
function xiala(isok) {
    if (isok === true) { //如果isok为true

        box.style.display = 'block'; //下拉菜单显示

    } else {

        box.style.display = 'none'; //如果isok为flase，下拉菜单隐藏
    }

    return isok;
}

// --------------------------------------------------------------------------------------------
//封装乘阶函数（factorial）
function factorial() {
    var n = tex1.value; //获取值
    var num = 1;
    for (var i = 1; i <= n; i++) { //乘阶
        num = num * i;
    }
    return num; //返回值
}

// -----------------------------------------------------------------------------------------------
//封装随机函数（suiji）(1-9)
function suiji() {
    var html = '';
    for (var i = 1; i <= 4; i++) {
        html += parseInt(Math.random() * 10);
    }
    return html;
}

//封装4位随机函数code(有数字，有字母)
function code() {
    var html = '1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM'; //验证码的组成（数字、字母）
    var res = ''; //定义用于拼接
    for (var i = 1; i <= 4; i++) { //循环抽取4个数
        var sj = parseInt(Math.random() * html.length); //随机抽取一个数
        res += html[sj]; //拼接4位验证码
    }
    return res;
}
// ---------------------------------------------------------------------------------
//封装获取节点
function getid(id) {
    return document.getElementById(id);
}
// ------------------------------------------------------------------------------
//封装函数css（获取样式和设置样式）
// function css() {
//     if (arguments.length == 2) { //获取样式
//         return arguments[0].style[arguments[1]];

//     } else if (arguments.length == 3) { //设置样式
//         return arguments[0].style[arguments[1]] = arguments[2];
//     }
// }
//封装一个函数：能够获取元素的样式(行内和非行内)，还能设置元素的样式（行内）
function css() {
    var ele = arguments[0];
    var attr = arguments[1];
    if (arguments.length == 2) {
        //获取样式
        if (getComputedStyle(ele, false)) {
            //证明在主流浏览器下：IE9+ 和 主流的浏览器
            return getComputedStyle(ele, false)[attr];
        } else {
            //低版本IE:IE678
            return ele.currentStyle(attr);
        }
    } else if (arguments.length == 3) {
        //设置样式
        // box.style.display = 'block';
        var val = arguments[2];
        ele.style[attr] = val;
    }

}
// ---------------------------------------------------------------------------------
//封装一个函数rgb（十六进制类型）
function rgb() {
    var html = '1234567890abcdef'; //定义用于拼接
    var as = '';
    for (var i = 1; i <= 6; i++) { //循环得到6位随机数
        var code = parseInt(Math.random() * html.length); //获取一位0-f的随机数
        as += html[code];
    }
    console.log('#' + as);
    return '#' + as;
}
//封装函数col(三原色类型）
function col() {
    var res = ''; //用于拼接
    for (var j = 1; j <= 2; j++) { //循环2次
        var code1 = parseInt(Math.random() * 256); //得到两个随机数0-255;
        res += code1 + ','; //拼接组成两个随机数---------------123,213,

        if (j == 2) {
            var code2 = parseInt(Math.random() * 256); //得到最后一个随机数
            var res1 = res + code2; //拼接组成三个随机数-------------------123,124,213
            // console.log(res1);
        }
    }

    // console.log(res);
    return res1;
}

// ----------------------------------------------------------------------------------
// 封装递归函数recursion，实现阶乘
function recursion(n) {
    if (n <= 1) { //1或0的阶乘等于1
        return 1;

    } else {
        return n * recursion(n - 1); //大于1的数的阶乘
    }
}
// -----------------------------------------------------------------------------
//封装自动生成表格行列函数sheet
function sheet(rows, cols) { //rows为行，cols为列
    var html = ''; //用于拼接字符
    // var rows = tex1.value;
    // var cols = tex2.value;
    html += '<table><tbody>';

    for (var i = 0; i < rows; i++) {
        html += '<tr>' //循环rows次得到rows个<tr></tr>
        for (var j = 0; j < cols; j++) {
            html += '<td>单元格</td>'; //循环cols次得到cols个<td></td>
        }
        html += '</tr>'
    }
    html += '<tbody><table>';
    // console.log(html);
    return html;
}
// -----------------------------------------------------------------------------------------------
//封装选项卡函数xuanXiangKa
function xuanXiangKa(title, mains, cln) {
    //参数一：title代表标题；参数二：mains代表内容块；参数三：cssy代表高亮的样式
    for (var i = 0; i < title.length; i++) {
        //获取索引
        title[i].index = i;
        //绑定事件
        title[i].onmouseover = function () {
            //排它
            for (var j = 0; j < title.length; j++) {
                title[j].className = ''; //全部清空class名，后面this那个显示class名
                mains[j].style.display = 'none'; //全部先display：none，后面this那个display：block
            }
            this.className = cln; //显示class名
            mains[this.index].style.display = 'block'; //this的那个display：block
        }

    }
}

// ------------------------------------------------------------------------------------------
//封装函数Taobao选项
function Taobao(bigs, Ul) {
    //bigs表示大图片的class名；Ul表示小图片的集合class名（即小图片的外面ul的class名）
    //注意：这个方案大图片和小图片的集合都需要以class命名，使用id名不可以实现，因为id名是唯一的，而class名可以选择多个
    //注意：小图片的集合Ul是与大图片是一一对应的（即Ul的小标与大图的下标一样，可以通过Ul的下标更改大图片）

    for (var i = 0; i < Ul.length; i++) { //小图片的集合Ul是与大图片是一一对应的

        var small = Ul[i].getElementsByTagName('img'); //通过Ul找到标签img（即Ul下面的img）
        (function (i) { //闭包函数
            for (var j = 0; j < small.length; j++) {

                small[j].onmouseover = function () {

                    bigs[i].src = this.src;
                }
            }

        })(i)
    }
}
//第二种方法（利用ES6方法let和事件委托）
//封装函数Taobao选项
function Taobao(bigs, Ul) {

    for (let i = 0; i < Ul.length; i++) { //小图片的集合Ul是与大图片是一一对应的
        //let可拿到i的下标（在块级作用域内）
        var small = Ul[i].getElementsByTagName('img'); //通过Ul找到标签img（即Ul下面的img）
        //事件委托，绑定事件
        Ul[i].onmouseover = function (ev) {
            if (ev.target.tagName == 'IMG') {
                // ev.target可指向IMG下的每一项（相当于this）
                for (var j = 0; j < small.length; j++) {

                    bigs[i].src = ev.target.src;

                }
            }

        }
    }
}
// ---------------------------------------------------------------------
//取零函数Qul
function Qul(num) {
    if (num < 10) {
        return '0' + num;
    } else {
        return '' + num;
    }
}
// -------------------------------------------------------------------------
//封装一个日期函数getTime
//给一个时间戳（毫秒数）得到时间，返回对象
function getTime() {
    var time = new Date(); //获取时间戳
    var year = time.getFullYear(); //年
    var month = time.getMonth() + 1; //月
    var day = time.getDate(); //日
    var hour = time.getHours(); //时
    var min = time.getMinutes(); //分
    var sec = time.getSeconds(); //秒
    var week = time.getDay(); //星期
    //判断星期几
    //判断星期几
    var w = '天一二三四五六';
    w = '星期' + w.charAt(week);
    // var w = '';
    // switch (week) {
    //     case (0):
    //         w = '天';
    //         break;
    //     case (1):
    //         w = '一';
    //         break;
    //     case (2):
    //         w = '二';
    //         break;
    //     case (3):
    //         w = '三';
    //         break;
    //     case (4):
    //         w = '四';
    //         break;
    //     case (5):
    //         w = '五';
    //         break;
    //     case (6):
    //         w = '六';
    //         break;
    // }
    // w = '星期' + w;
    //取零函数Qul
    function Qul(num) {
        if (num < 10) {
            return '0' + num;
        } else {
            return '' + num;
        }
    }

    //返回一个对象
    return {
        years: year,
        months: Qul(month),
        days: Qul(day),
        hours: Qul(hour),
        mins: Qul(min),
        secs: Qul(sec),
        weeks: w
    }
}
getTime()
// ----------------------------------------------------------------------------------
function secChang(num) { //接收一个秒数，转成：xx天xx时xx分xx秒
    var sec = num % 60; //秒数
    var min = parseInt(num / 60) % 60; //分
    var hour = parseInt(num / 60 / 60) % 24; //小时
    var day = parseInt(num / 60 / 60 / 24); //天数
    return {
        days: day,
        hours: hour,
        mins: min,
        secs: sec
    }
}
// ------------------------------------------------------------------------------------
//封装方法实现字符串转成对象：字符串的格式是key0=0&key1=1&key2=2
function strToObj(str) {
    var json = {}; //准备用来存对象的
    var data = ''; //存参数：key0=0&key1=1&key2=2
    if (str.indexOf('?') >= 0) {
        //含有问号？，证明是一个完整的url，先截掉？前面的部分
        data = str.slice(str.indexOf('?') + 1);
    } else {
        data = str;
    }
    //字符串转成对象：key0=0&key1=1&key2=2
    var arr1 = data.split('&'); ///["key0=0", "key1=1", "key2=2"]
    arr1.forEach(function (item) {
        var arr2 = item.split('='); //['key0','0']
        json[arr2[0]] = arr2[1];
    });
    // console.log(json);
    return json;
}

// }------------------------------------------------------------------------------
function objToStr(obj) { //传进来一个对象，拼接成指定的格式 key0=0&key1=1&key2=2
    var html = ''; //存拼接好的字符串
    for (var key in obj) {
        html += key + '=' + obj[key] + '&'; //key0=0&key1=1&key2=2
    }
    return html.slice(0, -1);
}

// ----------------------------------------------------------------------------
//封装一个函数实现获取某个范围内的随机数  min-max 100 - 999
function ranNum(min, max) {
    //Math.random() 0-1 不包含1
    // return Math.random()*max + min;
    return parseInt(Math.random() * (max - min + 1)) + min; //Math.random()为0的时候，最小的时候，等于min
}
// -------------------------------------------------------------------------------

//查找第一个子节点
function firstChild(ele) {
    if (ele.firstElementChild) {
        return ele.firstElementChild;
    } else {
        return ele.firstChild;
    }
}

// var ali = firstChild(list);
// console.log(ali);

//查找最后一个子节点
function lastChild(ele) {
    if (ele.lastElementChild) {
        return ele.lastElementChild;
    } else {
        return ele.lastChild;
    }
}
// var ali = lastChild(list);
// console.log(ali);

//查找上一个兄弟节点
function upChild(ele) {
    if (ele.previousElementSibling) {
        return ele.previousElementSibling;
    } else {
        return ele.previoussibling;
    }
}
// var ap = upChild(list);
// console.log(ap);

//查找下一个兄弟节点
function nextChild(ele) {
    if (ele.nextElementSibling) {
        return ele.nextElementSibling;
    } else {
        return ele.nextousSibling;
    }
}
// var an = nextChild(list);
// console.log(an);
// ---------------------------------------------------------------------------------------------------
//正则表达
/*
 	表单验证的方法： 调用里面的子功能  (json对象里面有很多子功能)
 	var checkReg = {
 		tel : function() {}
 	}
 	
 	调用方法：
 	checkReg.tel();
 	
*/
var checkReg = {
    trim: function (str) { //去掉前后空格
        var reg = /^\s+|\s+$/g;
        return str.replace(reg, '');
    },
    tel: function (str) { //号码
        var reg = /^1[3-9]\d{9}$/;
        return reg.test(str);
    },
    email: function (str) { //邮箱正则:a_a2-+.s @ a_a+2-.s  .s_a2
        var reg = /^\w+([\-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/; //网上推荐
        return reg.test(str);
    },
    idcard: function (str) { //身份证
        var reg = /^(\d{17}|\d{14})[\dX]$/;
        return reg.test(str);
    },
    psweasy: function (str) { //6-18位首字母开头
        var reg = /^[a-zA-Z]\w{5,17}$/;
        return reg.test(str);
    },
    pwwagain: function (str1, str2) { //确认密码
        return str1 === str2; //全等 恒等
    },
    urladr: function (str) { //路径：网址规则
        var reg = /[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+\.?/;
        return reg.test(str);
    },
    name: function (str) { //账号字母开头,6-20位
        var reg = /^[a-zA-Z][\w\-]{5,19}$/;
        return reg.test(str);
    },
    chinese: function (str) { //中文
        var reg = /^[\u2E80-\u9FFF]+$/;
        return reg.test(str);
    },
    birthday: function (str) { //生日
        var reg = /^((((19|20)\d{2})-(0?[13-9]|1[012])-(0?[1-9]|[12]\d|30))|(((19|20)\d{2})-(0?[13578]|1[02])-31)|(((19|20)\d{2})-0?2-(0?[1-9]|1\d|2[0-8]))|((((19|20)([13579][26]|[2468][048]|0[48]))|(2000))-0?2-29))$/;
        return reg.test(str);
    }
}
// ---------------------------------------------------------------------------------------------
//敏感词过滤：
function filterStr(str) { //留言板记得要过滤内容再提交
    //过滤敏感词
    var arr = ['反清复明', '操', 'fuck', '小学生', '垃圾'];
    arr.forEach(function (item) {
        var reg = new RegExp(item, 'ig');
        str = str.replace(reg, '***');
    });
    return str;
}
// ---------------------------------------------------------------------------------------------
//时间转换
function secChang(num) { //接收一个秒数，转成：xx天xx时xx分xx秒
    var sec = num % 60; //秒数
    var min = parseInt(num / 60) % 60; //分
    var hour = parseInt(num / 60 / 60) % 24; //小时
    var day = parseInt(num / 60 / 60 / 24); //天数
    return {
        days: day,
        hours: hour,
        mins: min,
        secs: sec
    }
}
// ----------------------------------运动框架-------------------------------------------
/*
	运动框架封装：startMove()过渡    jq animate()
	最终版：多对象，多属性，链式运动框架(运动队列)
	参数一：对象名
	参数二：属性，目标值  键名：属性名，键值：目标值    {'width':200,'heigth':400}  实现：宽度和高度一起改变，宽度变成200，高度变成400
	参数三：回调函数(可选参数)
 */

function startMove(obj, json, fnend) {

    clearInterval(obj.timer); //防止定时器叠加
    obj.timer = setInterval(function () {

        var istrue = true;

        //1.获取属性名，获取键名：属性名->初始值
        for (var key in json) { //key:键名   json[key] :键值
            //			console.log(key); //width heigth opacity
            var cur = 0; //存初始值

            if (key == 'opacity') { //初始值
                cur = css(obj, key) * 100; //透明度
            } else {
                cur = parseInt(css(obj, key)); // 300px  300  width heigth borderwidth px为单位的

            }

            //2.根据初始值和目标值，进行判断确定speed方向，变形：缓冲运动
            //距离越大，速度越大,下面的公式具备方向
            var speed = (json[key] - cur) / 6; //出现小数
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed); //不要小数部分，没有这句话或晃动

            //保证上一个属性全部都达到目标值了
            if (cur != json[key]) { //width 200 heigth 400
                istrue = false; //如果没有达到目标值，开关false
            } else {
                istrue = true; //true true
            }

            //3、运动
            if (key == 'opacity') {
                obj.style.opacity = (cur + speed) / 100; //0-1
                obj.style.filter = 'alpha(opacity:' + (cur + speed) + ')'; //0-100
            } else {
                obj.style[key] = cur + speed + 'px'; //针对普通属性 left  top height 
            }

        }

        //4.回调函数:准备一个开关,确保以上json所有的属性都已经达到目标值,才能调用这个回调函数
        if (istrue) { //如果为true,证明以上属性都达到目标值了
            clearInterval(obj.timer);
            if (fnend) { //可选参数的由来
                fnend();
            }
        }

    }, 30); //obj.timer 每个对象都有自己定时器

}
// -----------------------------轮播图--------------------------------------------------------------------
function imageScroll(id) {
    //图片路径
    var arrimgs = ['sc0.jpg', 'sc1_.webp', 'sc2.jpg', 'sc3.webp', 'sc4.jpg'];
    //找节点
    let box = document.getElementById(id);
    let list = box.querySelector('.list');

    //渲染图片
    let html = arrimgs.map(function (item) {
        return `
        <li><img src="../images/${item}" alt=""></li>
        `
    }).join('');
    list.innerHTML = html + ` <p onselectstart = 'return false' class='qian'>&lt;</p>
                            <p onselectstart = 'return false' class="hou">&gt;</p>`; //图片

    //找节点
    let lis = document.querySelectorAll('li');
    let iw = lis[0].offsetWidth;
    let num = 0
    //把图片放右侧，除了第一张
    for (var i = 1; i < lis.length; i++) {
        lis[i].style.left = iw + 'px';
    }

    //开启定时器让图片动起来，自动轮播
    let timer = null;
    timer = setInterval(next, 2000);
    //旧图挪走，新图进场
    function next() { //下一张
        startMove(lis[num], {
            'left': -iw
        });
        num++;
        if (num >= lis.length) {
            num = 0;
        }
        startMove(lis[num], {
            'left': 0
        });
        lis[num].style.left = iw + 'px'; //新图快速放回右边
        lightMove()
    }

    function prev() { //前一张
        startMove(lis[num], {
            'left': iw
        });
        num--;
        if (num < 0) {
            num = lis.length - 1;
        }
        startMove(lis[num], {
            'left': 0
        });
        lis[num].style.left = -iw + 'px'; //新图快速放回左边
        lightMove()
    }

    //鼠标滑过停止
    box.onmouseover = () => {
        clearInterval(timer)
    }
    //鼠标滑出时图片继续轮播
    box.onmouseout = () => {
        timer = setInterval(next, 2000);
    }

    //点击按钮可以切换
    list.onclick = function (ev) {
        if (ev.target.className == 'qian') {
            prev();
        }
        if (ev.target.className == 'hou') {
            next();
        }
    }

    //焦点跟随
    let res = '';
    for (var i = 0; i < arrimgs.length; i++) {
        res += `<span data-index = "${i}"></span>`
    }
    let list1 = box.querySelector('.list1');
    list1.innerHTML = res; //圆点
    let yuan = list1.querySelectorAll('span');
    yuan[0].className = 'active';

    function lightMove() {
        for (var j = 0; j < yuan.length; j++) {
            yuan[j].className = '';
        }
        yuan[num].className = 'active';
    }

    //点击焦点能快速的跳转到对应图片
    list1.onclick = (ev) => {
        if (ev.target.tagName.toLowerCase() == 'span') {
            let index = ev.target.dataset.index;
            if (index > num) {
                //旧图挪到左侧
                startMove(lis[num], {
                    'left': -iw
                });
                ////新图快速放在右侧
                lis[index].style.left = iw + 'px';
                //新图从右边切入
                startMove(lis[index], {
                    'left': 0
                });
            }
            if (index < num) {
                //旧图挪到右侧
                startMove(lis[num], {
                    'left': iw
                });
                ////新图快速放在左侧
                lis[index].style.left = -iw + 'px';
                //新图从左边切入
                startMove(lis[index], {
                    'left': 0
                });
            }
            //新图变旧图
            num = index;
            lightMove()
        }
    }
}
//-----------------------------------百度分享-------------------------------------------------------
function imageScroll2(id) {
    //图片路径
    var arrimgs = ['sc0.jpg', 'sc1_.webp', 'sc2.jpg', 'sc3.webp', 'sc4.jpg'];
    //找节点
    let box = document.getElementById(id);
    let bannerScroll = box.querySelector('.bannerScroll');

    //渲染图片
    let html = arrimgs.map(function (item) {
        return `
    <li style="z-index: 1"><img src="../images/${item}" alt=""></li>
    `
    }).join('');
    bannerScroll.innerHTML = html + ` <p onselectstart = 'return false' id='qian'>&lt;</p>
                        <p onselectstart = 'return false' id="hou">&gt;</p>`; //图片

    //找节点
    let lis = document.querySelectorAll('li');
    let qian = document.getElementById('qian');
    let hou = document.getElementById('hou');
    let now = 0; //当前播放的下标
    let iIndex = 2;

    //1.自动轮播
    let timer = null;

    timer = setInterval(next, 2000); //每隔两秒切换一个图片

    function next() { //下一页
        //大图
        now++;
        if (now >= lis.length) { //临界点
            now = 0;

        }
        tab();
        lightMove();
    }

    function tab() { //切换图片
        if (iIndex > lis.length) {
            iIndex = 1;
            clearIndex(); //层级归零
        }
        lis[now].style.zIndex = iIndex++; //改变层级

        startMove(lis[now], {
            'opacity': 100
        }); //过渡到320
        //渐现
        lis[now].style.opacity = 0;
    }

    //上一页
    function prev() {
        now--;
        if (now < 0) { //临界值
            now = lis.length - 1;
        }
        tab();
        lightMove();
    }

    //层级归零
    function clearIndex() {
        for (var i = 0; i < lis.length; i++) {
            lis[i].style.zIndex = 0;
        }
    }

    //焦点跟随
    let res = '';
    for (var i = 0; i < arrimgs.length; i++) {
        res += `<span data-index = "${i}"></span>`
    }
    let fouseScroll = box.querySelector('.fouseScroll');
    fouseScroll.innerHTML = res; //圆点
    let yuan = fouseScroll.querySelectorAll('span');
    yuan[0].className = 'active';

    function lightMove() {
        for (var j = 0; j < yuan.length; j++) {
            yuan[j].className = '';
        }
        yuan[now].className = 'active';
    }


    //2.点击左右按钮可以切换图片
    bannerScroll.onmouseover = () => {
        //输入移入的时候停止播放
        clearInterval(timer);
        qian.style.display = 'block';
        hou.style.display = 'block';
    }

    bannerScroll.onmouseout = () => {
        timer = setInterval(next, 2000); //每隔两秒切换一个图片
        qian.style.display = 'none';
        hou.style.display = 'none';
    }
    //点击按钮可以切换
    bannerScroll.onclick = function (ev) {
        if (ev.target.id == 'qian') {
            prev();
        }
        if (ev.target.id == 'hou') {
            next();
        }
    }

    //点击焦点能快速的跳转到对应图片
    fouseScroll.onmouseover = () => {
        clearInterval(timer);
    }
    fouseScroll.onclick = (ev) => {
        if (ev.target.tagName.toLowerCase() == 'span') {
            for (var j = 0; j < yuan.length; j++) {
                yuan[j].className = '';
            }
            ev.target.className = 'active';
            let index = ev.target.dataset.index; //获取当前点击的data-id

            if (iIndex > lis.length) {
                iIndex = 1;
                clearIndex(); //层级归零
            }
            lis[index].style.zIndex = iIndex++; //改变层级

        }
    }

}
// -----------------------------------------------------------
function baiBu(id) {
    //找节点
    let box = document.getElementById(id);

    //需求：百度分享
    box.onmouseover = function () {
        //往左走 right：0
        startMove(box, {
            'right': 0
        });
    }

    box.onmouseout = function () {
        //往右走 right：-200
        startMove(box, {
            'right': -200
        });
    }
}
// ------------------------------------------------------------------------------------
//封装ajax

/*
    jq：ajax

    $.ajax({ //配置参数
        type : 'get',
        url : xxx,
        data : '',
        async : true,
        success : function(str) {

        }
    });
*/

function ajax2(opt) {
    function extend(obj1, obj2) {
        for (var key in obj2) {
            obj1[key] = obj2[key];
        }
    }

    //默认参数
    var defaults = {
        async: true
    }

    //后面使用默认参数
    extend(defaults, opt);

    var xhr = new XMLHttpRequest();
    if (defaults.type.toLowerCase() == 'get') {
        //get请求
        if (defaults.data) {
            defaults.url += '?' + defaults.data;
        }
        xhr.open(defaults.type, defaults.url, defaults.async);
        xhr.send(null);
    } else {
        //post请求
        xhr.open(defaults.type, defaults.url, defaults.async);
        xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
        xhr.send(defaults.data);
    }

    //接收数据返回
    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                if (defaults.success) { //如果有数据就返回
                    defaults.success(xhr.responseText);
                }
            } else {
                alert('错误http状态码是：' + xhr.status);
            }
        }
    }
}