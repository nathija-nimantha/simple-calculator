function calc() {
    let num1 = document.getElementById('txtNumber1').value;
    let operator = document.getElementById('txtoperator').value;
    let num2 = document.getElementById('txtNumber2').value;
    let lblOutput = document.getElementById('lblOutput');

    num1 = Number(num1);
    num2 = Number(num2);

    switch (operator) {
        case "+":
            lblOutput.innerHTML = num1 + num2;
            break;
        case "-":
            lblOutput.innerHTML = num1 - num2;
            break;
        case "*":
            lblOutput.innerHTML = num1 * num2;
            break;
        case "/":
            lblOutput.innerHTML = num1 / num2;
            break;
        default:
            lblOutput.innerHTML = "Invalid operator";
            break;
    }
}

document.getElementById('btnCalc').addEventListener('click', calc);
