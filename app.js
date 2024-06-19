function clac(){
    let num1 = document.getElementById('txtNumber1').value;
    let operator = document.getElementById('txtoperator').value;
    let num2 = document.getElementById('txtNumber2').value;
    let lblOuput = document.getElementById('lblOuput');

    num1 = Number(num1);
    operator = Number(operator);
    num2 = Number(num2);

    if(operator == '+'){
        lblOuput.innerHTML = num1 + num2;
    } else if(operator == '-'){
        lblOuput.innerHTML = num1 - num2;
    } else if(operator == '*'){
        lblOuput.innerHTML = num1 * num2;
    } else if(operator == '/'){
        lblOuput.innerHTML = num1 / num2;
    } else if(operator == '%'){
        lblOuput.innerHTML = num1 % num2;
    }
}
    document.getElementById('btnCalc').addEventListener('click', clac);