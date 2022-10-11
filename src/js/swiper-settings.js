

// ============================== SWIPER__customers ==========================
let swiper = new Swiper(".swiper", {
   loop: true,
   spaceBetween: 24,
   grabCursor: true,
 
        autoplay: {
          delay: 2300,
          disableOnInteraction: false,
  },
        
        pagination: {
          el: ".swiper-pagination",
          dynamicBullets: true,
          clickable: true,
        },
});
      