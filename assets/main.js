
// const searchForm = document.querySelector('form')
// const searchResult = document.querySelector('.search-results')
// const container = document.querySelector('.container')
// let searchQuery = ''
// const App_ID = 'cf6c5cd3'
// const App_key = '139b8a87786721e04e70f587f21d76e4'


// searchForm.addEventListener('submit', (e) =>{
//     e.preventDefault()
//     searchQuery = e.target.querySelector('input').value;
//     fetchAPI();
// });
// async function fetchAPI() {
//     const baseURL = `https://api.edamam.com/search?q=pizza&app_id=${App_ID}&app_key=${App_key}&to=20` 
//     const response = await fetch(baseURL)
//     const data = await response.json()
//     generateHTML(data.hits)
//     // console.log(data)
// }
// function generateHTML(results){
//         let generatedHtml = ''
//         results.map(result =>{
//             console.log(result)
//             generatedHtml +=
//             `
//             <div class="item">
//                         <img src="${result.recipe.image}" alt="">
//                         <div class="flex-container">
//                             <h1 class="title">${result.recipe.label}</h1>
//                             <a class="view-Button" href="#">View Recipe</a>
//                         </div>
//                         <p class="item-data">Calories: 120</p>
//                     </div>
    
//             `
//         })
//         searchResult.innerHTml = generatedHtml
//     }
    
    
    




const searchForm = document.querySelector("form");
const searchResultDiv = document.querySelector(".search-results");
const container = document.querySelector(".container");
let searchQuery = "";
const APP_ID = 'cf6c5cd3'
const APP_key = '139b8a87786721e04e70f587f21d76e4'

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  searchQuery = e.target.querySelector("input").value;
  fetchAPI();
});

async function fetchAPI() {
  const baseURL = `https://api.edamam.com/search?q=${searchQuery}&app_id=${APP_ID}&app_key=${APP_key}&from=0&to=100`;
  const response = await fetch(baseURL);
  const data = await response.json();
  generateHTML(data.hits);
  console.log(data);
}

function generateHTML(results) {
  container.classList.remove("initial");
  let generatedHTML = "";
  results.map((result) => {
      console.log(result)
    generatedHTML += `
      <div class="item">
        <img src="${result.recipe.image}" alt="img">
        <div class="flex-container">
          <h1 class="title">${result.recipe.label}</h1>
        </div>
        <p class="item-data">ingredients: ${result.recipe.ingredientLines}</p>
       
      </div>
    `;
  });
  searchResultDiv.innerHTML = generatedHTML;
}



// const fetchData =()=>{

// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '7c630b4ebemsh9736eec138953c0p13b864jsna34eb4101d1d',
// 		'X-RapidAPI-Host': 'recipe-by-api-ninjas.p.rapidapi.com'
// 	}
// };

// fetch('https://recipe-by-api-ninjas.p.rapidapi.com/v1/recipe?query=recipe&offset=30', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))

// 	.catch(err => console.error(err));
    
// }

// 