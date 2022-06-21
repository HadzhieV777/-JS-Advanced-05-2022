const { expect } = require("chai");
const { ChristmasMovies } = require("./solution");

describe("ChristmasMovies class", () => {
  let christmas;
  beforeEach(() => {
    christmas = new ChristmasMovies();
  });

  describe("instantiation with no params", () => {
    it("instantiates new obj with empty params", () => {
      expect(christmas.movieCollection).o.be.deep.equal([]);
      expect(christmas.movieCollection.length).to.equal(0);
      expect(christmas.watched).to.be.deep.equal({});
      expect(Object.keys(christmas.watched).length).to.equal(0);
      expect(christmas.actors).to.be.deep.equal([]);
      expect(christmas.actors.length).to.equal(0);
    });
  });

  describe("buyMovie method", () => {
    it("adds a movie that is not presented in the collection", () => {
      expect(
        christmas.buyMovie("Last Christmas", [
          "Madison Ingoldsby",
          "Emma Thompson",
          "Boris Isakovic",
          "Madison Ingoldsby",
        ])
      ).to.be.equal(
        "You just got Last Christmas to your collection in which Madison Ingoldsby, Emma Thompson, Boris Isakovic are taking part!"
      );
    });

    it("throws an error if movie is already in the collection", () => {
      christmas.buyMovie("Last Christmas", [
        "Madison Ingoldsby",
        "Emma Thompson",
        "Boris Isakovic",
        "Madison Ingoldsby",
      ]);
      expect(() =>
        christmas.buyMovie("Last Christmas", [
          "Madison Ingoldsby",
          "Emma Thompson",
          "Boris Isakovic",
          "Madison Ingoldsby",
        ])
      ).to.throw("You already own Last Christmas in your collection!");
    });
  });

  describe("discardMovie method", () => {
    it("throws an error if a movie is not in the collection", () => {
      expect(() => {
        christmas.discardMovie("The Grinch");
      }).to.throw("The Grinch is not at your collection!");
    });

    it("throws an error if a movie is in the collection but is not watched", () => {
      christmas.buyMovie("Last Christmas", [
        "Madison Ingoldsby",
        "Emma Thompson",
        "Boris Isakovic",
        "Madison Ingoldsby",
      ]);
      expect(() => christmas.discardMovie("Last Christmas")).to.throw(
        "Last Christmas is not watched!"
      );
    });

    it("discards a movie if the movie is in the collection and watched", () => {
      christmas.buyMovie("Last Christmas", [
        "Madison Ingoldsby",
        "Emma Thompson",
        "Boris Isakovic",
        "Madison Ingoldsby",
      ]);
      christmas.watchMovie("Last Christmas");
      expect(christmas.discardMovie("Last Christmas")).to.equal(
        "You just threw away Last Christmas!"
      );
    });
  });

  describe("watchMovie method", () => {
    it("throws an error if movie is not presented in the collection", () => {
      expect(() => {
        christmas.watchMovie("Home Alone");
      }).to.throw("No such movie in your collection!");
    });

    it("watches the movie if movie is presented in the collection", () => {
      christmas.buyMovie("Home Alone", [
        "Macaulay Culkin",
        "Joe Pesci",
        "Daniel Stern",
      ]);
      christmas.watchMovie("Home Alone");
      expect(christmas.watched["Home Alone"]).to.equal(1);
    });

    it("adds one more watch if a movie is in collection and already wathced", () => {
      christmas.buyMovie("Home Alone", [
        "Macaulay Culkin",
        "Joe Pesci",
        "Daniel Stern",
      ]);
      christmas.watchMovie("Home Alone");
      christmas.watchMovie("Home Alone");
      christmas.watchMovie("Home Alone");
      expect(christmas.watched["Home Alone"]).to.equal(3);
    });
  });

  describe("favouriteMovie", () => {
    it("throws an error if the collection is empty and favouriteMovie is invoked", () => {
      expect(() => {
        christmas.favouriteMovie();
      }).to.throw("You have not watched a movie yet this year!");
    });
    it("throws an error if the collection is empty and mostStarredActor is invoked", () => {
      expect(() => {
        christmas.mostStarredActor();
      }).to.throw("You have not watched a movie yet this year!");
    });

    it("returns information about the most wathced movie", () => {
      christmas.watched.Thor = 1;
      christmas.watched.MandrasaneIzmesto = 2;
      expect(christmas.favouriteMovie()).to.equal(
        "Your favourite movie is MandrasaneIzmesto and you have watched it 2 times!"
      );
    });

    it("returns the most starred actor info if the collection is not empty", () => {
      christmas.buyMovie("Home Alone", [
        "Macaulay Culkin",
        "Joe Pesci",
        "Daniel Stern",
      ]);
      christmas.buyMovie("Home Alone 2", ["Macaulay Culkin"]);
      christmas.buyMovie("The Grinch", [
        "Benedict Cumberbatch",
        "Rashida Jones",
      ]);
      christmas.buyMovie("Last Christmas", [
        "Madison Ingoldsby",
        "Emma Thompson",
        "Boris Isakovic",
        "Madison Ingoldsby",
      ]);
      expect(christmas.mostStarredActor()).to.equal(
        "The most starred actor is Macaulay Culkin and starred in 2 movies!"
      );
    });
  });
});
