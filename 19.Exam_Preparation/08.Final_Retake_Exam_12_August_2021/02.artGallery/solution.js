class ArtGallery {
  constructor(creator) {
    this.creator = creator;
    this.possibleArticles = { picture: 200, photo: 50, item: 250 };
    this.listOfArticles = [];
    this.guests = [];
  }

  addArticle(articleModel, articleName, quantity) {
    if (
      !this.possibleArticles.hasOwnProperty(articleModel.toLocaleLowerCase())
    ) {
      throw new Error("This article model is not included in this gallery!");
    }

    let currArticle = this.listOfArticles.find(
      (a) => a.articleName == articleName
    );

    if (currArticle != undefined) {
      if (currArticle.articleModel == articleModel) {
        currArticle.quantity += quantity;
      }
    } else {
      this.listOfArticles.push({
        articleModel: articleModel.toLocaleLowerCase(),
        articleName,
        quantity,
      });
    }

    return `Successfully added article ${articleName} with a new quantity- ${quantity}.`;
  }

  inviteGuest(guestName, personality) {
    let guest = this.guests.find((g) => g.guestName == guestName);
    if (guest !== undefined) {
      throw new Error(`${guestName} has already been invited.`);
    }

    const personalityChecker = { Vip: 500, Middle: 250 };
    let points = 50;

    if (personalityChecker[personality] != undefined) {
      points = personalityChecker[personality];
    }

    this.guests.push({
      guestName,
      points,
      purchaseArticle: 0,
    });
    return `You have successfully invited ${guestName}!`;
  }

  buyArticle(articleModel, articleName, guestName) {
    let article = this.listOfArticles.find(
      (a) => a.articleName == articleName
    );
    let guest = this.guests.find((g) => g.guestName == guestName);

    if (article.articleModel != articleModel || article == undefined) {
      throw new Error("This article is not found.");
    }
    if (article.quantity == 0) {
      return `The ${articleName} is not available.`;
    }

    if (guest == undefined) {
      return "This guest is not invited.";
    }

    if (guest.points < this.possibleArticles[articleModel]) {
      return "You need to more points to purchase the article.";
    }

    guest.points -= this.possibleArticles[articleModel];
    article.quantity--;
    guest.purchaseArticle++;
    return `${guest.guestName} successfully purchased the article worth ${this.possibleArticles[articleModel]} points.`;
  }

  showGalleryInfo(criteria) {
    let firstRow;
    let secondRow;

    if (criteria == "article") {
      firstRow = "Articles information:";
      secondRow = this.listOfArticles
        .map((a) => `${a.articleModel} - ${a.articleName} - ${a.quantity}`)
        .join("\n");
    } else {
      firstRow = "Guests information:";
      secondRow = this.guests
        .map((g) => `${g.guestName} - ${g.purchaseArticle}`)
        .join("\n");
    }

    return [firstRow, secondRow].join("\n");
  }
}

// Input
const artGallery = new ArtGallery("Curtis Mayfield");
artGallery.addArticle("picture", "Mona Liza", 3);
artGallery.addArticle("Item", "Ancient vase", 2);
artGallery.addArticle("picture", "Mona Liza", 1);
artGallery.inviteGuest("John", "Vip");
artGallery.inviteGuest("Peter", "Middle");
artGallery.buyArticle("picture", "Mona Liza", "John");
artGallery.buyArticle("item", "Ancient vase", "Peter");
console.log(artGallery.showGalleryInfo("article"));
console.log(artGallery.showGalleryInfo("guest"));

// Output
// Articles information:
// picture - Mona Liza - 3
// item - Ancient vase - 1
// Guests information:
// John - 1
// Peter - 1
