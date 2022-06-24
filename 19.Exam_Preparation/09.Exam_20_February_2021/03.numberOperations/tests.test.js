const { expect } = require("chai");
const { numberOperations } = require("./solution");

describe("numberOperations object", () => {
  describe("powNumber function", () => {
    it("returns the power of the given number", () => {
      expect(numberOperations.powNumber(5)).to.equal(25);
    });
  });

  describe("numberChecker function", () => {
    it("parses the input to number, and validates it", () => {
      expect(() => numberOperations.numberChecker("invalid")).to.throw(
        "The input is not a number!"
      );
      expect(() => numberOperations.numberChecker({})).to.throw(
        "The input is not a number!"
      );
      expect(() => numberOperations.numberChecker()).to.throw(
        "The input is not a number!"
      );
    });

    it("checks if the number < 100 and returns", () => {
      expect(numberOperations.numberChecker("20")).to.equal(
        "The number is lower than 100!"
      );
      expect(numberOperations.numberChecker(20)).to.equal(
        "The number is lower than 100!"
      );
      expect(numberOperations.numberChecker(100)).to.equal(
        "The number is greater or equal to 100!"
      );
      expect(numberOperations.numberChecker(101)).to.equal(
        "The number is greater or equal to 100!"
      );
    });
  });

  describe("sumArrays function", () => {
    it("returns new array which represents the sum of the two arrays by indexes", () => {
      expect(numberOperations.sumArrays([1, 2, 3], [1, 2, 3])).to.deep.equal([
        2, 4, 6,
      ]);
      expect(numberOperations.sumArrays([1, 2, 3], [1, 2, 3, 3])).to.deep.equal(
        [2, 4, 6, 3]
      );
      expect(numberOperations.sumArrays([1, 2, 3, 3], [1, 2, 3])).to.deep.equal(
        [2, 4, 6, 3]
      );
    });
  });
});
