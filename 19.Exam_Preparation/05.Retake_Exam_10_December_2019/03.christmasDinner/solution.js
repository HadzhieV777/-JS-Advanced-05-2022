class ChristmasDinner {
  constructor(budget) {
    this.budget = budget;
    this.dishes = [];
    this.products = [];
    this.guests = {};
  }

  set budget(budget) {
    if (budget < 0) {
      throw new Error("The budget cannot be a negative number");
    }
    this._budget = budget;
  }

  get budget() {
    return this._budget;
  }

  shopping(product) {
    const type = product[0];
    const price = product[1];

    if (price > this.budget) {
      throw new Error("Not enough money to buy this product");
    }

    this.products.push(type);
    this.budget -= price;
    return `You have successfully bought ${type}!`;
  }

  recipes(recipe) {
    let allProductsAvailable = true;

    for (let product of recipe.productsList) {
      if (this.products.indexOf(product) === -1) {
        allProductsAvailable = false;
      }
    }

    if (!allProductsAvailable) {
      throw new Error("We do not have this product");
    }

    this.dishes.push(recipe);
    return `${recipe.recipeName} has been successfully cooked!`;
  }

  inviteGuests(name, dish) {}

  showAttendance() {}
}

let dinner = new ChristmasDinner(300);
console.log(dinner.shopping(['Fruits', 1]))
console.log(dinner.shopping(['Honey', 1]))

console.log(dinner.recipes({
    recipeName: 'Oshav',
    productsList: ['Fruits', 'Honey']
}));
