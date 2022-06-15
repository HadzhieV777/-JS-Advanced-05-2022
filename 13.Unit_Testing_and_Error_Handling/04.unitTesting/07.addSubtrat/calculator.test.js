const { expect } = require("chai");
const { createCalculator } = require("./calculator");

describe("Add and Subtrat", () => {
  it("returns an object", () => {
    expect(typeof createCalculator()).to.equals("object");
  });

  it("has add method", () => {
    expect(typeof createCalculator().add).to.equals("function");
  });

  it("has subtract method", () => {
    expect(typeof createCalculator().subtract).to.equals("function");
  });

  it("has get method", () => {
    expect(typeof createCalculator().get).to.equals("function");
  });

  it("internal sum cannot be modified", () => {
    expect(createCalculator().value).to.equals(undefined);
  });

  it("add method adds parsable input", () => {
    const calc = createCalculator();
    calc.add("2");
    expect(calc.get()).to.equals(2);
  });

  it("subtract method subtracts parsable input", () => {
    const calc = createCalculator();
    calc.add("2");
    calc.subtract("1");
    expect(calc.get()).to.equals(1);
  });
});
