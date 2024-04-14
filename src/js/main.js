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

const viewportWidth = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);

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
const main = document.querySelector('.main')
const searchMenu = document.querySelector('.search-bar')
const searchMenuButton = document.querySelector('.search-menu-button')
if (searchMenuButton) {
    searchMenuButton.addEventListener('click', () => {
        searchMenu.classList.toggle('open-search-menu')
        main.classList.toggle('top-shift')
    })
}



const menuButtons = document.querySelectorAll('.nav-button');
const menuTexts = document.querySelectorAll('.nav-list-item');
const menuTextList = document.querySelector('.nav-list-item li')

window.addEventListener("resize", () => {
    if (viewportWidth > 1200) {
        navMenu.classList.remove('open-nav-menu');
        header.classList.remove('blur-background');
        menuTexts.forEach((menuText) => {
            menuText.classList.remove('open-list')
        })
    }
})

if (menuTexts) {
    menuButtons.forEach((button, index) => {
        if (menuTexts[index].querySelectorAll('li').length) {
            button.style.display = 'flex';
            button.addEventListener('click', () => {
                if (viewportWidth <= 1200) {
                    menuTexts[index].classList.toggle('open-list');
                    menuButtons[index].classList.toggle('nav-button-rotated')
                }
            });
        }
    });
}
