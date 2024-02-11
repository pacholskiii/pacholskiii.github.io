// Swiper

var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  mousewheel: true,
  keyboard: true,
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 3,
      coverflowEffect: {
        rotate: 5,
        stretch: 0,
        depth: 400,
        modifier: 0.2,
        slideShadows: true,
      },
     
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
  });






let clickableDesc = document.querySelectorAll(".plan-desc");
let slides = document.querySelectorAll(".plans")

clickableDesc.forEach((desc, index) => {
    desc.addEventListener("click", () => {
        console.log(index);
    });
}); 