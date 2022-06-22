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
    return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(
      2
    )} km - ${price.toFixed(2)}$`;
  }

  sellCar(model, desiredMileage) {
    // find the wanted car
    const wantedCarIndex = this.availableCars.findIndex(
      (c) => c.model === model
    );
    // throw if can't find it
    if (wantedCarIndex == -1) {
      throw new Error(`${model} was not found!`);
    }

    const wantedCar = this.availableCars[wantedCarIndex];
    let soldPrice = wantedCar.price;
    const carMileage = wantedCar.mileage;

    // validate the mileage
    if (carMileage > desiredMileage && carMileage - desiredMileage <= 40000) {
      soldPrice *= 0.95;
    } else if (carMileage - desiredMileage > 40000) {
      soldPrice *= 0.9;
    }

    // sell
    this.availableCars.splice(wantedCarIndex, 1);
    this.soldCars.push({
      model: wantedCar.model,
      horsepower: wantedCar.horsepower,
      soldPrice,
    });
    this.totalIncome += soldPrice;
    return `${wantedCar.model} was sold for ${soldPrice.toFixed(2)}$`;
  }

  currentCar() {
    if (this.availableCars.length === 0) {
      return "There are no available cars";
    }

    let cars = this.availableCars.map(
      (c) =>
        `---${c.model} - ${c.horsepower} HP - ${c.mileage.toFixed(
          2
        )} km - ${c.price.toFixed(2)}$`
    );
    return `-Available cars:\n${cars.join("\n")}`;
  }

  salesReport(criteria) {
    if (criteria !== "horsepower" && criteria !== "model") {
      throw new Error("Invalid criteria!");
    }
    let cars;
    if (criteria === "horsepower") {
      cars = this.soldCars.sort((a, b) => b.horsepower - a.horsepower);
    } else if (criteria === "model") {
      cars = this.soldCars.sort((a, b) => a.model.localeCompare(b.model));
    }

    cars = cars.map(
      (c) => `---${c.model} - ${c.horsepower} HP - ${c.soldPrice.toFixed(2)}$`
    );
    if (cars.length > 0) {
      cars.unshift("");
    }
    return `-${this.name} has a total income of ${this.totalIncome.toFixed(
      2
    )}$\n-${this.soldCars.length} cars sold:${cars.join("\n")}`;
  }
}

// Input
let dealership = new CarDealership("SoftAuto");
dealership.addCar("Toyota Corolla", 100, 3500, 190000);
dealership.addCar("Mercedes C63", 300, 29000, 187000);
dealership.addCar("Audi A3", 120, 4900, 240000);
dealership.sellCar("Toyota Corolla", 230000);
dealership.sellCar("Mercedes C63", 110000);
console.log(dealership.salesReport("horsepower"));

// Output

// -SoftAuto has a total income of 29600.00$
// -2 cars sold:
// ---Mercedes C63 - 300 HP - 26100.00$
// ---Toyota Corolla - 100 HP - 3500.00$
