btnEl = document.querySelector(".btn");

btnEl.addEventListener("click", function (event) {
  let xpos = event.offsetX;
  let ypos = event.offsetY;
  btnEl.style.setProperty("--xpos", xpos + "px");
  btnEl.style.setProperty("--ypos", ypos + "px");

  btnEl.classList.toggle("clicked");
  setTimeout(() => {
    btnEl.classList.toggle("clicked");
  }, 500);
});
