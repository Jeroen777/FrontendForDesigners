let btn = document.querySelector('#test');
let btnTwee = document.querySelector('#testTwee');
let movieToggle = document.querySelector("#likeAantal");

function toggleLike(){
  movieToggle.classList.toggle("visible");
  btn.classList.toggle('haveLiked');
}

function toggleLikeTwee(){
  movieToggle.classList.toggle("visible");
  btnTwee.classList.toggle('haveLiked')
}

btnTwee.addEventListener("click", toggleLikeTwee)
btn.addEventListener("click", toggleLike)