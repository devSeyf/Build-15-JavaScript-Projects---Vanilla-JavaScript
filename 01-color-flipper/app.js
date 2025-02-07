const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");


if (btn && color) {
  btn.addEventListener("click", changeBackgroundColor);
}

function changeBackgroundColor() {
  const randomColor = getRandomColor();
  document.body.style.backgroundColor = randomColor;
  color.textContent = randomColor;
}

    
const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];
