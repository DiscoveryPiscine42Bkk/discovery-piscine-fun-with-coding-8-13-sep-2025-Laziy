const colorButton = document.getElementById("colorChangeBtn");

/**
 
    @returns {string}
 */
function getRandomHexColor() {
  const hexCharacters = "0123456789abcdef";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * 16);
    color += hexCharacters[randomIndex];
  }
  return color;
}

colorButton.addEventListener("click", function () {
  const newRandomColor = getRandomHexColor();

  document.body.style.backgroundColor = newRandomColor;
});
