

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
fetch('https://api.edamam.com/search?q=${searchQuery}&app_id=${APP_ID}&app_key=${APP_key}&from=0&to=20')
async function fetchAPI() {
  const baseURL = `https://api.edamam.com/search?q=${searchQuery}&app_id=${APP_ID}&app_key=${APP_key}&from=0&to=20`;
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



// const fetchRecipe = ()=>{
//   const APP_key = '139b8a87786721e04e70f587f21d76e4'

//   fetch(`https://api.edamam.com/search?q=${searchQuery}&app_id=${APP_ID}&app_key=${APP_key}&from=0&to=20`)
//   .then(res => res.json())
//   .then()
  
// }