const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

if (btn && color) {
    btn.addEventListener("click", changeBackgroundColor);
  }
  
  function changeBackgroundColor() {
    let hexColor='#'

    for (let i = 0; i < 6; i++) {
        hexColor +=hex[getRandomColor()];
        
    }
    color.textContent = hexColor
    document.body.style.backgroundColor = hexColor;
  }
  const getRandomColor = () => Math.floor(Math.random() * hex.length);
  