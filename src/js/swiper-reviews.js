

// ============================== SWIPER__customers ==========================
let swiper = new Swiper(".swiper", {
   loop: true,
   spaceBetween: 24,
  grabCursor: true,
  speed: 3000,
  

        autoplay: {
          delay: 4800,
          disableOnInteraction: false,
  },
        
        pagination: {
          el: ".swiper-pagination",
          dynamicBullets: true,
          clickable: true,
        },
});
      