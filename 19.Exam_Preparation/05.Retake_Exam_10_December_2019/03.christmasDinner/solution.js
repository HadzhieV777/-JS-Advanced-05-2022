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

  shopping(product) {}

  recipes(recipe) {}

  inviteGuests(name, dish) {}

  showAttendance() {}
}
