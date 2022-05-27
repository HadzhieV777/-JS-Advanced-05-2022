function calorieObject(arr) {
  let result = {};

  for (let i = 0; i < arr.length; i += 2) {
    let product = arr[i];
    let calories = Number(arr[i + 1]);

    if (calories === undefined) {
      break;
    }

    result[product] = calories;
  }
  console.log(result);
}

calorieObject(["Yoghurt", "48", "Rise", "138", "Apple", "52"]); // { Yoghurt: 48, Rise: 138, Apple: 52 }
calorieObject(["Potato", "93", "Skyr", "63", "Cucumber", "18", "Milk", "42"]); // { Potato: 93, Skyr: 63, Cucumber: 18, Milk: 42 }
