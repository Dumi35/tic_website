const swiper = new Swiper('.swiper-container', {
    loop: true,
    autoplay: {
      delay: 5000, // Auto slide every 3 seconds
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    grabCursor: true,
    slidesPerView: 1, // Shows one slide at a time
  });