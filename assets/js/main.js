var search = document.querySelector("#search-container")
var inputBar = document.querySelector("#search-bar")


const fetchUrl ="https://thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic"

fetch(fetchUrl)
 .then(function(response){
    return response.json();
 })
.then(function(data){
    console.log(data);
})


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
faveBTn.addEventListener("click", () => {
    // add drink data to local storage here 
});