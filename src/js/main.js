import "/src/scss/main.scss";

import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

const swiperGallery = new Swiper('.gallery .swiper', {
    modules: [Navigation],
    loop: true,
    centeredSlides: true,
    slidesPerView: 1.5,
    breakpoints: {
        992: {
            slidesPerView: 3,
        },
    },
    navigation: {
        nextEl: '.gallery .swiper-button-next',
        prevEl: '.gallery .swiper-button-prev',
    },
});
const swiperDishes = new Swiper('.dishes .swiper', {
    modules: [Navigation],
    loop: true,
    spaceBetween: 30,
    slidesPerView: 1.5,
    centeredSlides: true,
    breakpoints: {
        768: {
            slidesPerView: 3,
        },
        1100: {
            slidesPerView: 6,
            centeredSlides: false,
        }
    },

    navigation: {
        nextEl: '.dishes .swiper-button-next',
        prevEl: '.dishes .swiper-button-prev',
    },
});
const burgerButton = document.querySelectorAll('.burger-button')
const header = document.querySelector('.header')
const navMenu = document.querySelector('.header-bottom')
if (burgerButton) {
    burgerButton.forEach((burgerButton) => {
        burgerButton.addEventListener('click', () => {
            navMenu.classList.toggle('open-nav-menu')
            header.classList.toggle('blur-background');
        });
    });

}
window.addEventListener("resize", () => {
    if (window.innerWidth > 1200) {
        navMenu.classList.remove('open-nav-menu');
        header.classList.remove('blur-background');
        menuTexts.classList.remove('open-list')
    }
})

const menuButtons = document.querySelectorAll('.nav-button');
const menuTexts = document.querySelectorAll('.nav-list-item');
if (menuButtons.length && menuTexts.length) {
    menuButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            const viewportWidth = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
            if (viewportWidth <= 1200) {
                menuTexts[index].classList.toggle('open-list');
                if (menuTexts[index].classList.contains('open-list')) {
                    menuTexts[index].style.maxHeight = menuTexts[index].scrollHeight + 'px';
                } else {
                    menuTexts[index].style.maxHeight = 0;
                }
            }
        });
    });
};
