var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,  // Show 4 slides per view
    spaceBetween: 20,  // Space between slides
    loop: true,        // Infinite loop mode
    autoplay: {
        delay: 3000,   // Auto-slide every 3 seconds
        disableOnInteraction: false,  // Continue autoplay after interaction
    }
   
});
