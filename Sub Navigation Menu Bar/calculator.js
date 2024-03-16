
  
function add() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let result = Number(num1) + Number(num2);
    document.getElementById("result").value=result;
  }
  function subtract() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let result = Number(num1) - Number(num2);
    document.getElementById("result").value=result;
  }
  function multiply() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let result = Number(num1) * Number(num2);
    document.getElementById("result").value=result;
  }
  function divide() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let result = Number(num1) / Number(num2);
    document.getElementById("result").value=result;
  }