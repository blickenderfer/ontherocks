var search = document.querySelector("#search-container")
var inputBar = document.querySelector("#search-bar")
var key = `1`

const fetchUrl ="https://thecocktaildb.com/api/json/v1/1/search.php?s=margarita"

// fetch(fetchUrl)
//  .then(function(response){
//     return response.json();
//  })
// .then(function(data){
//     console.log(data.drinks);
// })


/*modal script*/
var searchBtn = document.querySelector("#search");
var closeBtn = document.querySelector("#close-button");
var modal = document.querySelector(".modal");
var modalBg = document.querySelector(".modal-background");
var cancelBtn = document.querySelector("#cancel");
var faveBtn = document.querySelector("#fave-button")

searchBtn.addEventListener("click", (event) => {
    event.preventDefault();
    modal.classList.add("is-active");
    var modalTitle = document.querySelector(".modal-card-title");
    var searchDrink = document.querySelector("#search-bar").value;
    console.log(searchDrink);
    let fetchUrl =`https://thecocktaildb.com/api/json/v1/1/search.php?s=${searchDrink}`
    fetch(fetchUrl)
 .then(function(response){
    return response.json();
 })
.then(function(data){
    console.log(data.drinks);
    modalTitle.textContent=data.drinks[0].strDrink;
    var drinkImg = document.querySelector("#drink-img"); 
    drinkImg.src=data.drinks[0].strDrinkThumb;
    //make a loop to check if a particular ingredient is null in order to include it 
})
});
closeBtn.addEventListener("click", () => {
    modal.classList.remove("is-active");
});
modalBg.addEventListener("click", () => {
    modal.classList.remove("is-active");
});
cancelBtn.addEventListener("click", () => {
    modal.classList.remove("is-active");
});



/*script for conversation generator box*/
var generateBtn = document.querySelector(".generate");
var factContainer = document.querySelector(".fact-container");

