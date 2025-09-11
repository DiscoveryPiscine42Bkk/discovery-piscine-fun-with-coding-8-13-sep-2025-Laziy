/* using jQuery */
$(document).ready(function () {
  $("#colorChangeBtn").click(function () {
    const randomColor = getRandomHexColor();
    $("body").css("background-color", randomColor);
  });
});

function getRandomHexColor() {
  const hexChars = "0123456789abcdef";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hexChars[Math.floor(Math.random() * 16)];
  }
  return color;
}
