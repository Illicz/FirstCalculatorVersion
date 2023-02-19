"use strickt";

// the variable that stores the selected mathematical action
var op;

//calculation function
function func() {
  // a variable for the result
  var result;
  // get the first and second numbers
  var num1 = Number(document.getElementById("num1").value);
  var num2 = Number(document.getElementById("num2").value);
  // see what was in the variable with the action, and act on it
  switch (op) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
  }

  document.getElementById("result").innerHTML = result;
}
