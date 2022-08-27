var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: "true",
    autoplay: true,
    autoplayTimeout: 3000,
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




var swiper = new Swiper(".mySwiper", {
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