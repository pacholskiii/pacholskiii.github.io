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

// Card click


let planItems = document.querySelectorAll(".accordion-body");
let accordionContainer = document.querySelectorAll(".accordion-table-container");

let slides = document.querySelectorAll(".plan-desc");
let container = document.querySelector(".inner-body-wave");
let accordion = document.querySelectorAll(".accordion");
let ch_d = document.querySelectorAll(".ch-d")


slides.forEach((slide, index) => {
    slide.addEventListener("click", () => {
        accordion[index].style.display = "block";
        
    })
}); 

ch_d.forEach((chevron, index) => {
  chevron.addEventListener("click", () => {

    console.log(index);
   
    if( accordionContainer[index].classList.contains("collapsed")){
      accordionContainer[index].classList.toggle("collapsed")
      chevron.classList.remove("rotate");
    }
    else{
      accordionContainer[index].classList.toggle("collapsed");
      chevron.classList.add("rotate");
    }
  });
});

