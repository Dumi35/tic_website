const swiper = new Swiper('.swiper-container', {
    loop: true,
    autoplay: {
      delay: 3000, // Auto slide every 3 seconds
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    grabCursor: true,
    slidesPerView: 1, // Shows one slide at a time
  });