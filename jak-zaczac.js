


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

