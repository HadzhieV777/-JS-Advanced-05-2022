const { expect } = require("chai");
const { bookSelection } = require("./solution");

describe("bookSelection function", () => {
  describe("isGenreSuitable function", () => {
    it('returns "not suitable" if genre: Thriller and age <= 12', () => {
      expect(bookSelection.isGenreSuitable("Thriller", 11)).to.equal(
        "Books with Thriller genre are not suitable for kids at 11 age"
      );
      expect(bookSelection.isGenreSuitable("Thriller", 12)).to.equal(
        "Books with Thriller genre are not suitable for kids at 12 age"
      );
    });

    it('returns "not suitable" if genre: Horror and age <= 12', () => {
      expect(bookSelection.isGenreSuitable("Horror", 9)).to.equal(
        "Books with Horror genre are not suitable for kids at 9 age"
      );
      expect(bookSelection.isGenreSuitable("Horror", 12)).to.equal(
        "Books with Horror genre are not suitable for kids at 12 age"
      );
    });

    it('returns "suitable" age > 12', () => {
      expect(bookSelection.isGenreSuitable("Horror", 22)).to.equal(
        "Those books are suitable"
      );
      expect(bookSelection.isGenreSuitable("Thriller", 15)).to.equal(
        "Those books are suitable"
      );
      expect(bookSelection.isGenreSuitable("Psycology", 5)).to.equal(
        "Those books are suitable"
      );
      expect(bookSelection.isGenreSuitable("Fantasy", 8)).to.equal(
        "Those books are suitable"
      );
    });
  });

  describe("isItAffordable function", () => {
    it("successfully buys the book", () => {
      expect(bookSelection.isItAffordable(20, 100)).to.equal(
        "Book bought. You have 80$ left"
      );
      expect(bookSelection.isItAffordable(20, 20)).to.equal(
        "Book bought. You have 0$ left"
      );
    });

    it("validates input and throws an error", () => {
      expect(() => bookSelection.isItAffordable("2", 100)).to.throw();
      expect(() => bookSelection.isItAffordable(22, "100")).to.throw();
      expect(() => bookSelection.isItAffordable("22", "100")).to.throw();
    });

    it("returns not enough money if budget - price < 0", () => {
      expect(bookSelection.isItAffordable(12, 10)).to.equal(
        "You don't have enough money"
      );
    });
  });

  describe("suitableTitles function", () => {
    it("returns the wanted book", () => {
      expect(
        bookSelection.suitableTitles(
          [
            {
              title: "Test",
              genre: "Test Genre",
            },
          ],
          "Test Genre"
        )
      ).to.deep.equal(["Test"]);
    });

    it("returns an array with 2 wanted books", () => {
      expect(
        bookSelection.suitableTitles(
          [
            {
              title: "Test",
              genre: "Test Genre",
            },
            {
              title: "Another Test",
              genre: "Another Test Genre",
            },
            {
              title: "Third Test",
              genre: "Test Genre",
            },
          ],
          "Test Genre"
        )
      ).to.deep.equal(["Test", "Third Test"]);
    });

    it("returns an empty array if no match", () => {
      expect(
        bookSelection.suitableTitles(
          [
            {
              title: "Test",
              genre: "Test Genre",
            },
          ],
          "Biology"
        )
      ).to.deep.equal([]);
    });

    it("validates input and throws an error", () => {
      expect(() =>
        bookSelection.suitableTitles("not an array", "wantedGenre")
      ).to.throw();
      expect(() => bookSelection.suitableTitles([], [])).to.throw();
    });
  });
});
