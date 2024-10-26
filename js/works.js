document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

$(document).ready(function(){
    // 在初始化滑块之前预加载图片
    let loadedImages = 0;
    const totalImages = $('.gallery img').length;
    
    $('.gallery img').each(function() {
        const img = $(this);
        if (img[0].complete) {
            loadedImages++;
            if (loadedImages === totalImages) {
                initializeSliders();
                // 图片加载完成后进行分类
                classifyImage();
            }
        } else {
            img[0].onload = function() {
                loadedImages++;
                if (loadedImages === totalImages) {
                    initializeSliders();
                    // 图片加载完成后进行分类
                classifyImage();
                }
            };
        }
    });
});



function initializeSliders() {
    // 将您现有的滑块初始化代码放在这里
    // ...现有的slick初始化代码...
}

$(document).ready(function(){
    // 检测是否为移动设备
    const isMobile = window.innerWidth <= 768;

    // 主图片轮播设置
    $('.gallery').slick({
        infinite: true,
        fade: true,
        speed: 1000,
        arrows: true,
        prevArrow: '<div class="slick-prev"></div>',
        nextArrow: '<div class="slick-next"></div>',
        asNavFor: '.choice-btn'
    });

    // 缩略图轮播设置
    $('.choice-btn').slick({
        infinite: true,
        slidesToShow: isMobile ? 4 : 8, // 移动端显示4个，桌面显示8个
        slidesToScroll: 1,
        vertical: !isMobile, // 移动端水平，桌面端垂直
        verticalSwiping: !isMobile,
        focusOnSelect: true,
        asNavFor: '.gallery',
        prevArrow: '',
        nextArrow: '',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4,
                    vertical: false,
                    verticalSwiping: false,
                    dots: false
                }
            }
        ]
    });

    // 图片添加类
    // $('.gallery img').each(function() {
    //     var img = $(this);
    //     var imgWidth = img[0].naturalWidth;
    //     var imgHeight = img[0].naturalHeight;
    //     var ratio = imgWidth / imgHeight;

    //     if (ratio > 1.6) {
    //         img.addClass('wide-img');
    //     } else if (ratio > 1) {
    //         img.addClass('landscape-img');
    //     } else {
    //         img.addClass('portrait-img');
    //     }
    // });

    // 修改图片分类的代码，添加图片加载完成的判断
$('.gallery img').each(function() {
    var img = $(this);
    
    // 确保图片加载完成后再分类
    if (img[0].complete) {
        classifyImage(img);
    } else {
        img.on('load', function() {
            classifyImage(img);
        });
    }
});

function classifyImage(img) {
    var imgWidth = img[0].naturalWidth;
    var imgHeight = img[0].naturalHeight;
    var ratio = imgWidth / imgHeight;

    // 移除所有可能的类，然后添加正确的类
    img.removeClass('wide-img landscape-img portrait-img');
    
    if (ratio > 1.6) {
        img.addClass('wide-img');
    } else if (ratio > 1) {
        img.addClass('landscape-img');
    } else {
        img.addClass('portrait-img');
    }
}

    // 监听窗口大小变化，更新布局
    $(window).on('resize', function() {
        const isMobile = window.innerWidth <= 768;
        $('.choice-btn').slick('unslick').slick({
            infinite: true,
            slidesToShow: isMobile ? 4 : 8,
            slidesToScroll: 1,
            vertical: !isMobile,
            verticalSwiping: !isMobile,
            focusOnSelect: true,
            asNavFor: '.gallery',
            prevArrow: '',
            nextArrow: ''
        });
    });
});