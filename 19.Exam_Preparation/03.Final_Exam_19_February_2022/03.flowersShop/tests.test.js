const { expect } = require("chai");
const { flowerShop } = require("./solution");

describe("flowerShop function", () => {
  describe("calcPriceOfFlowers function", () => {
    it("returns the multiplies price and quantity with valid input", () => {
      expect(flowerShop.calcPriceOfFlowers("Rose", 5, 2)).to.equal(
        "You need $10.00 to buy Rose!"
      );
    });

    it("validates the input data and throw an error", () => {
      expect(() => flowerShop.calcPriceOfFlowers([], 5, 2)).to.throw();
      expect(() => flowerShop.calcPriceOfFlowers("Tulip", 5.2, 2)).to.throw();
      expect(() => flowerShop.calcPriceOfFlowers("Tulip", 5, 2.2)).to.throw();
      expect(() => flowerShop.calcPriceOfFlowers("Tulip", "5", 2)).to.throw();
      expect(() => flowerShop.calcPriceOfFlowers("Tulip", 5, "2")).to.throw();
      expect(() => flowerShop.calcPriceOfFlowers(5, "2")).to.throw();
    });
  });

  describe("checkFlowersAvailable function", () => {
    it("returns the searched flower when flower in the array", () => {
      expect(
        flowerShop.checkFlowersAvailable("Lily", ["Rose", "Lily", "Orchid"])
      ).to.equal("The Lily are available!");
    });

    it("cannot find the searched flower when flower not in the array", () => {
      expect(
        flowerShop.checkFlowersAvailable("Sun Flower", [
          "Rose",
          "Lily",
          "Orchid",
        ])
      ).to.equal("The Sun Flower are sold! You need to purchase more!");
    });
  });

  describe("sellFlowers function", () => {
    it("validates the input and throws and error", () => {
      expect(() => flowerShop.sellFlowers({}, 22)).to.throw();
      expect(() => flowerShop.sellFlowers([], "22")).to.throw();
      expect(() =>
        flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], "22")
      ).to.throw();
      expect(() => flowerShop.sellFlowers([], 22)).to.throw();
    });

    it("removes the flower from the pointed index and returns", () => {
      expect(flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 1)).to.equal(
        "Rose / Orchid"
      );
    });
  });
});
