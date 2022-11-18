var mySwiper = new Swiper('.swiper', {
    direction: 'horizontal', // 垂直切换选项
    loop: true, // 循环模式选项
    autoplay: true,//自动切换
    effect: 'fade',

    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
    },
})  