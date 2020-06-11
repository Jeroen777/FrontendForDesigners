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
        const myArticle = document.createElement('article');
        const myH1 = document.createElement('h1');
        const myHP = document.createElement('p');
        const myPrice = document.createElement('p');

        const myImage = document.createElement('img');
        
        //info aan elementen toewijzen 
        myH1.textContent = info[i].name;
        myHP.textContent = info[i].avg_horsepower;
        myPrice.textContent = info[i].avg_price;

        myImage.src = info[i].img_url;

        //actors element maken --> info toewijzen --> loop door alle actors heen


        //toevoegen van de elementen + info
        myArticle.appendChild(myH1);
        myArticle.appendChild(myHP);
        myArticle.appendChild(myPrice);

        myArticle.appendChild(myImage);

        section.appendChild(myArticle);
    }


}


const slider = document.querySelector('.slider');

const leftArrow = document.querySelector('.left');
const rightArrow = document.querySelector('.right');

var indexGetal = 0;


//Als je op de rechter knop drukt dan gaat de slider naar rechts
//Je maakt het index getal +1 zo krijg je iedere keer 1 * -25% waardoor het carousel verschuift
// Dus het stapje gaat iedere keer -25% druk je weer gaat die vanaf dat punt weer -25%
// Ook moet de slider niet oneindig verder kunnen gaan vandaar een if statement

function rightKlik() {
    indexGetal = (indexGetal < 3) ? indexGetal + 1 : 3;
    slider.style.transform = 'translate(' + (indexGetal) * -25 + '%)';
}

function leftKlik() {
    indexGetal = (indexGetal > 0) ? indexGetal - 1 : 0;
    slider.style.transform = 'translate(' + (indexGetal) * -25 + '%)';
}


rightArrow.addEventListener('click', rightKlik);
leftArrow.addEventListener('click', leftKlik);