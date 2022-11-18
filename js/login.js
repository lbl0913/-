// tab切换
var login = document.getElementsByClassName('login');
var lis = document.querySelector('.cut').children;
for (var i = 0; i < lis.length; i++) {
    lis[i].setAttribute('index', i);
    lis[i].onclick = function () {
        var index = this.getAttribute('index');
        lis[index].className = 'active';
        console.log(lis.length);
        for (var j = 0; j < lis.length; j++) {
            lis[j].className = '';
            lis[index].className = 'active';
        }
        for (var k = 0; k < login.length; k++) {
            login[k].style.display = 'none';
            login[index].style.display = 'block';
        }
    }
}
// 普通登录
var input = document.getElementsByTagName('input');
var btn = document.getElementsByClassName('btn');
btn[0].onclick = function () {
    getCookie('phone');
    getCookie('pas');
    if (input[0].value == getCookie('phone') && input[1].value == getCookie('pas')) {
        localStorage.setItem('user', input[0].value);
        localStorage.setItem('pass', input[1].value);
        localStorage.setItem('islogin', true);
        alert('登录成功');
        window.location.href = 'http://127.0.0.1:5500/html/%E5%89%8D%E7%AB%AF%E5%AD%A6%E4%B9%A0/%E6%89%BE%E6%88%BF%E6%97%A0%E5%BF%A7/myLogin.html';
    } else {
        alert('账号或密码错误');
    }
}

// 验证码登录
var yzm = document.getElementById('yzm');
var num = Math.floor(Math.random() * 9000) + 1000;
var time;
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
btn[1].onclick = function () {
    getCookie('phone');
    if (input[2].value == getCookie('phone') && input[3].value == num) {
        localStorage.setItem('user', input[2].value);
        localStorage.setItem('islogin', true);
        alert('登录成功');
        window.location.href = 'http://127.0.0.1:5500/html/%E5%89%8D%E7%AB%AF%E5%AD%A6%E4%B9%A0/%E6%89%BE%E6%88%BF%E6%97%A0%E5%BF%A7/myLogin.html';
    } else {
        alert('账号或验证码错误');
    }
}