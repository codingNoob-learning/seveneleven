// promotion Swiper
new Swiper('.promotion .swiper', {
    slidesPerView: 3,
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    speed: 1500,
    autoplay: {
        delay: 3000
    },
    pagination: {
        el: '.promotion .swiper-pagination',
        clickable: true
    },
    navigation: {
        prevEl: '.promotion .swiper-prev',
        nextEl: '.promotion .swiper-next'
    }
})

// newproduct Swiper
new Swiper('.newproduct .swiper', {
    slidesPerView: 5,
    spaceBetween: 10,
    centeredSlides: true,
    loop: true,
    speed: 200,
    navigation: {
        prevEl: '.newproduct .swiper-prev',
        nextEl: '.newproduct .swiper-next'
    }
})


// oneplus Swiper
new Swiper('.plusone .plusone_left .swiper', {
    slidesPerView: 3,
    spaceBetween: 10,
    centeredSlides: true,
    loop: true,
    speed: 200,
    navigation: {
        prevEl: '.plusone .plusone_left .swiper-prev',
        nextEl: '.plusone .plusone_left .swiper-next'
    }
})

// twoplus Swiper
new Swiper('.plusone .plusone_right .swiper', {
    slidesPerView: 3,
    spaceBetween: 10,
    centeredSlides: true,
    loop: true,
    speed: 200,
    navigation: {
        prevEl: '.plusone .plusone_right .swiper-prev',
        nextEl: '.plusone .plusone_right .swiper-next'
    }
})

// event Swiper
new Swiper('.event .event_left .swiper', {
    slidesPerView: 3,
    spaceBetween: 10,
    centeredSlides: true,
    loop: true,
    speed: 200,
    navigation: {
        prevEl: '.event .event_left .swiper-prev',
        nextEl: '.event .event_left .swiper-next'
    }
})

// sale Swiper
new Swiper('.event .event_right .swiper', {
    slidesPerView: 3,
    spaceBetween: 10,
    centeredSlides: true,
    loop: true,
    speed: 200,
    navigation: {
        prevEl: '.event .event_right .swiper-prev',
        nextEl: '.event .event_right .swiper-next'
    }
})