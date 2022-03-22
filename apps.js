'use strict';

// *******Global Variables*******

let rounds = 25;
let allProducts = [];



//****DOM References****
let imageContainer = document.getElementById('container');
let img1 = document.getElementById('img1');
let img2 = document.getElementById('img2');
let img3 = document.getElementById('img3'); 
let showResults = document.getElementById('show-results');
let displayResultsList = document.getElementById('display-results-list');




//*******Constructor****** 
function Products(name, fileExtension = 'jpg',){
  this.name = name;
  this.image = `img/${name}.${fileExtension}`;
  this.views = 0;
  this.clicks = 0;
  
  allProducts.push(this);
}
new Products('bag');
new Products('banana');
new Products('bathroom');
new Products('boots');
new Products('breakfast');
new Products('bubblegum');
new Products('chair');
new Products('cthulhu');
new Products('dog-duck');
new Products('dragon');
new Products('pen');
new Products('pet-sweep');
new Products('scissors');
new Products('shark');
new Products('sweep', 'png');
new Products('tauntaun');
new Products('unicorn');
new Products('water-can');
new Products('wine-glass');
new Products('wireframe', 'png');

console.log(allProducts);



//*********Helper Functions****
function getRandomIndex(){
  return Math.floor(Math.random()*allProducts.length);
  
}

function renderImgs(){
  let productIndexOne = getRandomIndex(); 
  let productIndexTwo = getRandomIndex(); 
  let productIndexThree = getRandomIndex();
  
  while(productIndexOne===productIndexTwo){
    productIndexTwo = getRandomIndex();
  }
  while(productIndexTwo===productIndexThree){
    productIndexThree = getRandomIndex();
  }
  while(productIndexOne===productIndexThree){
    productIndexThree = getRandomIndex();
  }
  img1.src = allProducts[productIndexOne].image;
  img1.alt = allProducts[productIndexOne].name;
  allProducts[productIndexOne].views++;

  img2.src = allProducts[productIndexTwo].image;
  img2.alt = allProducts[productIndexTwo].name;
  allProducts[productIndexTwo].views++;

  img3.src = allProducts[productIndexThree].image;
  img3.alt = allProducts[productIndexThree].name;
  allProducts[productIndexThree].views++;
}










//*******Event Handlers*******

function handleClick(event){
rounds--;
let imgClicked = event.target.alt;

for(let i = 0; i < allProducts.length; i++){

  if(imgClicked === allProducts[i].name){
    allProducts[i].clicks++
  }
}
renderImgs();
if(rounds === 1){
  imageContainer.removeEventListener('click', handleClick);
}
}
function handleShowResults(event){
  if(round === 0){
    for(let i = 0; i < allProducts.length; i++){
      let li = document.createElement('li');

      li.textContent = `${allProducts[i].name} was viewed ${allProducts[i].views} times and clicked on ${allProducts.clicks} times.`;
    }
  }

}








//*****Event LIsterners*****
imageContainer.addEventListener('click', handleClick);
displayResultsList.addEventListener('click', handleShowResults)