document.addEventListener('DOMContentLoaded', function () {
    let fNum = '';
    let sNum = '';
    let operator = '';
    let resultDisplayed = false;

    const display = {
        fNum: document.getElementById('fNum'),
        sNum: document.getElementById('sNum'),
        operator: document.getElementById('lblOperator'),
        output: document.getElementById('lblOutput')
    };

    function updateDisplay() {
        display.fNum.innerHTML = fNum;
        display.sNum.innerHTML = sNum;
        display.operator.innerHTML = operator;
        if (resultDisplayed) {
            display.output.innerHTML = fNum;
        } else {
            display.output.innerHTML = '';
        }
    }

    function clearAll() {
        fNum = '';
        sNum = '';
        operator = '';
        resultDisplayed = false;
        updateDisplay();
    }

    function clearEntry() {
        if (!resultDisplayed) {
            if (sNum) {
                sNum = '';
            } else if (operator) {
                operator = '';
            } else if (fNum) {
                fNum = '';
            }
        }
        updateDisplay();
    }

    function deleteLast() {
        if (resultDisplayed) return;
        if (sNum) {
            sNum = sNum.slice(0, -1);
        } else if (operator) {
            operator = '';
        } else if (fNum) {
            fNum = fNum.slice(0, -1);
        }
        updateDisplay();
    }

    function inputDigit(digit) {
        if (resultDisplayed) {
            clearAll();
            resultDisplayed = false;
        }
        if (operator) {
            sNum += digit;
        } else {
            fNum += digit;
        }
        updateDisplay();
    }

    function inputDot() {
        if (resultDisplayed) {
            clearAll();
            resultDisplayed = false;
        }
        if (operator) {
            if (!sNum.includes('.')) {
                sNum += '.';
            }
        } else {
            if (!fNum.includes('.')) {
                fNum += '.';
            }
        }
        updateDisplay();
    }

    function inputOperator(op) {
        if (resultDisplayed) {
            sNum = '';
            resultDisplayed = false;
        }
        if (fNum && !sNum) {
            operator = op;
        } else if (fNum && sNum) {
            calculate();
            operator = op;
        }
        updateDisplay();
    }

    function toggleSign() {
        if (resultDisplayed) return;
        if (sNum) {
            sNum = String(-parseFloat(sNum));
        } else if (fNum) {
            fNum = String(-parseFloat(fNum));
        }
        updateDisplay();
    }

    function inputPercent() {
        if (resultDisplayed) return;
        if (sNum) {
            sNum = String(parseFloat(sNum) / 100);
        } else if (fNum) {
            fNum = String(parseFloat(fNum) / 100);
        }
        updateDisplay();
    }

    function calculate() {
        if (fNum && sNum && operator) {
            const num1 = parseFloat(fNum);
            const num2 = parseFloat(sNum);
            let tempResult;
            switch (operator) {
                case '+':
                    tempResult = num1 + num2;
                    break;
                case '-':
                    tempResult = num1 - num2;
                    break;
                case '*':
                    tempResult = num1 * num2;
                    break;
                case '/':
                    tempResult = num1 / num2;
                    break;
                default:
                    return;
            }
            display.output.innerHTML = tempResult;
            resultDisplayed = true;
        }
    }

    document.getElementById('btnPercent').onclick = inputPercent;
    document.getElementById('btnCE').onclick = clearEntry;
    document.getElementById('btnC').onclick = clearAll;
    document.getElementById('btnDel').onclick = deleteLast;
    document.getElementById('btnDiv').onclick = function () { inputOperator('/'); };
    document.getElementById('btnMul').onclick = function () { inputOperator('*'); };
    document.getElementById('btnSub').onclick = function () { inputOperator('-'); };
    document.getElementById('btnPlusMinus').onclick = toggleSign;
    
    const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    digits.forEach(function (digit) {
        document.getElementById('btn' + digit).onclick = function () { inputDigit(digit); };
    });

    document.getElementById('btnDot').onclick = inputDot;

    document.getElementById('btnCalc').onclick = function () {
        calculate();
    };
});
