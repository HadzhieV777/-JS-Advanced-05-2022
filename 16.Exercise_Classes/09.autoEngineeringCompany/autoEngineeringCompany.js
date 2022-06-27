function company(input) {
  let result = {};

  input.forEach((car) => {
    let [brand, model, quantity] = car.split(" | ");

    if (!result.hasOwnProperty(brand)) {
      result[brand] = {};
    }

    if (!result[brand].hasOwnProperty(model)) {
      result[brand][model] = Number(quantity);
    } else {
      result[brand][model] += Number(quantity);
    }
  });

  for (let key in result) {
    console.log(key);
    for (let model in result[key]) {
      console.log(`###${model} -> ${result[key][model]}`);
    }
  }
}

company([
  "Audi | Q7 | 1000",
  "Audi | Q6 | 100",
  "BMW | X5 | 1000",
  "BMW | X6 | 100",
  "Citroen | C4 | 123",
  "Volga | GAZ-24 | 1000000",
  "Lada | Niva | 1000000",
  "Lada | Jigula | 1000000",
  "Citroen | C4 | 22",
  "Citroen | C5 | 10",
]);
