const { expect } = require("chai");
const { testNumbers } = require("./testNumbers");

describe("testNumbers class", () => {
  describe("sumNumbers function", () => {
    it("accepts two postive number parameters and returns their sum rounded", () => {
      expect(testNumbers.sumNumbers(5, 5)).to.equal("10.00");
    });

    it("returns undefined if some of the parameters is not a number", () => {
      expect(testNumbers.sumNumbers(5, "5")).to.equal(undefined);
      expect(testNumbers.sumNumbers("5", 5)).to.equal(undefined);
    });

    it("accepts negative number parameters and return their sum rounded", () => {
      expect(testNumbers.sumNumbers(-10, 5)).to.equal("-5.00");
    });
  });

  describe("numberChecker function", () => {
    it("parses the input to a number and validates it", () => {
      expect(testNumbers.numberChecker("2")).to.equal("The number is even!");
    });

    it("throws an error if the input is NaN", () => {
      expect(function () {
        testNumbers.numberChecker("invalid input");
      }).to.throw("The input is not a number!");
    });

    it("takes an odd number and returns appropriate output", () => {
      expect(testNumbers.numberChecker(1)).to.equal("The number is odd!");
    });

    it("takes an even number and returns appropriate output", () => {
      expect(testNumbers.numberChecker(4)).to.equal("The number is even!");
    });
  });

  describe("averageSumArray function", () => {
    it("receives an array and return the total sum from its elements", () => {
      expect(testNumbers.averageSumArray([7, 7, 7])).to.equal(7);
    });
  });
});
