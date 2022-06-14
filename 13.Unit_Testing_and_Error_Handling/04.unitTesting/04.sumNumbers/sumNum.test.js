const { expect } = require("chai");
const { sum } = require("./sumNum");

describe("Sum Checker", () => {
  it("takes an array and returns the sum", () => {
    expect(sum([1, 2, 2, 1])).to.equal(6);
  });
  it("returns sum if receive string", () => {
    expect(sum('11231')).to.equal(8);
  });
});
