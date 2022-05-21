

function aggregateElements(arr) {
    let numbersArray = arr.map(Number);
 
    let sum = numbersArray.reduce((a, b) => a + b);
    let inverseValuesSum = numbersArray.reduce((a, b) => a + 1 / b, 0);    
    let stringConcat = numbersArray.join('');
 
    console.log(sum);
    console.log(inverseValuesSum);
    console.log(stringConcat);
}

// aggregateElements([1, 2, 3])
aggregateElements([2, 4, 8, 16])