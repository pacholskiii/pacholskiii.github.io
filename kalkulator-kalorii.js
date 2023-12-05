let waga = document.querySelector("#waga");
let wzrost = document.querySelector("#wzrost")
let oblicz = document.querySelector(".oblicz");
let wyniki = document.querySelector(".wyniki");
let bmiSpan = document.querySelector(".bmi");


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

