function calorieObject(arr) {
  let result = {};

  while (arr.length !== 0) {
    let product = arr.shift();
    let calories = arr.shift();
    result[product] = Number(calories);
  }
  console.log(result);
}

calorieObject(["Yoghurt", "48", "Rise", "138", "Apple", "52"]); // { Yoghurt: 48, Rise: 138, Apple: 52 }
calorieObject(["Potato", "93", "Skyr", "63", "Cucumber", "18", "Milk", "42"]); // { Potato: 93, Skyr: 63, Cucumber: 18, Milk: 42 }
