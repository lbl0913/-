// 注册
var yzm = document.getElementById('yzm');
var input = document.getElementsByTagName('input');
var btn = document.getElementsByClassName('btn')[0];
var phone = document.querySelector('#phone');
var password = document.querySelector('#password');
var time;
var num = Math.floor(Math.random() * 9000) + 1000;
yzm.onclick = function () {
    var min = 60;
    num = Math.floor(Math.random() * 9000) + 1000;
    clearInterval(time);
    alert('验证码' + num);
    time = setInterval(function () {
        min--;
        if (min >= 0) {
            yzm.innerHTML = '(' + min + '秒)重发';
        }
        else if (min < 0) {
            yzm.innerHTML = '发送验证码';
        }
    }, 1000)
}
input[2].onfocus = function () {
    input[2].placeholder = '请输入6-12位字符的密码';
}
input[2].onblur = function () {
    input[2].placeholder = '请输入密码';
}
btn.onclick = function () {
    var reg = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/;
    var reg1 = /^\w{6,12}$/;
    if (reg.test(input[0].value) && input[1].value == num && reg1.test(input[2].value)) {
        setCookie('phone', phone.value, 20)
        setCookie('pas', password.value, 20)
        alert('注册成功')
        window.location.href = 'http://127.0.0.1:5500/html/%E5%89%8D%E7%AB%AF%E5%AD%A6%E4%B9%A0/%E6%89%BE%E6%88%BF%E6%97%A0%E5%BF%A7/login.html';
    } else {
        alert('注册失败，请重新检查是否正确')
    }
}