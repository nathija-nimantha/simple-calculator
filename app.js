function clac(){
    let num1 = document.getElementById('txtNumber1').value;
    let num2 = document.getElementById('txtNumber2').value;
    let lblOuput = document.getElementById('lblOuput');

    console.log(typeof num1);
    console.log(typeof num2);

    num1 = Number(num1);
    num2 = Number(num2);
    lblOuput.innerHTML = num1 + num2;
}

document.getElementById('btnCalc').addEventListener('click', clac);