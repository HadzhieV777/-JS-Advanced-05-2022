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

  currentCar() {}

  salesReport(criteria) {}
}

// Input
let dealership = new CarDealership("SoftAuto");
dealership.addCar("Toyota Corolla", 100, 3500, 190000);
dealership.addCar("Mercedes C63", 300, 29000, 187000);
dealership.addCar("Audi A3", 120, 4900, 240000);
console.log(dealership.sellCar("Toyota Corolla", 230000));
console.log(dealership.sellCar("Mercedes C63", 110000));

// Output

// Toyota Corolla was sold for 3500.00$
// Mercedes C63 was sold for 26100.00$
