/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollDown = window.scrollY

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link')
        } else {
            sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
    //     reset: true
});
document.addEventListener("DOMContentLoaded", () => {
    const coverSection = document.querySelector(".cover");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    coverSection.classList.add("show");
                    observer.unobserve(coverSection); // Ngưng theo dõi sau khi đã hiển thị
                }
            });
        },
        {
            threshold: 0.3, // 30% phần tử xuất hiện mới trigger
        }
    );

    observer.observe(coverSection);
});
const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;
const iconSun = document.getElementById("icon-sun");
const iconMoon = document.getElementById("icon-moon");

function setTheme(isDark) {
    body.classList.toggle("dark-theme", isDark);
    iconSun.style.display = isDark ? "none" : "block";
    iconMoon.style.display = isDark ? "block" : "none";
    localStorage.setItem("theme", isDark ? "dark" : "light");
}

// Khởi tạo từ localStorage
const currentTheme = localStorage.getItem("theme");
setTheme(currentTheme === "dark");

toggleBtn.addEventListener("click", () => {
    const isDark = !body.classList.contains("dark-theme");
    setTheme(isDark);
});
const tabs = document.querySelectorAll('.work__tab');
const projectContainer = document.querySelector('.work__container');
const seriesContainer = document.querySelector('.series__container');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        if (tab.dataset.filter === 'projects') {
            projectContainer.style.display = 'grid';
            seriesContainer.style.display = 'none';
        } else {
            projectContainer.style.display = 'none';
            seriesContainer.style.display = 'grid';
        }
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.work__tab');
    const projectContainer = document.querySelector('#projects-container');
    const seriesContainer = document.querySelector('.series__container');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            const filter = tab.dataset.filter;

            if (filter === 'projects') {
                projectContainer.style.display = 'grid';
                seriesContainer.style.display = 'none';

                // reset animation
                // Bỏ đoạn này hoặc comment lại (nằm trong sự kiện click tab)
               

            } else {
                projectContainer.style.display = 'none';
                seriesContainer.style.display = 'grid';
            }
        });
    });
});
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show'); // Nếu muốn animation lại khi scroll lên
        }
    });
}, {
    threshold: 0.2 // phần tử xuất hiện 20% là bắt đầu chạy
});
const projectCards = document.querySelectorAll('.project__card');

const cardObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      cardObserver.unobserve(entry.target); // chỉ chạy 1 lần
    }
  });
}, {
  threshold: 0.2
});
// Reveal title và mô tả từ trên xuống
ScrollReveal().reveal('.section-title', {
    origin: 'top',
    distance: '40px',
    duration: 800,
    delay: 100,
    easing: 'ease-in-out',
    reset: false
  });
  
  ScrollReveal().reveal('.skills__description', {
    origin: 'top',
    distance: '40px',
    duration: 800,
    delay: 300,
    easing: 'ease-in-out',
    reset: false
  });
  
  // Reveal từng card kỹ năng từ dưới lên, lần lượt
  ScrollReveal().reveal('.skills__card', {
    origin: 'bottom',
    distance: '40px',
    duration: 600,
    easing: 'ease-in-out',
    interval: 200,
    reset: false
  });
  ScrollReveal().reveal('.section-subtitle', {
    origin: 'top',
    distance: '30px',
    duration: 1000,
    delay: 200,
    reset: false
  });
  
  
projectCards.forEach(card => cardObserver.observe(card));

// Gắn observer vào các thẻ bạn muốn animate
document.querySelectorAll('.project__card').forEach(el => observer.observe(el));


sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text', {});
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img', { delay: 400 });
sr.reveal('.home__social-icon', { interval: 200 });
sr.reveal('.skills__data, .work__img, .contact__input', { interval: 200 }); 
