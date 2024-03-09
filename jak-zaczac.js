


// Poczatki treningu

let btnArrow = document.querySelectorAll(".btn-arrow");
let modals = document.querySelectorAll(".modal-container");
let items = document.querySelectorAll(".item");
let value;
let btnClose = document.querySelectorAll(".btn-close");



btnArrow.forEach((btn, index) => {
    btn.addEventListener("click", () =>{
        modals[index].classList.add("active")
      
    });
});

btnClose.forEach(btn => {
    btn.addEventListener("click", () =>{
        
        modals.forEach((modal) =>{
            modal.classList.remove("active");
        })
    })
    
});

// --------swiper--------

var swiper = new Swiper(".mySwiper", {
    effect: "cards",
    grabCursor: true,
  });

  // nav

  let btn = document.querySelector(".hamburger");
let links = document.querySelector(".nav-links");
let header = document.querySelector(".header");

btn.addEventListener('click', () => {
    links.classList.toggle("active");
    header.classList.toggle("active2");
   
}); 


