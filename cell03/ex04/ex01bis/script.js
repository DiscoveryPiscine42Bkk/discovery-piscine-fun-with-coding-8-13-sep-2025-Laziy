$(document).ready(function () {
  const colors = ["red", "green", "blue"];
  let colorIndex = 0;

  const balloon = $("#balloon");

  balloon.click(function () {
    let currentSize = balloon.width();

    currentSize += 10;
    if (currentSize > 420) {
      currentSize = 200;
    }

    colorIndex = (colorIndex + 1) % colors.length;

    updateBalloon(currentSize, colors[colorIndex]);
  });

  balloon.mouseleave(function () {
    let currentSize = balloon.width();

    if (currentSize > 200) {
      currentSize -= 5;
    }

    colorIndex = (colorIndex - 1 + colors.length) % colors.length;

    updateBalloon(currentSize, colors[colorIndex]);
  });

  function updateBalloon(size, color) {
    balloon.css({
      width: size + "px",
      height: size + "px",
      "background-color": color,
    });
  }
});
