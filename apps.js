'use strict';


// *******Global Variables*******
let products = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu','dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'water-can', 'wine-glass'];
let rounds = 25;
let productArray = [];
let previousIndex = [];



//****DOM References****
let imageContainer = document.getElementById('container');
let img1 = document.getElementById('img1');
let img2 = document.getElementById('img2');
let img3 = document.getElementById('img3');

 let showResults = document.getElementById('show-results');
 // let displayResultsList = document.getElementById('display-results-listBtn');

// ******** Canvas Element for chart*******
let ctx = document.getElementById('myChart').getContext('2d');



//*******Constructor****** 
function Product(name, fileExtension = 'jpg',){
  this.name = name;
  this.image = `img/${name}.${fileExtension}`;
  this.views = 0;
  this.clicks = 0;
  
  productArray.push(this);
}

for(let i= 0; i < products.length; i++){
  if(products[i] === 'sweep'){
    new Product('sweep', 'png');
  } else {
      new Product(`${products[i]}`);
    }
  }


// new products('bag');
// new products('banana');
// new products('bathroom');
// new products('boots');
// new products('breakfast');
// new products('bubblegum');
// new products('chair');
// new products('cthulhu');
// new products('dog-duck');
// new products('dragon');
// new products('pen');
// new products('pet-sweep');
// new products('scissors');
// new products('shark');
// new products('sweep', 'png');
// new products('tauntaun');
// new products('unicorn');
// new products('water-can');
// new products('wine-glass');
// new products('wireframe', 'png');

//  



//*********Helper Functions****
function getRandomIndex(){
  return Math.floor(Math.random()*products.length);
  
}
<<<<<<< HEAD

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
=======



function renderImgs(){
  // let productIndexOne = getRandomIndex(); 
  // let productIndexTwo = getRandomIndex(); 
  // let productIndexThree = getRandomIndex();
  
  while(previousIndex.length < 6){
    let randomproducts = getRandomIndex();
    if(!previousIndex.includes(randomproducts)){
      previousIndex.push(randomproducts);
    }
  }
  
  if(previousIndex.length === 6){
    previousIndex.splice(0, 3);
  }
  
  
  // while(productIndexOne === productIndexTwo || productIndexOne === productIndexThree){
  //   productIndexOne = getRandomIndex();
  //   while(productIndexTwo === productIndexThree || productIndexTwo === productIndexOne){
  //         productIndexTwo = getRandomIndex();
      
          img1.src = productArray[previousIndex[0]].image;
      img1.alt = productArray[previousIndex[0]].name;
      productArray[previousIndex[0]].views++;
      
      img2.src = productArray[previousIndex[1]].image;
      img2.alt = productArray[previousIndex[1]].name;
      productArray[previousIndex[1]].views++;
      
      img3.src = productArray[previousIndex[2]].image;
      img3.alt = productArray[previousIndex[2]].name;
      productArray[previousIndex[2]].views++;
    }
    renderImgs();
    
    
    function handleClick(event){
      let imgClicked = event.target.alt;
      
      for(let i = 0; i < productArray.length; i++){
        if(imgClicked === productArray[i].name){
          productArray[i].clicks++;
        }
        
      }
      
      rounds--;
      if(rounds === 0){
        imageContainer.removeEventListener('click', handleClick);
        return;
      }
      renderImgs();
    };
    
    function renderChart(){
      // let productNames = [];
      let productVotes =[];
      let productViews = [];
      
      for(let i = 0; i < productArray.length; i++){
        // productNames.push(productArray[i].productNames);
        productVotes.push(productArray[i].clicks);
        productViews.push(productArray[i].views);
      }
      if(rounds === 0){
        let myChartObj = {
          type: 'bar',
        data: {
            labels: products,
            datasets: [{
              label: '# of Votes',
              data: productVotes,
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                  ],
                  borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                  ],
                  borderWidth: 1
                },
                {
                  label: '# of Views',
                  data: productViews,
                  backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                  ],
                  borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
          }
        }
        
        new Chart(ctx, myChartObj);
      }
      
      // renderChart();
  }
>>>>>>> e55d880ad88b24bf1c82926267c4c2e900370ccd

  //*****Event LIsterners*****
  imageContainer.addEventListener('click', handleClick);
  showResults.addEventListener('click', renderChart);
  
  
  

<<<<<<< HEAD
  img3.src = allProducts[productIndexThree].image;
  img3.alt = allProducts[productIndexThree].name;
  allProducts[productIndexThree].views++;
}

=======
>>>>>>> e55d880ad88b24bf1c82926267c4c2e900370ccd









//*******Event Handlers*******

<<<<<<< HEAD
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
=======
>>>>>>> e55d880ad88b24bf1c82926267c4c2e900370ccd



// function handleShowResults(){
  // if(rounds === 0){
//   for(let i = 0; i < products.length; i++){
    
//     let li = document.createElement('li');
//     li.textContent = `${products[i].name} was viewed ${products[i].views} times and clicked on ${products[i].clicks} times.`;
//   }
//   displayResultsList.appendChild(li);
  
// } console.log(handleShowResults);
// }

<<<<<<< HEAD




//*****Event LIsterners*****
imageContainer.addEventListener('click', handleClick);
displayResultsList.addEventListener('click', handleShowResults)
=======
>>>>>>> e55d880ad88b24bf1c82926267c4c2e900370ccd
