// 禁用右键菜单
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

// 定义返回主页函数
function backToHome() {
    sessionStorage.removeItem('fromIndex'); // 清除标志
    window.location.href = '../content.html';
}

// 页面加载时检查导航类型
document.addEventListener("DOMContentLoaded", function() {
    if (performance.navigation.type === 1) {
        // 如果是刷新操作，跳转回index.html
        window.location.href = '../index.html';
    }   
});

// 实现平滑滚动
const images = document.querySelectorAll('.image');
let lastScrollTop = 0;
let isPageLoaded = false;

document.addEventListener("DOMContentLoaded", function() {
    isPageLoaded = true;
    adjustFontColor(); // 页面加载时执行一次颜色调整
});

function onScroll() {
    const scrollTop = window.pageYOffset;

    // 处理图片平滑滚动效果
    images.forEach(image => {
        const speed = parseFloat(image.getAttribute('data-speed'));
        const translateY = scrollTop * speed;
        image.style.transform = `translate3d(0, ${translateY}px, 0)`;
    });

    // 调整字体颜色
    adjustFontColor();

    lastScrollTop = scrollTop;
}

function optimizedScroll() {
    if (isPageLoaded && lastScrollTop !== window.pageYOffset) {
        requestAnimationFrame(onScroll);
    }
}
window.addEventListener('scroll', optimizedScroll);

// 背景颜色和字体颜色调整逻辑
function adjustFontColor() {
    const scrollY = window.scrollY;
    const sidebar = document.querySelector('.sidebar');
    const word3 = document.getElementById('word3');
    const word4 = document.getElementById('word4');

    if (scrollY > 4200) { // 滚动位置阈值
        document.body.style.backgroundColor = 'white';
        sidebar.classList.add('white-bg');
        // 调整字体颜色
        word3.style.color = 'black';
        word4.style.color = 'black';
    } else {
        document.body.style.backgroundColor = ''; // 恢复默认背景颜色
        sidebar.classList.remove('white-bg');
        // 调整字体颜色
        word3.style.color = 'white';
        word4.style.color = 'white';
    }
}