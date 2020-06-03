const header = document.querySelector('header');
const section = document.querySelector('section');
let requestURL = 'https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json'; 
let request = new XMLHttpRequest(); 
request.open('GET', requestURL); //haalt de URL op 
request.responseType = 'json'; //aangeven wat voor de type de URL is
request.send();//verzenden van het verzoek
request.onload = function () { //function word gestart als de pagina laad
    const  test= request.response;
    movieList(test);
} 

function movieList(jsonObj) {
    
    const info = jsonObj;//aangeven dat info == jsonObj

    for (let i = 0; i < info.length; i++) { //loop door alle onderdelen van de jsonObj

        //elementen aanmaken 
        const myArticle = document.createElement('article');
        const myH1 = document.createElement('h1');
        const myH2 = document.createElement('h2');
        const myH3 = document.createElement('h3');
        
        const myImage = document.createElement('img');
        
        const myPara2 = document.createElement('p');
        const myPara3 = document.createElement('p');
        const myList = document.createElement('ul');

        //info aan elementen toewijzen 
        myH1.textContent = info[i].id;
        myH2.textContent = info[i].title;
        myH3.textContent = info[i].plot;
        myImage.src = info[i].cover;
        
        myPara2.textContent = 'score: ' + info[i].score;
        myPara3.textContent = 'actors:';
        
        //actors element maken --> info toewijzen --> loop door alle actors heen
        const actors = info[i].actors;
        for (let j = 0; j < actors.length; j++) {
            const listItem = document.createElement('li');
            listItem.textContent = actors[j].actor_name;
            myList.appendChild(listItem);
        }
        
        //toevoegen van de elementen + info
        myArticle.appendChild(myH1);
        myArticle.appendChild(myH2);
        myArticle.appendChild(myH3);
        
        myArticle.appendChild(myImage);

        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myList);
        
        section.appendChild(myArticle);
    }


}