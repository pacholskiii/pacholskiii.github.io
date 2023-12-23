let plec = document.querySelector("#plec");
let wiek = document.querySelector("#wiek");
let wzrost = document.querySelector("#wzrost");
let masa = document.querySelector("#masa");
let aktywnosc = document.querySelector("#aktywnosc");
let cel = document.querySelector("#cel");

let wyniki = document.querySelector(".wyniki")
let oblicz = document.querySelector("#oblicz");

let calories;
let protein;
let fat;
let carbo;

let ppmM;
let ppmK;


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
          calculateCalories();
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
   if(wyniki){
    wyniki.style.display = "block";
   }
}

const PPM_M = () =>{

    ppmM = 66.5 + (13.7 * masa.value) + (5 * wzrost.value) - (6.8 * wiek.value);
    console.log(ppmM);
    return ppmM;
}
const PPM_K = () =>{
    ppmK = 655 + (9.6 * masa.value) + (1.85 * wzrost.value) - (4.7 * wiek.value);

    return ppmK;
}

function calculateCalories(){

    let optionsPhysical = document.querySelector("#aktywnosc");
    let selectedIndex = optionsPhysical.selectedIndex + 1;
    let physicalFactor = optionsPhysical[selectedIndex - 1].value;
    let baseCalories

    let goalValue = document.querySelector("#cel");
    let selectedGoalIndex = goalValue.selectedIndex;
    console.log(selectedGoalIndex);
   
    let goalText = goalValue[selectedGoalIndex].text;
    console.log(goalText);

    if(plec.value == "Mężczyzna"){
        baseCalories = PPM_M() * physicalFactor;
    }
    else{
        baseCalories = PPM_K() * physicalFactor;
    }

   
   


    let section = document.querySelector("#wyniki-macro");
    let results = document.createElement('div');
    results.classList.add("wyniki");
    results.innerHTML =  `
<h2>Twoje zapotrzebowanie kaloryczne</h2>
  <div class="inner-box">
      <div class="calories">
          <img src="human-body.png" alt="human-body">
          <div>
              <p>Zapotrzebowanie na:</p>
              <strong>${goalText}</strong>
              <span>${baseCalories.toFixed(0)}</span>
              <span class="added">${selectedGoalIndex == 2 ? "+ 300" : (selectedGoalIndex == 0 ? '- 300' : "")}</span>
          </div>
      </div >
          <div class="values">
              <div>
                  <img src="whey-protein.png" alt="">
                  <span>Białko</span>
                  <strong>112- 140</strong>g
              </div>
             
              <div>
                  <img src="fat.png" alt="">
                  <span>Tłuszcz</span>
                  <strong>100 - 110</strong>g
              </div>

              <div>
                  <img src="bread.png" alt="">
                  <span>Węglowodany</span>
                  <strong>420 - 550</strong>
              </div>
              `
            section.appendChild(results); 
             
          
}

function calculateMacros(){
   
}
