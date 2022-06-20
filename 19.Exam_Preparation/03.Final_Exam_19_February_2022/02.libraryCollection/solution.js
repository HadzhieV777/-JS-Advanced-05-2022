class LibraryCollection {
  constructor(capacity) {
    this.capacity = capacity;
    this.books = [];
  }

  addBook(bookName, bookAuthor) {
    if (this.capacity < 1) {
      throw new Error("Not enough space in the collection.");
    }

    const book = {
      bookName,
      bookAuthor,
      payed: false,
    };
    this.books.push(book);
    this.capacity--;

    return `The ${bookName}, with an author ${bookAuthor}, collect.`;
  }

  payBook(bookName) {
    const book = this.books.find((b) => b.bookName == bookName);
    if (book == undefined) {
      throw new Error(`${bookName} is not in the collection.`);
    }

    if (book.payed) {
      throw new Error(`${bookName} has already been paid.`);
    }

    book.payed = true;
    return `${bookName} has been successfully paid.`;
  }

  removeBook(bookName) {
    const bookIndex = this.books.findIndex((b) => b.bookName == bookName);
    if (bookIndex == -1) {
      throw new Error("The book, you're looking for, is not found.");
    }

    const book = this.books[bookIndex];
    if (book.payed == false) {
      throw new Error(
        `${bookName} need to be paid before removing from the collection.`
      );
    }

    this.books.splice(bookIndex, 1);
    this.capacity++;
    return `${bookName} remove from the collection.`;
  }

  getStatistics(bookAuthor) {
    if (!bookAuthor) {
      let booksAsString = this.books.sort((a, b) =>
        a.bookName.localeCompare(b.bookName)
      );
      booksAsString = booksAsString.map(
        (b) =>
          `${b.bookName} == ${b.bookAuthor} - ${
            b.payed ? "Has Paid" : "Not Paid"
          }.`
      );
      if (booksAsString.length > 0) {
        booksAsString.unshift("");
      }
      return `The book collection has ${
        this.capacity
      } empty spots left.${booksAsString.join("\n")}`;
    } else {
      let booksAsString = this.books.filter((b) => b.bookAuthor == bookAuthor);
      if (booksAsString.length === 0) {
        throw new Error(`${bookAuthor} is not in the collection.`);
      }

      booksAsString = booksAsString.map(
        (b) =>
          `${b.bookName} == ${b.bookAuthor} - ${
            b.payed ? "Has Paid" : "Not Paid"
          }.`
      );
      return booksAsString.join("\n");
    }
  }
}

//  Input #1
const library = new LibraryCollection(5);
library.addBook("Don Quixote", "Miguel de Cervantes");
library.payBook("Don Quixote");
library.addBook("In Search of Lost Time", "Marcel Proust");
library.addBook("Ulysses", "James Joyce");
console.log(library.getStatistics());

//  Output #1
// The book collection has 2 empty spots left.
// Don Quixote == Miguel de Cervantes - Has Paid.
// In Search of Lost Time == Marcel Proust - Not Paid.
// Ulysses == James Joyce - Not Paid.
