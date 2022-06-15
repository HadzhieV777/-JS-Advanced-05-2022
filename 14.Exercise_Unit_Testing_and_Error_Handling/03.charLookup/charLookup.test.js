const { expect } = require("chai");
const { lookupChar } = require("./charLookup");

describe("Character Lookup", () => {
  it("returns undefined if first argument not string", () => {
    expect(lookupChar([1, 2], 2)).to.equals(undefined);
  });

  it("returns undefined if second argument not number", () => {
    expect(lookupChar("random", "2")).to.equals(undefined);
  });

  it("returns undefined if second argument is not integer", () => {
    expect(lookupChar("random", 2.1)).to.equals(undefined);
  });

  it("returns error message if passed string less than 0", () => {
    expect(lookupChar("random", -2)).to.equals("Incorrect index");
  });

  it("returns error message if passed string bigger than string length", () => {
    expect(lookupChar("random", 10)).to.equals("Incorrect index");
  });

  it("returns the char at the specified index", () => {
    expect(lookupChar("random", 1)).to.equals("a");
  });
});
