var swiper = new Swiper('.swiper1', {
    // Optional parameters
    loop: true,
    cssMode: true,
    slidesPerView: 4,
    spaceBetween: 10,
    clickable: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    mousewheel: true,
    keyboard: true,

    // If we need pagination
    pagination: {
    el: '.swiper-pagination',
    },
    breakpoints: {
        "@0.00": {
        slidesPerView: 1,
        spaceBetween: 10,
        },
        "@0.75": {
        slidesPerView: 2,
        spaceBetween: 20,
        },
        "@1.00": {
        slidesPerView: 3,
        spaceBetween: 40,
        },
        "@1.50": {
        slidesPerView: 4,
        spaceBetween: 50,
        },
    },
    // Navigation arrows
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },
});

const swiper3 = new Swiper(".swiper2", {
    loop: true,
    spaceBetween: 30,
    pagination: {
    el: ".swiper2 .swiper-pagination",
    clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        },
});


var swiper = new Swiper('.swiper3', {
    // Optional parameters
    loop: true,
    cssMode: true,
    slidesPerView: 4,
    spaceBetween: 10,
    clickable: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    mousewheel: true,
    keyboard: true,

    // If we need pagination
    pagination: {
    el: '.swiper-pagination',
    },
    breakpoints: {
        "@0.00": {
        slidesPerView: 1,
        spaceBetween: 10,
        },
        "@0.75": {
        slidesPerView: 2,
        spaceBetween: 20,
        },
        "@1.00": {
        slidesPerView: 3,
        spaceBetween: 40,
        },
        "@1.50": {
        slidesPerView: 4,
        spaceBetween: 50,
        },
    },
    // Navigation arrows
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },
});
