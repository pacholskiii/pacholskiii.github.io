let plec = document.querySelector("#plec");
let wiek = document.querySelector("#wiek");
let wzrost = document.querySelector("#wzrost");
let masa = document.querySelector("#masa");
let aktywnosc = document.querySelector("#aktywnosc");
let cel = document.querySelector("#cel");

let oblicz = document.querySelector("#oblicz");

oblicz.addEventListener("click", () => {
   
    if(isNaN(wiek.value) || isNaN(wzrost.value) || isNaN(masa.value)){
        oblicz.innerHTML = "Podaj poprawne wartości";
        oblicz.style.fontSize = "18px";
    }
    else{
        let plecValue = plec.value;
        let wiekValue = wiek.value;
        let wzrostValue = wzrost.value;
        let masaValue = masa.value;
        let aktywnoscValue = aktywnosc.value;
        let celValue = cel.value;

        console.log(celValue);

    }
   

});