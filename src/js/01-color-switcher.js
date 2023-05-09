const startEl = document.querySelector("[data-start]");
const stopEl = document.querySelector("[data-stop]");



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


startEl.addEventListener("click", () => {
   timerId = setInterval(() => {
     document.body.style.backgroundColor = getRandomHexColor();
   document.body.style.backgroundColor.innerHTML = getRandomHexColor();
   },1000);
  startEl.disabled = true;
  stopEl.disabled = false;
});


stopEl.addEventListener("click", () => {
   stopEl.disabled = true;
  startEl.disabled = false;
  clearInterval(timerId);
});

