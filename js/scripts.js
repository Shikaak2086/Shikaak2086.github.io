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

const images = document.querySelectorAll('.image');
        let lastScrollTop = 0;

        function onScroll() {
            const scrollTop = window.pageYOffset;
            
            images.forEach(image => {
                const speed = parseFloat(image.getAttribute('data-speed'));
                const translateY = scrollTop * speed;
                image.style.transform = `translate3d(0, ${translateY}px, 0)`;
            });
            
            lastScrollTop = scrollTop;
        }

        let isPageLoaded = false;

document.addEventListener("DOMContentLoaded", function() {
    isPageLoaded = true;
});

function optimizedScroll() {
    if (isPageLoaded && lastScrollTop !== window.pageYOffset) {
        requestAnimationFrame(onScroll);
    }
}

        window.addEventListener('scroll', optimizedScroll);


    // 背景颜色改为白色
    window.addEventListener('scroll', function() {
        var scrollY = window.scrollY;
        var sidebar = document.querySelector('.sidebar');
        var concepts = document.querySelector('.concepts');
    
        if (scrollY > 3500) { // 滚动位置阈值
            document.body.style.backgroundColor = 'white';
            sidebar.classList.add('white-bg');
            concepts.classList.add('white-bg');
        } else {
            document.body.style.backgroundColor = ''; // 恢复默认背景颜色
            sidebar.classList.remove('white-bg');
            concepts.classList.remove('white-bg');
        }
    }

);

// 由于CSS媒体查询不能直接在JavaScript中使用，我们需要通过JavaScript来检测屏幕宽度，并相应地添加事件监听器。
document.addEventListener('DOMContentLoaded', function() {
    function adjustBackgroundOnScroll() {
        var scrollY = window.scrollY;
        var sidebar = document.querySelector('.sidebar');
        var concepts = document.querySelector('.concepts');

        if (scrollY > 2800) { // 调整滚动位置阈值
            document.body.style.backgroundColor = 'white';
            sidebar.classList.add('white-bg');
            concepts.classList.add('white-bg');
        } else {
            document.body.style.backgroundColor = ''; 
            sidebar.classList.remove('white-bg');
            concepts.classList.remove('white-bg');
        }
    }

    if (window.innerWidth <= 600) {
        window.addEventListener('scroll', adjustBackgroundOnScroll);
    }
});

    
