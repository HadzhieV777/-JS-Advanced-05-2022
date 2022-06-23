const { expect } = require("chai");
const { library } = require("./solution");

describe("library object", () => {
  describe("calcPriceOfBook function", () => {
    it("validates the input and throws", () => {
      expect(() => library.calcPriceOfBook()).to.throw("Invalid input");
      expect(() => library.calcPriceOfBook(1123, 1997)).to.throw("Invalid input");
      expect(() => library.calcPriceOfBook('Book', 'invalid')).to.throw("Invalid input");
      expect(() => library.calcPriceOfBook('Book')).to.throw("Invalid input");
      expect(() => library.calcPriceOfBook(2022)).to.throw("Invalid input");
    });

    it('takes valid input and calculates the book price', () => {
        expect(library.calcPriceOfBook('MandrasaneIzmesto', 1979)).to.equal('Price of MandrasaneIzmesto is 10.00')
        expect(library.calcPriceOfBook('MandrasaneIzmesto', 1980)).to.equal('Price of MandrasaneIzmesto is 10.00')
        expect(library.calcPriceOfBook('MandrasaneIzmesto', 2004)).to.equal('Price of MandrasaneIzmesto is 20.00')
    })
  });

  describe("findBook function", () => {
    it('takes an empty arr and throws', () => {
        expect(() => library.findBook([], 'Narnia')).to.throw("No books currently available")
    })

    it("takes valid input and returns if can't find the desired book", () => {
        expect(library.findBook(['Troy', 'MandrasaneIzmesto'], 'Toronto')).to.equal('The book you are looking for is not here!')
    })

    it("takes valid input and returns the desired book", () => {
        expect(library.findBook(['Troy', 'MandrasaneIzmesto'], 'MandrasaneIzmesto')).to.equal('We found the book you want.')
    })
  })

  describe('arrangeTheBooks function', () => {
    it('validates the input and throws', () => {
        expect(() => library.arrangeTheBooks()).to.throw('Invalid input')
        expect(() => library.arrangeTheBooks(-1)).to.throw('Invalid input')
        expect(() => library.arrangeTheBooks(1.5)).to.throw('Invalid input')
        expect(() => library.arrangeTheBooks('1.5')).to.throw('Invalid input')
    })

    it('takes a valid input and arranges the books', () => {
        expect(library.arrangeTheBooks(0)).to.equal('Great job, the books are arranged.')
        expect(library.arrangeTheBooks(33)).to.equal('Great job, the books are arranged.')
        expect(library.arrangeTheBooks(40)).to.equal('Great job, the books are arranged.')
    })

    it("takes a valid input but can'tarranges the books because there is no space", () => {
        expect(library.arrangeTheBooks(41)).to.equal('Insufficient space, more shelves need to be purchased.')
    })


  })
 
});
