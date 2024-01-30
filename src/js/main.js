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