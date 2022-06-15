const { expect } = require("chai");
const { isOddOrEven } = require("./evenOrOdd");

describe("Even or Odd", () => {
  it("receive a string", () => {
    expect(typeof isOddOrEven("asdds")).to.equals("string");
  });

  it("returns undefined if passed value not string", () => {
    expect(isOddOrEven([1, 2])).to.equals(undefined);
  });

  it("returns even if passed string with even chars", () => {
    expect(isOddOrEven("even")).to.equals("even");
  });

  it("returns odd if passed string with odd chars", () => {
    expect(isOddOrEven("odd")).to.equals("odd");
  });

  it("checks only the first argument", () => {
    expect(isOddOrEven("odd", "odd", "even")).to.equals("odd");
  });
});
