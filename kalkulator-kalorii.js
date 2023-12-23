let plec = document.querySelector("#plec");
let wiek = document.querySelector("#wiek");
let wzrost = document.querySelector("#wzrost");
let masa = document.querySelector("#masa");
let aktywnosc = document.querySelector("#aktywnosc");
let cel = document.querySelector("#cel");

let wyniki = document.querySelector(".wyniki")
let oblicz = document.querySelector("#oblicz");

let results = 

oblicz.addEventListener("click", () => {
   
    if(isNaN(parseFloat(wiek.value)) || isNaN(parseFloat(wzrost.value)) || isNaN(parseFloat(masa.value))){
        oblicz.innerHTML = "Podaj poprawne wartości!";
        oblicz.style.fontSize = "18px";
        
        setTimeout(() => {
            oblicz.innerHTML = "Oblicz";
        }, 3000);
       
       
    }
    else{
          getValues();
          writeAnswers();
    }
   

});

function getValues(){
    let plecValue = plec.value;
    let wiekValue = wiek.value;
    let wzrostValue = wzrost.value;
    let masaValue = masa.value;
    let aktywnoscValue = aktywnosc.value;
    let celValue = cel.value;
}

function writeAnswers(){
    wyniki.style.display = "block";


}