# Opdracht 3 - Een interactie uitwerken met externe data


<img width="1674" alt="Screenshot 2020-06-04 at 15 11 25" src="https://user-images.githubusercontent.com/60734114/83761255-59226700-a676-11ea-8029-1e1963e476fb.png">

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
