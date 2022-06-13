function solution() {
  let recipes = {
    apple: { carbohydrate: 1, flavour: 2 },
    lemonade: { carbohydrate: 10, flavour: 20 },
    burger: { carbohydrate: 5, fat: 7, flavour: 3 },
    eggs: { protein: 5, fat: 1, flavour: 1 },
    turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 },
  };

  let availabeIngredients = {
    protein: 0,
    carbohydrate: 0,
    fat: 0,
    flavour: 0,
  };

  let result = {
    restock,
    prepare,
    report,
  };

  function restock(microElement, quantity) {
    availabeIngredients[microElement] += quantity;
    return "Success";
  }

  function prepare(product, quantity) {
    for (let key in recipes[product]) {
      let required = recipes[product][key] * quantity;

      if (availabeIngredients[key] < required) {
        hasAllIngredients = false;
        return `Error: not enough ${key} in stock`;
      }
    }

    for (let key in recipes[product]) {
      let required = recipes[product][key] * quantity;
      availabeIngredients[key] -= required;
    }
    return "Success";
  }

  function report() {
    let result = [];

    for (let key in availabeIngredients) {
      result.push(`${key}=${availabeIngredients[key]}`);
    }
  }

  return function (string) {
    let [command, product, quantity] = string.split(" ");
    quantity = Number(quantity);

    return result[command](product, quantity);
  };
}

let manager = solution();
console.log(manager("restock flavour 50")); // Success
console.log(manager("prepare lemonade 4")); // Error: not enough carbohydrate in stock
console.log(manager("restock carbohydrate 10")); // Success
console.log(manager("report")); // protein=0 carbohydrate=4 fat=3 flavour=55
