function lowestPricesFinder(arr) {
  let products = {};

  for (let input of arr) {
    let [town, product, price] = input.split(" | ");

    if (!products.hasOwnProperty(product)) {
      products[product] = {};
    }
    products[product][town] = Number(price);
  }

  for (let key in products) {
    let sort = Object.entries(products[key]).sort((a, b) => a[1] - b[1]);
    console.log(`${key} -> ${sort[0][1]} (${sort[0][0]})`);
  }
}

lowestPricesFinder([
  "Sample Town | Sample Product | 1000",
  "Sample Town | Orange | 2",
  "Sample Town | Peach | 1",
  "Sofia | Orange | 3",
  "Sofia | Peach | 2",
  "New York | Sample Product | 1000.1",
  "New York | Burger | 10",
]);
//Sample Product -> 1000 (Sample Town) Orange -> 2 (Sample Town) Peach -> 1 (Sample Town) Burger -> 10 (New York)
