// order an array of objects with name
// users.sort(function (a, b) {
//     if (a.name < b.name) {
//       return -1;
//     }
//     if (a.name > b.name) {
//       return 1;
//     }
//     return 0;
//   });

function makeList(){
    document.getElementById("")
}

var listBtn = document.querySelector(".list");
var closeBtn = document.querySelector("#close-button");
var modal = document.querySelector(".modal");
var modalBg = document.querySelector(".modal-background");
var cancelBtn = document.querySelector("#cancel");
  
  listBtn.addEventListener("click", (event) => {
      event.preventDefault();
      modal.classList.add("is-active");
      var modalTitle = document.querySelector(".modal-card-title");
      let fetchUrl = `https://thecocktaildb.com/api/json/v1/1/search.php?s=${}`
      fetch(fetchUrl)
          .then(function (response) {
              return response.json();
          })
          .then(function (data) {
              console.log(data.drinks);
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
  