var swiper = new Swiper(".slidermain1", {
  slidesPerView: 1,
  spaceBetween: 10,
  centerSlide:'true',
  pagination: {
    el: ".swiper-pagination1",
    clickable: true,
  },navigation: {
      nextEl: ".swiper-button-next1",
      prevEl: ".swiper-button-prev1",
    },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});


var swiper = new Swiper(".slidermain2", {
  slidesPerView: 1,
  spaceBetween: 10,
  centerSlide:'true',
  pagination: {
    el: ".swiper-pagination2",
    clickable: true,
  },navigation: {
      nextEl: ".swiper-button-next2",
      prevEl: ".swiper-button-prev2",
    },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});


var swiper = new Swiper(".slidermain3", {
  slidesPerView: 1,
  spaceBetween: 10,
  centerSlide:'true',
  pagination: {
    el: ".swiper-pagination3",
    clickable: true,
  },navigation: {
      nextEl: ".swiper-button-next3",
      prevEl: ".swiper-button-prev3",
    },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});

var swiper = new Swiper(".slidermain4", {
  slidesPerView: 1,
  spaceBetween: 10,
  centerSlide:'true',
  pagination: {
    el: ".swiper-pagination4",
    clickable: true,
  },navigation: {
      nextEl: ".swiper-button-next4",
      prevEl: ".swiper-button-prev4",
    },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
  },
});

var swiper = new Swiper(".slidermain5", {
  slidesPerView: 1,
  spaceBetween: 10,
  centerSlide:'true',
  pagination: {
    el: ".swiper-pagination5",
    clickable: true,
  },navigation: {
      nextEl: ".swiper-button-next5",
      prevEl: ".swiper-button-prev5",
    },
  breakpoints: {
    400: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    550: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    640: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 7,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 9,
      spaceBetween: 40,
    },
  },
});


var swiper = new Swiper(".mainbannerswip", {
  spaceBetween: 0,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination-banner",
    clickable: true,
  },
  // // navigation: {
  //   nextEl: ".swiper-button-next-banner",
  //   prevEl: ".swiper-button-prev-banner",
  // },
});
// Hambergar
const hamb = document.querySelector(".hamburger");
const navMenu = document.querySelector(".menubar");
const header = document.querySelector(".header");
const headbtn = document.getElementById('head-btn');
const logobar = document.querySelector(".logo-bar");

headbtn.addEventListener("click", () => {
    headbtn.classList.toggle("active");
    header.classList.toggle("active");
})


hamb.addEventListener("click", () => {
    hamb.classList.toggle("active");
    navMenu.classList.toggle("active");
    headbtn.classList.toggle("deactive");
    logobar.classList.toggle("active");
})
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamb.classList.remove("active");
    navMenu.classList.remove("active");
    headbtn.classList.remove("deactive");
    logobar.classList.remove("active");
}));


