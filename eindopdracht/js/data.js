const header = document.querySelector('header');
const section = document.querySelector('section');
let requestURL = 'https://raw.githubusercontent.com/Jeroen777/FrontendForDesigners/master/eindopdracht/cars.json'; 
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

        const myImage = document.createElement('img');
        //info aan elementen toewijzen 
        myH1.textContent = info[i].name;
        
        myImage.src = info[i].img_url;
        
        //actors element maken --> info toewijzen --> loop door alle actors heen

        
        //toevoegen van de elementen + info
        myArticle.appendChild(myH1);
    
        myArticle.appendChild(myImage);

        section.appendChild(myArticle);
    }


}