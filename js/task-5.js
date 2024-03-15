
// Напиши скрипт, який змінює колір фону елемента <body> через інлайн-стиль по кліку на button.change-color і задає це значення кольору текстовим вмістом для span.color.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const onClick = () => {
  const currentColor = getRandomHexColor()
  
  body.style.backgroundColor = currentColor;
  bodyColor.textContent = currentColor;
}

const btn = document.querySelector(".change-color");
const body = document.querySelector("body");
const bodyColor = document.querySelector(".color");

btn.addEventListener("click", onClick)
 


