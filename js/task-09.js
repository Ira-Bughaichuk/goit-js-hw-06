function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// який змінює кольори фону елемента <body>
// через інлайн - стиль по кліку на button.change - color
// і виводить значення кольору в span.color.

const bodyEl = document.querySelector("body");
const btnEl = document.querySelector("button");
const spanEl = document.querySelector("span");

btnEl.addEventListener("click", () => {
  bodyEl.style.backgroundColor = getRandomHexColor();
spanEl.textContent = getRandomHexColor();
})


