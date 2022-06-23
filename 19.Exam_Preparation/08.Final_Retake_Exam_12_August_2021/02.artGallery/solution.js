class ArtGallery{}

// Input
const artGallery = new ArtGallery('Curtis Mayfield');
console.log(artGallery.addArticle('picture', 'Mona Liza', 3));
console.log(artGallery.addArticle('Item', 'Ancient vase', 2));
console.log(artGallery.addArticle('PICTURE', 'Mona Liza', 1));

// Output
// Successfully added article Mona Liza with a new quantity- 3.
//   Successfully added article Ancient vase with a new quantity- 2.
//   Successfully added article Mona Liza with a new quantity- 1.