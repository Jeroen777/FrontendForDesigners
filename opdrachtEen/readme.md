# Opdracht 1 microinteractie
Ik heb de volgende case gekozen:
* In een verzameling films wil ik een aantal leuke films kunnen bewaren om ze later te bekijken.


Ik heb de volgende micro interactie gemaakt. Zodra je op de like button onder de film drukt verandert het hartje.
Ik heb hiervoor gebruik gemaakt van queryselectors, functions, classlist, toggle en add event listeners.
Ook heb ik toegevoegd als je op het hartje drukt dat er een 1tje boven in het scherm komt te staan zodat je ziet dat 
er een nieuwe melding is. Je hebt een favoriet toegevoegd.

<img width="1422" alt="Screenshot 2020-05-14 at 13 35 56" src="https://user-images.githubusercontent.com/60734114/81931057-c7c95300-95e9-11ea-9a6d-45d55b977d02.png">

### Begrippen

##### Keep users in control:
Ik heb voor de button een hartje gebruikt. Dit heb ik gedaan om dat dit een herkenbaar icoontje is om iets leuk te vinden. Zodra je op mijn like knop drukt verandert het knopje naar een groter rood hartje. Hierdoor weet je dat deze geselecteerd is. Ook krijg je een melding boven in het scherm te staan zodat je een soort confirm krijgt dat dit gelukt is.

##### Visual hierarchy:
De knop is anders dan de rest van de omgeving van vorm. Hij staat ook los van de rest waardoor iets meer opvalt.


### Javascript toegepast:

queryselector om de button te linken met btn
```
let btn = document.querySelector('#test');
let movieToggle = document.querySelector("#likeAantal");
```

function om een class toe te voegen met de toggle en daarna weer weg te halen
```
function toggleLike(){
  movieToggle.classList.toggle("visible");
  btn.classList.toggle('haveLiked');
}
```

event listener om heartje klikbaar te maken
```
btn.addEventListener("click", toggleLike)
```
Om mijn files te gebruiken kun je de repo clonen: 

1. Open een terminal

2. Clone mijn repository 
```
git clone https://github.com/Jeroen777/jeroenFrontend 
```
