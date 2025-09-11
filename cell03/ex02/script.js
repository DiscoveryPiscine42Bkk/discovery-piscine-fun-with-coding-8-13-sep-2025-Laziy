window.onload = function () {
  const form = document.getElementById("calculator-form");
  const leftOperandInput = document.getElementById("left-operand");
  const rightOperandInput = document.getElementById("right-operand");
  const operatorSelect = document.getElementById("operator");

  setInterval(function () {
    alert("Please, use me...");
  }, 30000);

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const leftNum = parseInt(leftOperandInput.value, 10);
    const rightNum = parseInt(rightOperandInput.value, 10);
    const operator = operatorSelect.value;

    if (isNaN(leftNum) || isNaN(rightNum) || leftNum < 0 || rightNum < 0) {
      alert("Error :(");
      return;
    }

    if ((operator === "/" || operator === "%") && rightNum === 0) {
      alert("It's over 9000!");
      console.log(operator === "/" ? Infinity : NaN);
      return;
    }

    let result;
    switch (operator) {
      case "+":
        result = leftNum + rightNum;
        break;
      case "-":
        result = leftNum - rightNum;
        break;
      case "*":
        result = leftNum * rightNum;
        break;
      case "/":
        result = leftNum / rightNum;
        break;
      case "%":
        result = leftNum % rightNum;
        break;
    }

    alert(result);
    console.log(result);
  });
};
