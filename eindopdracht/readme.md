# Opdracht 3 - Een interactie uitwerken met externe data

Voor deze opdracht ga ik een functionaliteit ontwerpen met externe data. De data is JSON die met een REST API van een externe bron wordt ingeladen met Javascript. Als de data geladen is moeten gebruikers je ontwerp op verschillende manieren kunnen bedienen. Verschillende states zijn vormgeven en worden op het juiste moment getoond.

Ik gebruik het volgende JSON file.
https://raw.githubusercontent.com/Jeroen777/FrontendForDesigners/master/eindopdracht/cars.json
Ik heb dit JSON bestand hergebruikt omdat de URL van de images niet helemaal meer klopte. Ik heb de de JSON vile gekopieërd en de url van deze images aangepast.

Uiteindelijk ziet mijn geladen JSON met javascript, css en html er zo uit.
## https://jeroen777.github.io/FrontendForDesigners/eindopdracht/
<img width="1680" alt="Screenshot 2020-06-18 at 09 44 02" src="https://user-images.githubusercontent.com/60734114/84992986-ea9ada00-b148-11ea-97b9-1cefc4654cd9.png">

### Idee
Op mijn pagina kan je gebruik maken van een image slider. Hier zie je alle auto's van deze pagina staan. Daarnaast zie je een overzicht van alle auto's met een kleine omschrijving. Omdat deze auto's erg duur zijn heb ik een knop toegevoegd waarmee je de prijs kan verstoppen, zo schrik je hier niet erg van :).

### Begrippen

##### Keep users in control:
Ik heb voor de buttons pijltjes gebruikt. De user kan zelf bepalen om de slider te bewegen. De pijltjes zijn herkenbare icoontjes weet dat er iets mee gedaan kan worden. Zodra je op de button drukt verandert de afbeelding in het carousel, hierdoor weet je dat de button succesvol was.

##### Visual hierarchy:
De knop wat verder onderin het scherm is groter en anders van vorm dan de rest van de pagina. Om deze redenen valt de knop op in vergelijking met zijn omgeving. Ook staat er wat ruimte omheen waardoor je echt naar de button toegetrokken wordt.

##### Provide a natural next step



##### Appearance follows behavior
Buttons doen wat buttons moeten doen. Je verwacht dat je op een button kan drukken. En je kan zeker op de buttons drukken, zodra je op de buttons drukt verwacht je dat er gaat gebeuren wat er staat of wat er aangegeven is. Als de button dan wat anders doet dan je verwacht is het geen goeie button.

### Javascript toegepast:
In dit document zijn redelijk wat javascript dingen toegepast.

#### JSON bestand laden
De opdracht was om een JSON bestand op te halen en deze te weergeven op je eigen pagina. In javascript link je je bestand met het JSON file. Door request.onload te gebruiken word de data geladen. Je moet wel zelf aangeven welke dingen je van het JSON file wilt hebben dit gaat als volgt:

1. For loop om door alle items in het JSON file te loopen.
```
for (let i = 0; i < info.length; i++) 
```
2. Elementen aanmaken
```
const imgBlok = document.createElement('class');
```
3. Informatie toewijzen aan de elementen
```
myH1.textContent = info[i].name;
```
4. En appenden 
```
 imgBlok.appendChild(sliderImage);
```

### Andere javascript dingen

1. variabalen aanmaken
```
 const slider = document.querySelector('.slider');
```
2. functions maken
```
function priceGone() {
    carInfo.classList.toggle("invis");
};
```
3. Event listners toevoegen
```
 document.addEventListener("keydown", function (event) {
    if (event.keyCode == 65) {
        carInfo.classList.toggle("invis");;
    }
});
```

# Clone
```
Om mijn files te gebruiken kun je de repo clonen: 

1. Open een terminal

2. Clone mijn repository 
```
git clone https://github.com/Jeroen777/FrontendForDesigners
```
