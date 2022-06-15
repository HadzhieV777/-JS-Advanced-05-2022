const { expect } = require("chai");
const { rgbToHexColor } = require("./rgbToHex");

describe("RGB to Hex", () => {
  it("converts black", () => {
    expect(rgbToHexColor(0, 0, 0)).to.equal("#000000");
  });

  it("converts white", () => {
    expect(rgbToHexColor(255, 255, 255)).to.equal("#FFFFFF");
  });

  it("converts some random color", () => {
    expect(rgbToHexColor(51, 255, 168)).to.equal("#33FFA8");
  });

  it("fails if receive less than three params", () => {
    expect(rgbToHexColor(51, 255)).to.equal(undefined);
  });

  it("returns undefined if passed num lower than range", () => {
    expect(rgbToHexColor(-51, 255, 168)).to.equal(undefined);
  });

  it("returns undefined if passed num bigger than range", () => {
    expect(rgbToHexColor(51, 255, 395)).to.equal(undefined);
  });

  it("returns right value of COD GRAY", () => {
    expect(rgbToHexColor(15, 15, 15)).to.equal('#0F0F0F');
  });
});
