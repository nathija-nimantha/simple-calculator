let firstNumber = '';
let secondNumber = '';
let operator = '';
let result = '';

function updateDisplay() {
    document.getElementById('fNum').innerText = firstNumber;
    document.getElementById('lblOperator').innerText = operator;
    document.getElementById('sNum').innerText = secondNumber;
    document.getElementById('lblOutput').innerText = result;
}

function numberButtonClick(value) {
    if (operator) {
        secondNumber += value;
    } else {
        firstNumber += value;
    }
    updateDisplay();
}

function operatorButtonClick(value) {
    if (firstNumber && !secondNumber) {
        operator = value;
    }
    updateDisplay();
}

function calculate() {
    let num1 = parseFloat(firstNumber);
    let num2 = parseFloat(secondNumber);

    if (operator === '+') {
        result = num1 + num2;
    } else if (operator === '-') {
        result = num1 - num2;
    } else if (operator === '*') {
        result = num1 * num2;
    } else if (operator === '/') {
        if (num2 !== 0) {
            result = num1 / num2;
        } else {
            result = 'Error';
        }
    }
    updateDisplay();
}

function clearAll() {
    firstNumber = '';
    secondNumber = '';
    operator = '';
    result = '';
    updateDisplay();
}

document.getElementById('btn0').addEventListener('click', () => numberButtonClick('0'));
document.getElementById('btn1').addEventListener('click', () => numberButtonClick('1'));
document.getElementById('btn2').addEventListener('click', () => numberButtonClick('2'));
document.getElementById('btn3').addEventListener('click', () => numberButtonClick('3'));
document.getElementById('btn4').addEventListener('click', () => numberButtonClick('4'));
document.getElementById('btn5').addEventListener('click', () => numberButtonClick('5'));
document.getElementById('btn6').addEventListener('click', () => numberButtonClick('6'));
document.getElementById('btn7').addEventListener('click', () => numberButtonClick('7'));
document.getElementById('btn8').addEventListener('click', () => numberButtonClick('8'));
document.getElementById('btn9').addEventListener('click', () => numberButtonClick('9'));
document.getElementById('btnAdd').addEventListener('click', () => operatorButtonClick('+'));
document.getElementById('btnSub').addEventListener('click', () => operatorButtonClick('-'));
document.getElementById('btnMul').addEventListener('click', () => operatorButtonClick('*'));
document.getElementById('btnDiv').addEventListener('click', () => operatorButtonClick('/'));
document.getElementById('btnCalc').addEventListener('click', calculate);
document.getElementById('btnDel').addEventListener('click', clearAll);