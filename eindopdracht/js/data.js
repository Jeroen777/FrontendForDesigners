const header = document.querySelector('header');
const section = document.querySelector('section');
let requestURL = 'https://raw.githubusercontent.com/Jeroen777/FrontendForDesigners/master/eindopdracht/cars.json';
let request = new XMLHttpRequest();
request.open('GET', requestURL); //haalt de URL op 
request.responseType = 'json'; //aangeven wat voor de type de URL is
request.send(); //verzenden van het verzoek
request.onload = function () { //function word gestart als de pagina laad
    const test = request.response;
    carList(test);
}

function carList(jsonObj) {

    const info = jsonObj; //aangeven dat info == jsonObj

    for (let i = 0; i < info.length; i++) { //loop door alle onderdelen van de jsonObj

        //elementen aanmaken 
        const imgBlok = document.createElement('class');

        const myArticle = document.createElement('article');
        const myH1 = document.createElement('h1');
        const myHP = document.createElement('p');
        const myPrice = document.createElement('p');

        myHP.className = "foo";
        myPrice.className = "foo";

        const myImage = document.createElement('img');
        const sliderImage = document.createElement('img');
        
        //info aan elementen toewijzen 
        myH1.textContent = info[i].name;
        myHP.textContent = info[i].avg_horsepower;
        myPrice.textContent = info[i].avg_price;

        myImage.src = info[i].img_url;
        sliderImage.src = info[i].img_url;

        //toevoegen van de elementen + info aan de pagina
        myArticle.appendChild(myH1);
        myArticle.appendChild(myHP);
        myArticle.appendChild(myPrice);

        myArticle.appendChild(myImage);
        imgBlok.appendChild(sliderImage);

        section.appendChild(myArticle);
        slider.appendChild(imgBlok);
    }


}

//variableen 
const slider = document.querySelector('.slider');
const leftArrow = document.querySelector('.left');
const rightArrow = document.querySelector('.right');
const carInfo = document.querySelector('.foo');


//Als je op de rechter knop drukt dan gaat de slider naar rechts
//Je maakt het index getal +1 zo krijg je iedere keer 1 * -25% waardoor het carousel verschuift
// Dus het stapje gaat iedere keer -25% druk je weer gaat die vanaf dat punt weer -25%
// Ook moet de slider niet oneindig verder kunnen gaan vandaar een if statement
var indexGetal = 0;

function rightKlik() {
    indexGetal = (indexGetal < 11) ? indexGetal + 1 : 11;
    slider.style.transform = 'translate(' + (indexGetal) * -25 + '%)';
};

function leftKlik() {
    indexGetal = (indexGetal > 0) ? indexGetal - 1 : 0;
    slider.style.transform = 'translate(' + (indexGetal) * -25 + '%)';
};

//functie info weghalen
function priceGone(){
    carInfo.classList.toggle("visible");
  };


//zonder timeout
// rightArrow.addEventListener('click', rightKlik);
// leftArrow.addEventListener('click', leftKlik);

//event listener met timeout, zodra je op de button klikt word deze functie uitgevoerd met een korte delay
leftArrow.addEventListener("click", function(){setTimeout(leftKlik, 500)});

rightArrow.addEventListener("click", function(){setTimeout(rightKlik, 500)});

carInfo.addEventListener("click", priceGone);

// code om te checken welke button op je toetsenbord je gebruikt
// je krijgt hiermee ook een getal van de knop op je toetsenbord die je ingedrukt hebt
// dit getal heb je later nodig voor een 2e event
window.addEventListener('keydown', (event) => {
    console.log(event);
})