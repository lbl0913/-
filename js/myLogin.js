// cookie 与页面的交互

window.onload = function () {
    var user = document.getElementById('user');
    var userName = localStorage.getItem('user');
    var islogin = localStorage.getItem('islogin');
    if (islogin) {
        var str = `<p>欢迎您，${userName}</p>`;
        user.innerHTML = str;
        user.id = 'user';
    }
}