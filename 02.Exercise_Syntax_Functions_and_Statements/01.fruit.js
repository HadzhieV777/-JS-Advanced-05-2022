

function fruitCalc(fruit, weight, price) {
    
    let fruitType = fruit;
    let weightInKg = weight / 1000;
    let pricePerKg = price;
    
    let TotalPrice = weightInKg * pricePerKg
    console.log(`I need $${TotalPrice.toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${fruitType}.`)
}

fruitCalc('orange', 2500, 1.80)
fruitCalc('apple', 1563, 2.35)

