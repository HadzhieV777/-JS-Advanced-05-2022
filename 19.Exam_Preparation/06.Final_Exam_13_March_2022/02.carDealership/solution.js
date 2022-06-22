class CarDealership {
  constructor(name) {
    this.name = name;
    this.availableCars = [];
    this.soldCars = [];
    this.totalIncome = 0;
  }

  addCar(model, horsepower, price, mileage) {
    // Validate args
    if (model === "" || horsepower < 0 || price < 0 || mileage < 0) {
      throw new Error("Invalid input!");
    }

    // Add car if valid
    this.availableCars.push({
      model,
      horsepower,
      price,
      mileage,
    });

    // return
    return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`
  }

  sellCar(model, desiredMileage) {}

  currentCar() {}

  salesReport(criteria) {}
}

// Input
let dealership = new CarDealership("SoftAuto");
console.log(dealership.addCar("Toyota Corolla", 100, 3500, 190000));
console.log(dealership.addCar("Mercedes C63", 300, 29000, 187000));
console.log(dealership.addCar("", 120, 4900, 240000));

// Output

// New car added: Toyota Corolla - 100 HP - 190000.00 km - 3500.00$
// New car added: Mercedes C63 - 300 HP - 187000.00 km - 29000.00$
// Uncaught Error Error: Invalid input!
