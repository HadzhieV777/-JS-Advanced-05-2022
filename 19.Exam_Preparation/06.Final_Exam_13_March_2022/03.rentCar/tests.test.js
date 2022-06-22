const { expect } = require("chai");
const { rentCar } = require("./solution");

describe("rentCar object", () => {
  describe("searchCar function", () => {
    it("validates the input and throws", () => {
        expect(() => rentCar.searchCar({}, 'Audi')).to.throw("Invalid input!")
        expect(() => rentCar.searchCar([], {})).to.throw("Invalid input!")
    });

    it("check if car model in car shop and throw if not", () => {
        expect(() => rentCar.searchCar([], "Audi")).to.throw('There are no such models in the catalog!')
        expect(() => rentCar.searchCar(["BMW", "Mercedes za mnogo palki"], "Audi")).to.throw('There are no such models in the catalog!')
    })

    it("finds the desired car model and returns", () => {})
  });
  
});
