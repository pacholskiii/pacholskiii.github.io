let waga = document.querySelector("#waga");
let wzrost = document.querySelector("#wzrost")
let oblicz = document.querySelector(".oblicz");
let wyniki = document.querySelector(".wyniki");
let bmiSpan = document.querySelector(".bmi");
let normyBmi = document.querySelector(".normy-bmi");
let normyBtn = document.querySelector(".normy-bmi-przycisk");
let calc = document.querySelector(".kalkulator");
let bmiContainer = document.querySelector(".kontener-bmi");

let weightValue;
let heightValue;
let bmi;

oblicz.addEventListener("click", () =>{
    weightValue = parseFloat(waga.value);
    heightValue = parseFloat(wzrost.value) / 100;
    bmi = weightValue / (Math.pow(heightValue, 2));
    console.log(bmi);
    
    
    if(isNaN(weightValue)  || isNaN(heightValue)){
        wyniki.style.display = "block";
        bmiSpan.innerHTML = "Podaj poprawne wartości"
    }
    else{
        wyniki.style.display = "block";
        bmiSpan.innerHTML = bmi.toFixed(2);
       

    }
    
});

normyBtn.addEventListener("click", () => {
    normyBmi.style.display = "block";
    normyBmi.classList.add("animation-normy");
    calc.classList.add("animation-calc");
    let normsContainer = document.getElementById("norms");
    if(normsContainer){
        normsContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest'});
      
    }
    
});




// Animations

let bmiInfoInerval = setInterval(function(){
   
}, 1000/60)

window.addEventListener("scroll", () =>{
    console.log(bmiContainer.getBoundingClientRect().top);
    if(bmiContainer.getBoundingClientRect().top <= 783){
        bmiContainer.style.visibility = "visible";
        bmiContainer.classList.add("animation-bmi");
        clearInterval(bmiInfoInerval);

        
    }
   
}); 

// nav

let btn = document.querySelector(".hamburger");
let links = document.querySelector(".nav-links");
let header = document.querySelector(".header");

btn.addEventListener('click', () => {
    links.classList.toggle("active");
    header.classList.toggle("active2");
}); 

