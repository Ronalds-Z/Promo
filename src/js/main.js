import "/src/scss/main.scss";

import Swiper from 'swiper';
import { Navigation} from 'swiper/modules';
import 'swiper/css';

const swiper = new Swiper('.swiper', {
    modules: [Navigation],
    loop: true,
    slidesPerView: 3,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});