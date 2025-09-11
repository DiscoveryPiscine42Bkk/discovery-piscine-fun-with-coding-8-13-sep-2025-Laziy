$(document).ready(function () {
  setInterval(function () {
    alert("Please, use me...");
  }, 30000);

  $("#calculator-form").submit(function (event) {
    event.preventDefault();

    const leftNum = parseInt($("#left-operand").val(), 10);
    const rightNum = parseInt($("#right-operand").val(), 10);
    const operator = $("#operator").val();

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
});
