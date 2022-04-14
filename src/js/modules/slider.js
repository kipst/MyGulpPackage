
import {Swiper, Navigation, Pagination, Autoplay} from "swiper";


export const swiper = new Swiper('.swiper',{
    modules: [Navigation, Pagination, Autoplay],
    direction: 'horizontal',
    rewind: true,
    pagination: {
        el: '.swiper-pagination',
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    }
})

export const feedback = new Swiper('.feedback-swiper',{
    modules: [Navigation],
    rewind: true,
    direction: 'horizontal',
    navigation: {
        nextEl: '.feedback-button-next',
        prevEl: '.feedback-button-prev'
    }
})
