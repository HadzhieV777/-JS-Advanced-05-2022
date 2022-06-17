class Restaurant {
  constructor(budget) {
    this.budgetMoney = Number(budget);
    this.menu = {};
    this.stockProducts = {};
    this.history = [];
    this.counter = 0;
  }

  // // Method #1
  loadProducts(products) {
    products.forEach((element) => {
      let [productName, productQuantity, productTotalPrice] =
        element.split(" ");
      productQuantity = Number(productQuantity);
      productTotalPrice = Number(productTotalPrice);
      if (this.budgetMoney - productTotalPrice >= 0) {
        this.budgetMoney -= productTotalPrice;
        if (this.stockProducts.hasOwnProperty(productName)) {
          this.stockProducts[productName] += 0;
        }
        this.stockProducts[productName] = productQuantity;
        this.history.push(
          `Successfully loaded ${productQuantity} ${productName}`
        );
      } else {
        this.history.push(
          `There was not enough money to load ${productQuantity} ${productName}`
        );
      }
    });
    return this.history.join("\n");
  }
  // Method #2
  addToMenu(meal, products, price) {
    if (!this.menu[meal]) {
      this.menu[meal] = {
        products: {},
        price: price,
      };

      products.forEach((product) => {
        let [name, quantity] = product.split(" ");
        quantity = Number(quantity);
        this.menu[meal].products[name] = quantity;
      });
      const productsNumber = Object.keys(this.menu).length;
      if (productsNumber == 1) {
        return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`;
      } else {
        return `Great idea! Now with the ${meal} we have ${productsNumber} meals in the menu, other ideas?`;
      }
    } else {
      return `The ${meal} is already in the our menu, try something different.`;
    }
  }
  // Method #3
  showTheMenu() {
    let result = [];
    let productsNumber = Object.keys(this.menu).length;
    if (productsNumber == 0) {
      return "Our menu is not ready yet, please come later...";
    } else {
      for (const m in this.menu) {
        result.push(`${m} - $ ${this.menu[m].price}`);
      }
    }
    return result.join("\n");
  }

  // Method #4
  makeTheOrder(meal) {
    if (!this.menu[meal]) {
      return `There is not ${meal} yet in our menu, do you want to order something else?`;
    } else {
      const neededProducts = {};
      for (let product in this.menu[meal].products) {
        if (
          !this.stockProducts[product] ||
          this.stockProducts[product] < this.menu[meal].products[product]
        ) {
          return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
        } else {
          neededProducts[product] = this.menu[meal].products[product];
        }
      }
      for (let neededProduct in neededProducts) {
        this.stockProducts[neededProduct] -= neededProducts[neededProduct];
      }
      this.budgetMoney += this.menu[meal].price;
      return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`;
    }
  }
}

//  Input #1
// let kitchen = new Restaurant(1000);
// console.log(
//   kitchen.loadProducts([
//     "Banana 10 5",
//     "Banana 20 10",
//     "Strawberries 50 30",
//     "Yogurt 10 10",
//     "Yogurt 500 1500",
//     "Honey 5 50",
//   ])
// );

//  Output #1
// Successfully loaded 10 Banana
// Successfully loaded 20 Banana
// Successfully loaded 50 Strawberries
// Successfully loaded 10 Yogurt
// There was not enough money to load 500 Yogurt
// Successfully loaded 5 Honey

//  Input #2
// let kitchen = new Restaurant(1000);
// console.log(
//   kitchen.addToMenu(
//     "frozenYogurt",
//     ["Yogurt 1", "Honey 1", "Banana 1", "Strawberries 10"],
//     9.99
//   )
// );
// console.log(
//   kitchen.addToMenu(
//     "Pizza",
//     [
//       "Flour 0.5",
//       "Oil 0.2",
//       "Yeast 0.5",
//       "Salt 0.1",
//       "Sugar 0.1",
//       "Tomato sauce 0.5",
//       "Pepperoni 1",
//       "Cheese 1.5",
//     ],
//     15.55
//   )
// );

//  Output #2
// Great idea! Now with the frozenYogurt we have 1 meal in the menu, other ideas?
// Great idea! Now with the Pizza we have 2 meals in the menu, other ideas?

// Input #3
// let kitchen = new Restaurant(1000);
// console.log(kitchen.showTheMenu());

// Output #3
// frozenYogurt - $ 9.99
// Pizza - $ 15.55
