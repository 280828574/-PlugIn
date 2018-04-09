// javascript 前端中能做什么
//     1.响应用户的操作 事件（键盘事件、鼠标事件）
//     2.操作dom元素（增删改查、属性操作、样式等）
//     3.数据交互 表单验证 ajax json jsonp 正则表达式
//     4.造轮子 mvvm mvc nodeJS jquery
//
// 需求分析
//    用户点击发送按钮 把input的内容展示到box里面
//    1.元素 .con .send-btn .box span（创建）
//    2.事件：点击事件 键盘事件
//    3.行为
//        1.点击.send-btn获取.con的内容
//            (1)规范发送信息
//            (2)禁止空及全空格
//            (3)存储value值
//        2.根据内容动态生成span标签
//            (1)创建节点document.createElement
//            (2)改变节点内容innerHTML
//            (3)节点 生成初始化位置等
//            (4)标签添加到oBox appendChild
//        3.message运动
//            (1)改变元素的left值
//            (2)定时器改变 setInterval
//            (3)this代表当前弹幕
//            (4)弹幕left = 当前left-1
//        4.随机函数
//            Math.random 0-1 包括0但不包括1
//            (1)top
//            (2)color
//            (3)fontsize
//            (4)textShadow
//            (5)timing运动曲线
//                linear
//                ease-out
//        5.业务完善
//            (1)过去的删除掉
//                停止计时器
//                删除自身
//                终止函数
//            (2)完善回车输入
//                在oCon上回车 发送弹幕
//

//1.获取元素
var oBox = document.querySelector('.box');   //获取.box元素
var oBoxRow = document.querySelector('.flex-row');   //获取.flex-row元素
var oCon = document.querySelector('.con');   //获取input框
var oBtn = document.querySelector('.send-btn');   //获取发送按钮
var cW = oBox.offsetWidth;   //获取box的宽度
var cH = oBox.offsetHeight-oBoxRow.offsetHeight;   //获取box的高度
var message = '';   //弹幕内容初始化
oBtn.onclick = send;   //点击发送
oCon.onkeydown = function (e) {
    e = e || window.event;
    if (e.keyCode === 13) {
        //回车键
        send();
    }
};
function send() {
    //获取oCon的内容
    if (oCon.value.length <= 0 || (/^\s+$/).test(oCon.value)) {
        alert('请输入弹幕');
        return false;

    }
    message = oCon.value;
    //生成标签
    createEle(message);   //执行节点创建模块
    oCon.value = '';   //收尾工作清空输入框
}
function createEle(txt) {
    //动态生成span标签
    var oMessage = document.createElement('span');   //创建标签
    oMessage.innerHTML = txt;   //接收参数txt并且生成替换内容
    oMessage.style.left = cW + 'px';  //初始化生成位置x
    oBox.appendChild(oMessage);   //把标签塞到oBox里面
    console.log(oBoxRow.offsetHeight)
    roll.call(oMessage, {
        //call改变函数内部this的指向
        timing: ['linear', 'ease-out'][~~(Math.random() * 2)],
        color: '#' + (~~(Math.random() * (1 << 24))).toString(16),
        top: random(0, cH),
        fontSize: random(16, 32)
    });
}
function roll(opt) {
    //弹幕滚动
    //如果对象中不存在timing 初始化
    opt.timing = opt.timing || 'linear';
    opt.color = opt.color || '#fff';
    opt.top = opt.top || 0;
    opt.fontSize = opt.fontSize || 16;
    this._left = parseInt(this.offsetLeft);   //获取当前left的值
    this.style.color = opt.color;   //初始化颜色
    this.style.top = opt.top + 'px';
    this.style.fontSize = opt.fontSize + 'px';
    this.timer = setInterval(function () {
        if (this._left <= 100) {
            clearInterval(this.timer);   //终止定时器
            this.parentNode.removeChild(this);
            return;   //终止函数
        }
        switch (opt.timing) {
            case 'linear':   //如果匀速
                this._left += -2;
                break;
            case 'ease-out':   //
                this._left += (0 - this._left) * .01;
                break;
        }
        this.style.left = this._left + 'px';
    }.bind(this), 1000 / 60);
}
function random(start, end) {
    //随机数封装
    return start + ~~(Math.random() * (end - start));
}
var aLi = document.querySelectorAll('li');   //10

function forEach(ele, cb) {
    for (var i = 0, len = aLi.length; i < len; i++) {
        cb && cb(ele[i], i);
    }
}
forEach(aLi, function (ele, i) {
    ele.style.left = i * 100 + 'px';
});
//产生闭包
var obj = {
    num: 1,
    add: function () {
        this.num++;   //obj.num = 2;
    }
};
obj.add();  //window