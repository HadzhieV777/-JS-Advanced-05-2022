const { expect } = require("chai");
const { rentCar } = require("./solution");

describe("rentCar object", () => {
  describe("searchCar function", () => {
    it("validates the input and throws", () => {
      expect(() => rentCar.searchCar()).to.throw("Invalid input!");
      expect(() => rentCar.searchCar({}, "Audi")).to.throw("Invalid input!");
      expect(() => rentCar.searchCar([])).to.throw("Invalid input!");
      expect(() => rentCar.searchCar([], {})).to.throw("Invalid input!");
    });

    it("check if car model in car shop and throw if not", () => {
      expect(() => rentCar.searchCar([], "Audi")).to.throw(
        "There are no such models in the catalog!"
      );
      expect(() =>
        rentCar.searchCar(["BMW", "Mercedes za mnogo palki"], "Audi")
      ).to.throw("There are no such models in the catalog!");
    });

    it("finds the desired car model and returns", () => {
      expect(rentCar.searchCar(["Mercedes", "Audi"], "Audi")).to.equal(
        "There is 1 car of model Audi in the catalog!"
      );
      expect(
        rentCar.searchCar(
          ["Mercedes", "Audi", "Audi", "Audi", "Audi", "Audi"],
          "Audi"
        )
      ).to.equal("There is 5 car of model Audi in the catalog!");
    });
  });

  describe("calculatePriceOfCar function", () => {
    describe("validates the input and throws", () => {
      expect(() => rentCar.calculatePriceOfCar()).to.throw("Invalid input!");
      expect(() => rentCar.calculatePriceOfCar("car model")).to.throw(
        "Invalid input!"
      );
      expect(() => rentCar.calculatePriceOfCar(6.7, "car model")).to.throw(
        "Invalid input!"
      );
      expect(() => rentCar.calculatePriceOfCar("car model", 6.7)).to.throw(
        "Invalid input!"
      );
    });

    describe("throws if the searched model not found", () => {
      expect(() => rentCar.calculatePriceOfCar("Batmobil", 1)).to.throw(
        "No such model in the catalog!"
      );
    });

    describe("finds the car model and calcualates the price of the car", () => {
      expect(rentCar.calculatePriceOfCar("BMW", 0)).to.equal(
        "You choose BMW and it will cost $0!"
      );
      expect(rentCar.calculatePriceOfCar("BMW", 5)).to.eq(
        "You choose BMW and it will cost $225!"
      );
      expect(rentCar.calculatePriceOfCar("BMW", 1)).to.eq(
        "You choose BMW and it will cost $45!"
      );
    });
  });

  describe("checkBudget function", () => {
    it("validates the input and throws", () => {
      expect(() => rentCar.checkBudget()).to.throw("Invalid input!");
      expect(() => rentCar.checkBudget("string", 1, 2)).to.throw(
        "Invalid input!"
      );
      expect(() => rentCar.checkBudget(1, "string", 2)).to.throw(
        "Invalid input!"
      );
      expect(() => rentCar.checkBudget(1, 2, "string")).to.throw(
        "Invalid input!"
      );
    });

    it("takes the valid input and returns", () => {
      expect(rentCar.checkBudget(1, 1, 1)).to.equal("You rent a car!");
      expect(rentCar.checkBudget(1, 1, 0)).to.equal("You need a bigger budget!");
    });
  });
});
