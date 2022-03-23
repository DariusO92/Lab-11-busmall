'use strict';


// *******Global Variables*******

let rounds = 25;
let allProducts = [];



//****DOM References****
let imageContainer = document.getElementById('container');
let img1 = document.getElementById('img1');
let img2 = document.getElementById('img2');
let img3 = document.getElementById('img3');

// let showResults = document.getElementById('show-results');
// let displayResultsList = document.getElementById('display-results-listBtn');

// ******** Canvas Element for chart*******
const ctx = document.getElementById('myChart').getContext('2d');



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
  
  while(allProducts.length < 6){
    let randomProducts = getRandomIndex();
    if(allProducts.includes(randomProducts)){
      allProducts.queue.push(randomProducts)
    };
  };
  
  
  
  // while(productIndexOne === productIndexTwo || productIndexOne === productIndexThree){
  //   productIndexOne = getRandomIndex();
  //   while(productIndexTwo === productIndexThree || productIndexTwo === productIndexOne){
  //         productIndexTwo = getRandomIndex();
      
  //         img1.src = allProducts[productIndexOne].image;
  //     img1.alt = allProducts[productIndexOne].name;
  //     allProducts[productIndexOne].views++;
      
  //     img2.src = allProducts[productIndexTwo].image;
  //     img2.alt = allProducts[productIndexTwo].name;
  //     allProducts[productIndexTwo].views++;
      
  //     img3.src = allProducts[productIndexThree].image;
  //     img3.alt = allProducts[productIndexThree].name;
  //     allProducts[productIndexThree].views++;
      renderImgs();
    }
    
    
    function renderChart(){
      let productNames = [];
      let productVotes =[];
      let productViews = [];
      
      for(let i = 0; i < allProducts.length; i++){
        productNames.push(allProducts[i].productNames);
        productVotes.push(allProducts[i].clicks);
        productViews.push(allProducts[i].views);
      }
      
      let myChartObj =  {
        type: 'bar',
      data: {
          labels: productNames,
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
    
  }
  const myChart = new Chart(ctx, myChartObj);
  
  
  
  










//*******Event Handlers*******

function handleClick(event){
rounds--;
let imgClicked = event.target.alt;

for(let i = 0; i < allProducts.length; i++){

  if(imgClicked === allProducts[i].name){
    allProducts[i].clicks++
  }
  
  console.log(allProducts[i].clicks);
  renderImgs();
}

if(rounds === 1){
  imageContainer.removeEventListener('click', handleClick);
  renderChart();
  return;
}
}



// function handleShowResults(){
  // if(rounds === 0){
//   for(let i = 0; i < allProducts.length; i++){
    
//     let li = document.createElement('li');
//     li.textContent = `${allProducts[i].name} was viewed ${allProducts[i].views} times and clicked on ${allProducts[i].clicks} times.`;
//   }
//   displayResultsList.appendChild(li);
  
// } console.log(handleShowResults);
// }

//*****Event LIsterners*****
imageContainer.addEventListener('click', handleClick)
