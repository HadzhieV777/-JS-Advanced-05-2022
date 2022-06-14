const { expect } = require("chai");
const { isSymmetric } = require("./symmetry");

describe("Symmetry Checker", () => {
  it("works with symetric numeric array", () => {
    expect(isSymmetric([1, 2, 2, 1])).to.be.true;
  });

  it("returns false for non-symetric array", () => {
    expect(isSymmetric([1, 2, 2, 1, 3])).to.be.false;
  });

  it("returns false for non-array", () => {
    expect(isSymmetric(5)).to.be.false;
  });

  it("works with symetric non-numeric array", () => {
    expect(isSymmetric(["a", "b", "b", "a"])).to.be.true;
  });

  it("returns false for string param", () => {
    expect(isSymmetric("abba")).to.be.false;
  });

  it("returns false for type mismatched element", () => {
    expect(isSymmetric([1, 2, 2, "1"])).to.be.false;
  });

  it("didn't work with numeric but non-symetric array", () => {
    expect(isSymmetric([1, 2, 2])).to.be.false;
  });
});
