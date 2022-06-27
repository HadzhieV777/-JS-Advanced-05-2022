const { expect } = require("chai");
const { carService } = require("./solution");

describe("carService object", () => {
  describe("isItExpensive function", () => {
    it("checks the issue value and returns", () => {
      expect(carService.isItExpensive("Engine")).to.equal(
        "The issue with the car is more severe and it will cost more money"
      );
      expect(carService.isItExpensive("Transmission")).to.equal(
        "The issue with the car is more severe and it will cost more money"
      );
      expect(carService.isItExpensive("Brakes")).to.equal(
        "The overall price will be a bit cheaper"
      );
      expect(carService.isItExpensive("Tires")).to.equal(
        "The overall price will be a bit cheaper"
      );
      expect(carService.isItExpensive("Transmission ")).to.equal(
        "The overall price will be a bit cheaper"
      );
      expect(carService.isItExpensive("Engine ")).to.equal(
        "The overall price will be a bit cheaper"
      );
    });
  });

  describe("discount function", () => {
    it("validates the input data and throws", () => {
      expect(() => carService.discount()).to.throw("Invalid input");
      expect(() => carService.discount(2)).to.throw("Invalid input");
      expect(() => carService.discount("2", 10)).to.throw("Invalid input");
      expect(() => carService.discount(10, "2")).to.throw("Invalid input");
      expect(() => carService.discount("10", "2")).to.throw("Invalid input");
    });

    it("checks the number of parts and returns if no discount if parts <=2", () => {
      expect(carService.discount(0, 100)).to.equal(
        "You cannot apply a discount"
      );
      expect(carService.discount(1, 100)).to.equal(
        "You cannot apply a discount"
      );
      expect(carService.discount(2, 100)).to.equal(
        "You cannot apply a discount"
      );
    });

    it("gives a 15% discount if 2 < parts <= 7", () => {
      expect(carService.discount(3, 10)).to.equal(
        "Discount applied! You saved 1.5$"
      );
      expect(carService.discount(5, 10)).to.equal(
        "Discount applied! You saved 1.5$"
      );
      expect(carService.discount(7, 10)).to.equal(
        "Discount applied! You saved 1.5$"
      );
    });

    it("gives a 30% discount if parts > 7", () => {
      expect(carService.discount(8, 10)).to.equal(
        "Discount applied! You saved 3$"
      );
      expect(carService.discount(10, 10)).to.equal(
        "Discount applied! You saved 3$"
      );
    });
  });

  describe("partsToBuy function", () => {
    it("validates the input data and throws", () => {
      expect(() => carService.partsToBuy()).to.throw("Invalid input");
      expect(() => carService.partsToBuy([])).to.throw("Invalid input");
      expect(() => carService.partsToBuy([], {})).to.throw("Invalid input");
      expect(() => carService.partsToBuy({}, [])).to.throw("Invalid input");
    });

    it("returns 0 if partsCatalog is empty", () => {
      expect(
        carService.partsToBuy([], ["blowoff valve", "injectors"])
      ).to.equal(0);
    });

    it("returns the total price for all neededParts that are in partsCatalog", () => {
      expect(
        carService.partsToBuy(
          [
            { part: "blowoff valve", price: 145 },
            { part: "coil springs", price: 230 },
          ],
          ["blowoff valve", "injectors"]
        )
      ).to.equal(145);
      expect(
        carService.partsToBuy(
          [
            { part: "blowoff valve", price: 145 },
            { part: "coil springs", price: 230 },
          ],
          ["blowoff valve", "coil springs"]
        )
      ).to.equal(375);
      expect(
        carService.partsToBuy(
          [
            { part: "blowoff valve", price: 145 },
            { part: "coil springs", price: 230 },
            { part: "injector", price: 230 },
          ],
          ["blowoff valve", "coil springs"]
        )
      ).to.equal(375);
    });
  });
});
