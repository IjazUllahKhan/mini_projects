let inputEl = document.querySelector("#input1");
let body = document.querySelector("body");

let darkMode = JSON.parse(localStorage.getItem("darkMode"));
inputEl.checked = darkMode;
updateBody();
function updateBody() {
  if (inputEl.checked) {
    body.style.backgroundColor = "black";
    body.style.color = "white";
  } else {
    body.style.backgroundColor = "white";
    body.style.color = "black";
  }
}

inputEl.addEventListener("input", function (event) {
  updateLocalStorage();
  updateBody();
});

function updateLocalStorage() {
  localStorage.setItem("darkMode", JSON.stringify(inputEl.checked));
}
