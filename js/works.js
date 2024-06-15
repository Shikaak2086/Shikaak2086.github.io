document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
  });

$(document).ready(function(){
    // 上部画像の設定
    $('.gallery').slick({
        infinite: true,
        fade: true,
        speed: 1000,
        arrows: true,
        prevArrow: '<div class="slick-prev"></div>',
        nextArrow: '<div class="slick-next"></div>',
        asNavFor: '.choice-btn'
    });

    // 選択画像の設定
    $('.choice-btn').slick({
        infinite: true,
        slidesToShow: 8,
        vertical: true,
        focusOnSelect: true,
        asNavFor: '.gallery',
        prevArrow: '',
        nextArrow: ''
    });

    // 图片添加类
    $('.gallery img').each(function() {
        var img = $(this);
        var imgWidth = img[0].naturalWidth;
        var imgHeight = img[0].naturalHeight;
        var ratio = imgWidth / imgHeight;

        if (ratio > 1.6) {
            img.addClass('wide-img');
        } else if (ratio > 1) {
            img.addClass('landscape-img');
        } else {
            img.addClass('portrait-img');
        }
    });
});

