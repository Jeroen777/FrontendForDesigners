const slider = document.querySelector('.slider');

const leftArrow = document.querySelector('.left');
const rightArrow = document.querySelector('.right');

var indexGetal = 0;


//Als je op de rechter knop drukt dan gaat de slider naar rechts
//Je maakt het index getal +1 zo krijg je iedere keer 1 * -25% waardoor het carousel verschuift
// Dus het stapje gaat iedere keer -25% druk je weer gaat die vanaf dat punt weer -25%

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
