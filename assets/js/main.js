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
 