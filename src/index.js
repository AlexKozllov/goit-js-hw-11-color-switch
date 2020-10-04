import css from "./css/style.css";

const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const startBtn = document.querySelector('[data-action="start"]');
const stopBtn = document.querySelector('[data-action="stop"]');
const backgroundColor = document.querySelector("body");

let interval;

startBtn.addEventListener("click", startBackgroundChange);
stopBtn.addEventListener("click", stopBackgroundChange);

function startBackgroundChange() {
  interval = setInterval(() => {
    const newBackground =
      colors[randomIntegerFromInterval(0, colors.length - 1)];
    backgroundColor.style.backgroundColor = newBackground;
  }, 1000);
  startBtn.disabled = true;
}

function stopBackgroundChange() {
  clearInterval(interval);
  startBtn.disabled = false;
}
