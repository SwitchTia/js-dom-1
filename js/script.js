//console.log("hello");

// Consegna

// Inseriamo in pagina l’immagine della lampadina spenta che trovate in allegato 
// e accanto un bottone con la scritta “Accendi”.

// Al click del bottone, la lampadina dovrà accendersi 
// (dovremo quindi utilizzare l’immagine della lampadina accesa, sempre in allegato)

// BONUS

// Facciamo accendi e spegni:

// Al primo click la lampadina si accende e nel bottone compare la scritta "Spegni"
// Al secondo click la lampadina si spegne e nel bottone compare la scritta "Accendi"
// E così via...
// Rendete il tutto un po più bello e creativo

const titleElem = document.querySelector("h1");
const btnElem = document.querySelector("btn");

const img1Elem = document.querySelector(".imgOff");
const img2Elem = document.querySelector(".imgOn");

let isOn = false;

btnElem.addEventListener("click", function (){

    if(isOn === true){
        img1Elem.style.display = "none";
        img2Elem.style.display = "block";
    }
    else{
        img1Elem.style.display = "block";
        img2Elem.style.display = "none";
    }
    isOn = !isOn;
})