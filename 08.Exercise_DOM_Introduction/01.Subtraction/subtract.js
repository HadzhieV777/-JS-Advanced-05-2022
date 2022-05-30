function subtract() {
    let numberElements = document.querySelectorAll('input');
    let output = document.querySelector('#result');

    let firstNum = Number(numberElements[0].value);
    let secondNum = Number(numberElements[1].value);
    output.textContent = firstNum - secondNum;
}