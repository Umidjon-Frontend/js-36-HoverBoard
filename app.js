const hoverBoard = document.querySelector(".hover-board");

const colors = ["#e74c3c", "#8e44ad", "#3498db", "#e67e22", "#2ecc71"];
const itemCount = 500;

Array(500)
  .fill()
  .map((item) => {
    const square = document.createElement("div");
    square.classList.add("item");

    square.addEventListener("mouseover", () => setColor(square));
    square.addEventListener("mouseout", () => removeColor(square));

    hoverBoard.appendChild(square);
  });

function setColor(element) {
  let color = colors[Math.floor(Math.random() * colors.length)];
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
  element.style.backgroundColor = "#1d1d1d";
  element.style.boxShadow = "0 0 2px #000";
}
