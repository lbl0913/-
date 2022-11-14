function setRem() {
    var ui_w = 375;
    var clientWidth = document.documentElement.clientWidth || document.body.clientWidth;
    var html_ = document.getElementsByTagName('html')[0];
    html_.style.fontSize = (clientWidth / ui_w) * 100 + "px";
}
var timer = null;
window.onresize = function () {
    clearTimeout(timer);
    timer = setTimeout(setRem, 1000);
} 