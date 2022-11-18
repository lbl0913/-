var irea = document.getElementsByClassName('irea');//区域
var mouth_ = document.getElementsByClassName('mouth');//月租
var hstyle = document.getElementsByClassName('hstyle');//房型
var mmore = document.getElementsByClassName('mmore');//更多
var somelist = document.querySelector('.somelist');//二级区域
var active = document.querySelector('.active');//二级月租
var housestyle = document.querySelector('.housestyle');//二级房型
var more = document.querySelector('.more');//二级更多
var hide = document.querySelector('.hide');//蒙版
irea[0].onclick = function () {
    somelist.style.display = 'block';
    hide.style.display = 'block';
}
mouth_[0].onclick = function () {
    active.style.display = 'block';
    hide.style.display = 'block';
}
hstyle[0].onclick = function () {
    housestyle.style.display = 'block';
    hide.style.display = 'block';
}
mmore[0].onclick = function () {
    more.style.display = 'block';
    hide.style.display = 'block';
}
hide.onclick = function () {
    somelist.style.display = 'none';
    active.style.display = 'none';
    housestyle.style.display = 'none';
    more.style.display = 'none';
    hide.style.display = 'none';
}