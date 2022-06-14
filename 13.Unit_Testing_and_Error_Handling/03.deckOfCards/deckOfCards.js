function deck(cards) {
  let result = [];

  for (let cardStr of cards) {
    const face = cardStr.slice(0, -1);
    const suit = cardStr.slice(-1);

    try {
      const card = createCard(face, suit);
      result.push(card);
    } catch (err) {
      result = ["Invalid card: " + cardStr];
    }
  }

  //   join will implicitly trigger the obj.toString()
  console.log(result.join(" "));

  //   "Implicitly" means that the JS engine does it.
  //"Explicitly" means that you must do it.

  function createCard(face, suit) {
    const validFaces = [
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K",
      "A",
    ];

    const suits = {
      S: "\u2660",
      H: "\u2665",
      D: "\u2666",
      C: "\u2663",
    };

    if (!validFaces.includes(face)) {
      throw new Error("Invalid face: " + face);
    }
    if (suits[suit] == undefined) {
      throw new Error("Invalid suit: " + face);
    }

    const result = {
      face,
      suit: suits[suit],
      toString() {
        return this.face + this.suit;
      },
    };
    return result;
  }
}

deck(["AS", "10D", "KH", "2C"]); // A♠ 10♦ K♥ 2♣
deck(["5S", "3D", "QD", "1C"]); // Invalid card: 1C
