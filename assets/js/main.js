var search = document.querySelector("#search-container")
var inputBar = document.querySelector("#search-bar")
var key = `1`
var factEl = document.querySelector("#fact");
var descriptionEl = document.querySelector(".drink-modal .drink-description");
const fetchUrl = "https://thecocktaildb.com/api/json/v1/1/search.php?s=margarita"


/*modal script*/
var searchBtn = document.querySelector("#search");
var closeBtn = document.querySelector("#close-button");
var modal = document.querySelector(".modal");
var modalBg = document.querySelector(".modal-background");
var cancelBtn = document.querySelector("#cancel");
var faveBtn = document.querySelector("#fave-button");

searchBtn.addEventListener("click", (event) => {
    event.preventDefault();
    modal.classList.add("is-active");
    var modalTitle = document.querySelector(".modal-card-title");
    var searchDrink = document.querySelector("#search-bar").value;
    console.log(searchDrink);
    let fetchUrl = `https://thecocktaildb.com/api/json/v1/1/search.php?s=${searchDrink}`
    fetch(fetchUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data.drinks);
            var topResult = data.drinks[0]
            modalTitle.textContent = data.drinks[0].strDrink;
            var drinkImg = document.querySelector("#drink-img");
            drinkImg.src = data.drinks[0].strDrinkThumb;
            var ingredients = []
            for(i = 1; i <= 15; i++){
                var currentIngredient = `strIngredient${i}`
                var ingredient = topResult[currentIngredient];
                console.log(ingredient);
                if (!ingredient){
                    return;
                } else {
                    ingredients.push(ingredient);
                    var descriptionP = document.createElement("p")
                    descriptionP.textContent = ingredient;
                    descriptionEl.appendChild(descriptionP);                  
                }
            }
            console.log(ingredients);
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


/*adding to favorites*/
faveBtn.addEventListener("click", () => {
    function saveDrink(){
    var key = saveDrink.id;
    var drinkData = 
    window.localStorage.setItem(key, drinkData);        
    }        
    saveDrink();
})
    //drink data --> setitem for local storage and then getitem


/*script for conversation generator box*/
const generateBtn = document.querySelector("#generate");
const factContainer = document.querySelector(".fact-container");

generateBtn.addEventListener("click", (event) => {
    fetch(`https://uselessfacts.jsph.pl/api/v2/facts/random`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            console.log(data.text);
            factEl.textContent = data.text;
        })
    })