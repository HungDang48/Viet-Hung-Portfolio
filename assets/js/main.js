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
  var typed = new Typed('#typing', {
    strings: [
      "Hi, I'm <span class='home__title-color'>Hung</span>", 
      "Frontend Developer"
    ],
    typeSpeed: 60,         // Tốc độ gõ chữ
    backSpeed: 40,        // Tốc độ xóa chữ
    backDelay: 1500,      // Thời gian giữ chữ trước khi xóa
    startDelay: 500,      // Thời gian trì hoãn khi bắt đầu gõ
    loop: true,           // Lặp lại vô hạn
    showCursor: true,     // Hiện con trỏ
    cursorChar: '|',      // Ký tự của con trỏ
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
//   EDUCATION
ScrollReveal().reveal('.education-item', {
    origin: 'top',       // từ trên xuống
    distance: '50px',
    duration: 1000,      // thời gian (ms)
    easing: 'ease-in-out',
    interval: 200,       // delay giữa các item
    reset: false         // không lặp lại khi cuộn lên
  });
  ScrollReveal().reveal('.sr-contact', {
    origin: 'bottom',
    distance: '40px',
    duration: 1000,
    interval: 150,
    easing: 'ease-out',
    reset: false,
    opacity: 0
  });
  window.addEventListener('scroll', function () {
    const button = document.querySelector('.button-cv');
    const buttonPosition = button.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (buttonPosition < screenHeight - 100) {
        button.classList.add('animate-rotate');
    }
});
projectCards.forEach(card => cardObserver.observe(card));
const translations = {
    vi: {
      home: "Trang chủ",
      about: "Giới thiệu",
      skills: "Kỹ năng",
      projects: "Dự án",
      contact: "Liên hệ",
      description: "Tôi vừa tốt nghiệp chuyên ngành Công nghệ Thông tin tại Đại học Duy Tân. Tôi đam mê xây dựng các trang web và luôn tìm kiếm cách cải thiện kỹ năng cả về Front-end và Back-end. Trong ngắn hạn, mục tiêu của tôi là trở thành lập trình viên Front-end chuyên nghiệp và về lâu dài, tôi mong muốn đảm nhiệm các vị trí như trưởng nhóm kỹ thuật hoặc quản lý dự án.",
      button: "Liên hệ",
      aboutTitle: "Giới thiệu",
      aboutSubtitle: "Mình là Hưng",
      aboutText: "Chào, tôi là Hưng – một lập trình viên web với đam mê thiết kế sạch và mã hiệu quả. Tôi chuyên về phát triển Frontend với React, Next.js, và TypeScript, và có kinh nghiệm xây dựng API có thể mở rộng. Tôi luôn học hỏi và nỗ lực tạo ra những trải nghiệm web nhanh chóng, thân thiện với người dùng.",
      projectsTitle: "Dự án",
      projectsSubtitle: "Một số dự án tôi đã thực hiện gần đây",
      project1Title: "THƯƠNG MẠI ĐIỆN TỬ",
      project1Description: "Nền tảng thương mại điện tử với giao diện thân thiện...",
      project2Title: "THỜI TIẾT",
      project2Description: "Ứng dụng dự báo thời tiết đáp ứng...",
      project3Title: "LẬT THẺ GHI NHỚ",
      project3Description: "Trò chơi lật thẻ ghi nhớ với nhiều cấp độ...",
      project4Title: "MÁY TÍNH",
      project4Description: "Ứng dụng máy tính đơn giản và đẹp mắt...",
      project5Title: "DANH SÁCH CÔNG VIỆC",
      project5Description: "Ứng dụng quản lý công việc đơn giản...",
      contactTitle: "Liên hệ",
      contactLocation: "Thành phố Hồ Chí Minh, Việt Nam",
      footerTitle: "Hưng",
      footerCopy: "© Hưng. Đã đăng ký bản quyền"
    },
    en: {
      home: "Home",
      about: "About",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
      description: "I recently graduated with a degree in Information Technology from Duy Tan University. I'm passionate about building websites and always looking for ways to improve my skills in both Front-end and Back-end development. In the short term, my goal is to become a professional Front-end developer, and in the long run, I aspire to take on roles such as tech lead or project manager.",
      button: "Contact",
      aboutTitle: "About",
      aboutSubtitle: "I'm Hưng",
      aboutText: "Hi, I'm Hung — a web developer with a passion for clean design and efficient code. I specialize in frontend development using React, Next.js, and TypeScript, and have experience building scalable APIs. I'm always learning and striving to create fast, user-friendly web experiences.",
      projectsTitle: "Projects",
      projectsSubtitle: "Some of the projects I've worked on recently",
      project1Title: "CLOTHES ECOMMERCE",
      project1Description: "An e-commerce platform with a user-friendly interface and full-featured admin panel built with React, TypeScript, and Redux.",
      project2Title: "WEATHER NOW",
      project2Description: "Weather Now is a responsive weather forecasting app built with ReactJS that provides real-time weather information, with a dynamic interface that changes based on current weather conditions.",
      project3Title: "MEMORY CARD",
      project3Description: "A memory card flip game with multiple levels...",
      project4Title: "CALCULATOR",
      project4Description: "A simple and stylish calculator app...",
      project5Title: "TODO LIST",
      project5Description: "A simple and Todo list built with ReactJS...",
      contactTitle: "Contact",
      contactLocation: "Ho Chi Minh City, Vietnam",
      footerTitle: "Hung",
      footerCopy: "© Hung. All rights reserved"
    }
  };
  
  
  let currentLanguage = "en";

  const languageToggleButton = document.getElementById("language-toggle");
  
  languageToggleButton.addEventListener("click", () => {
    currentLanguage = currentLanguage === "en" ? "vi" : "en";
    languageToggleButton.textContent = currentLanguage.toUpperCase();
  
    // Update nav dynamically
    const navItems = document.querySelectorAll(".nav__list li a");
    const keys = ["home", "about", "skills", "projects", "contact"];
  
    navItems.forEach((link, index) => {
      link.textContent = translations[currentLanguage][keys[index]];
    });
  
    // Update home description
    document.querySelector(".home__description").textContent = translations[currentLanguage].description;
  
    // Update contact button
    document.querySelector(".home__data .button").textContent = translations[currentLanguage].button;
  });

// Gắn observer vào các thẻ bạn muốn animate
document.querySelectorAll('.project__card').forEach(el => observer.observe(el));


sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text', {});
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img', { delay: 400 });
sr.reveal('.home__social-icon', { interval: 200 });
sr.reveal('.skills__data, .work__img, .contact__input', { interval: 200 }); 

// Projects section
const projectsTitle = document.querySelector("#projects .section-title");
if (projectsTitle) projectsTitle.textContent = translations[currentLanguage].projectsTitle;
const projectsSubtitle = document.querySelector("#projects .section-subtitle");
if (projectsSubtitle) projectsSubtitle.textContent = translations[currentLanguage].projectsSubtitle;

// Project cards
const projectTitles = document.querySelectorAll('.project__title');
const projectDescriptions = document.querySelectorAll('.project__description');
const projectTitleKeys = [
  'project1Title', 'project2Title', 'project3Title', 'project4Title', 'project5Title'
];
const projectDescKeys = [
  'project1Description', 'project2Description', 'project3Description', 'project4Description', 'project5Description'
];
projectTitles.forEach((el, idx) => {
  if (translations[currentLanguage][projectTitleKeys[idx]]) el.textContent = translations[currentLanguage][projectTitleKeys[idx]];
});
projectDescriptions.forEach((el, idx) => {
  if (translations[currentLanguage][projectDescKeys[idx]]) el.textContent = translations[currentLanguage][projectDescKeys[idx]];
});

// Contact section
const contactTitle = document.querySelector("#contact .section-title");
if (contactTitle) contactTitle.textContent = translations[currentLanguage].contactTitle;
const contactLocation = document.querySelector('.contact__card span');
if (contactLocation) contactLocation.textContent = translations[currentLanguage].contactLocation;

// Footer
const footerTitle = document.querySelector('.footer__title');
if (footerTitle) footerTitle.textContent = translations[currentLanguage].footerTitle;
const footerCopy = document.querySelector('.footer__copy');
if (footerCopy) footerCopy.textContent = translations[currentLanguage].footerCopy;

 