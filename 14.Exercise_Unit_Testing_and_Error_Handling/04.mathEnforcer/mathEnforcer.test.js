const { assert } = require("chai");
const { mathEnforcer } = require("./mathEnforcer");

describe("Math Enforcer", () => {
  describe("addFive", () => {
    // Tests with incorrect input
    it("should return undefined with an string", () => {
      assert(mathEnforcer.addFive("test") === undefined);
    });

    it("should return undefined with an array", () => {
      assert(mathEnforcer.addFive([]) === undefined);
    });

    it("should return undefined with an object", () => {
      assert(mathEnforcer.addFive({}) === undefined);
    });

    // Tests with correct input
    it("should return positive integer number + 5", () => {
      assert(mathEnforcer.addFive(5) === 10);
    });

    it("Negative number + 5", () => {
      assert(mathEnforcer.addFive(-5) === 0);
    });

    it("Decimal number + 5", () => {
      assert(mathEnforcer.addFive(5.5) === 10.5);
    });
  });

  describe("subtractTen", () => {
    // Tests with incorrect input
    it("should return undefined with an string", () => {
      assert(mathEnforcer.subtractTen("test") === undefined);
    });

    it("should return undefined with an array", () => {
      assert(mathEnforcer.subtractTen([]) === undefined);
    });

    it("should return undefined with an object", () => {
      assert(mathEnforcer.subtractTen({}) === undefined);
    });

    // Tests with correct input.
    it("should subtract from positive integer number", () => {
      assert(mathEnforcer.subtractTen(20) === 10);
    });

    it("should subtract from negative number", () => {
      assert(mathEnforcer.subtractTen(-5) === -15);
    });

    it("should subtract from decimal number", () => {
      assert(mathEnforcer.subtractTen(15.5) === 5.5);
    });
  });

  describe("sum", () => {
    // Tests with incorrect input
    it("should return undefined when one value is string", () => {
      assert(mathEnforcer.sum("test", 5) === undefined);
    });

    it("should return undefined when one value is array", () => {
      assert(mathEnforcer.sum([], 5) === undefined);
    });

    it("should return undefined when one value is object", () => {
      assert(mathEnforcer.sum(10, {}) === undefined);
    });

    // Tests with correct input.
    it("should sum two positive integer numbers", () => {
      assert(mathEnforcer.sum(20, 20) === 40);
    });

    it("should return correct result with a positive and negative number", () => {
      assert(mathEnforcer.sum(-5, 20) === 15);
    });

    it("should sum two decimal numbers", () => {
      assert(mathEnforcer.sum(15.5, 15.5) === 31);
    });
  });
});
