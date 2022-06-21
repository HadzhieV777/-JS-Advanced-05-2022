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

  recipes({ recipeName, productsList }) {
    if (productsList.every((x) => this.products.includes(x))) {
      this.dishes.push({ recipeName, productsList });
      return `${recipeName} has been successfully cooked!`;
    }
    throw new Error("We do not have this product");
  }

  inviteGuests(name, dish) {
    let dishAvailable = false;

    for (let d of this.dishes) {
      if (d.recipeName === dish) {
        dishAvailable = true;
      }
    }

    if (!dishAvailable) {
      throw new Error("We do not have this dish");
    }

    if (this.guests.hasOwnProperty(name)) {
      throw new Error("This guest has already been invited");
    }

    this.guests[name] = dish;
    return `You have successfully invited ${name}!`;
  }

  showAttendance() {
    let guestList = [];
    for (let guest in this.guests) {
      let dish = this.guests[guest];
      let { productsList } = this.dishes.find((d) => d.recipeName === dish);
      guestList.push(`${guest} will eat ${dish}, which consists of ${productsList.join(', ')}`)
    }
    return guestList.join('\n');
  }
}

let dinner = new ChristmasDinner(300);
console.log(dinner.shopping(["Fruits", 1]));
console.log(dinner.shopping(["Honey", 1]));

console.log(
  dinner.recipes({
    recipeName: "Oshav",
    productsList: ["Fruits", "Honey"],
  })
);
