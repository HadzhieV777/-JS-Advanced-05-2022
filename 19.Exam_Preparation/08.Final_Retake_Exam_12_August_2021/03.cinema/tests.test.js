const { expect } = require("chai");
const { cinema } = require("./solution");

describe("cinema object", () => {
  describe("showMovies function", () => {
    it("returns if movies array is empty", () => {
      expect(cinema.showMovies([])).to.equal(
        "There are currently no movies to show."
      );
    });

    it("shows the available movies separated by ', '", () => {
      expect(cinema.showMovies(["King", "Kong", "Jocker"])).to.equal(
        "King, Kong, Jocker"
      );
    });
  });

  describe("ticketPrice function", () => {
    it("validates the projection type and throws", () => {
      expect(() => cinema.ticketPrice("")).to.throw("Invalid projection type.");
    });

    it("returns the correct price for valid type", () => {
      expect(cinema.ticketPrice("Premiere")).to.equal(12.0);
      expect(cinema.ticketPrice("Normal")).to.equal(7.5);
      expect(cinema.ticketPrice("Discount")).to.equal(5.5);
    });
  });

  describe("swapSeatsInHall function", () => {
    it("validates the input and returns", () => {
      expect(cinema.swapSeatsInHall()).to.equal(
        "Unsuccessful change of seats in the hall."
      );
      expect(cinema.swapSeatsInHall(3)).to.equal(
        "Unsuccessful change of seats in the hall."
      );
      expect(cinema.swapSeatsInHall(1.2, 3)).to.equal(
        "Unsuccessful change of seats in the hall."
      );
      expect(cinema.swapSeatsInHall(1, 3.2)).to.equal(
        "Unsuccessful change of seats in the hall."
      );
      expect(cinema.swapSeatsInHall(1, 3.2)).to.equal(
        "Unsuccessful change of seats in the hall."
      );
      expect(cinema.swapSeatsInHall("1", 3.2)).to.equal(
        "Unsuccessful change of seats in the hall."
      );
      expect(cinema.swapSeatsInHall(1, "3")).to.equal(
        "Unsuccessful change of seats in the hall."
      );
      expect(cinema.swapSeatsInHall(21, "3")).to.equal(
        "Unsuccessful change of seats in the hall."
      );
      expect(cinema.swapSeatsInHall(1, 22)).to.equal(
        "Unsuccessful change of seats in the hall."
      );
      expect(cinema.swapSeatsInHall(0, 2)).to.equal(
        "Unsuccessful change of seats in the hall."
      );
      expect(cinema.swapSeatsInHall(10, 0)).to.equal(
        "Unsuccessful change of seats in the hall."
      );
      expect(cinema.swapSeatsInHall(10, -1)).to.equal(
        "Unsuccessful change of seats in the hall."
      );
      expect(cinema.swapSeatsInHall(-4, 4)).to.equal(
        "Unsuccessful change of seats in the hall."
      );
    });

    it("changes the seats and returns when input is valid", () => {
      expect(cinema.swapSeatsInHall(4, 1)).to.equal(
        "Successful change of seats in the hall."
      );
      expect(cinema.swapSeatsInHall(4, 20)).to.equal(
        "Successful change of seats in the hall."
      );
      expect(cinema.swapSeatsInHall(20, 4)).to.equal(
        "Successful change of seats in the hall."
      );
    });
  });
});
