const header = document.querySelector('header');
const section = document.querySelector('section');
let requestURL = 'https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json'; 
let request = new XMLHttpRequest(); 
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function () {
    const  test= request.response;
    movieList(test);
} 

function movieList(jsonObj) {
    const info = jsonObj;
    for (let i = 0; i < info.length; i++) {

        const myArticle = document.createElement('article');
        const myH1 = document.createElement('h1');
        const myH2 = document.createElement('h2');
        const myH3 = document.createElement('h3');
        const myH4 = document.createElement('h4');

        const myPara2 = document.createElement('p');
        const myPara3 = document.createElement('p');
        const myList = document.createElement('ul');

        myH1.textContent = info[i].id;
        myH2.textContent = info[i].title;
        myH3.textContent = info[i].plot;
        myH4.imageContent = info[i].cover;
        
        myPara2.textContent = 'score: ' + info[i].score;
        myPara3.textContent = 'actors:';

        const actors = info[i].actors;
        for (let j = 0; j < actors.length; j++) {
            const listItem = document.createElement('li');
            listItem.textContent = actors[j].actor_name;
            myList.appendChild(listItem);
        }
        
        myArticle.appendChild(myH1);
        myArticle.appendChild(myH2);
        myArticle.appendChild(myH3);
        myArticle.appendChild(myH4);
        //        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myList);

        section.appendChild(myArticle);
    }


}