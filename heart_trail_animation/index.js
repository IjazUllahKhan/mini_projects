let body = document.querySelector("body");

body.addEventListener("pointermove", (e) => {
  let spanEl = document.createElement("span");
  let x = e.offsetX;
  let y = e.offsetY;
  spanEl.style.left = x + "px";
  spanEl.style.top = y + "px";
  let size = Math.random() * 100;
  spanEl.style.width = size + "px";
  spanEl.style.height = size + "px";
  body.append(spanEl);
  setTimeout(() => {
    spanEl.remove();
  }, 3000);
});
