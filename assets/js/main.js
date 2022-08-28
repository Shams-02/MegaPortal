var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: "true",
    autoplay: true,
    autoplayTimeout: 3000,
    spaceBetween:20,
    coverflowEffect: {
        rotate: -25,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
    },
    pagination: {
        el: ".swiper-pagination",
    },
});


// Second Swiper




var swiper = new Swiper(".mySwiper_2", {
    effect: "flip",
    loop: "true",
    autoplay: true,
    autoplayTimeout: 3000,
    grabCursor: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    }
});



// owl swiper

$('.owl-carousel').owlCarousel({
    loop: true,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    margin: 20,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 2
        },
        1024: {
            items: 3
        },
        1200: {
            items: 4
        }
    }
})