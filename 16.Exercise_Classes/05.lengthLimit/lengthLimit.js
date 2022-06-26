class Stringer {
  constructor(innerString, innerLength) {
    this.innerString = innerString;
    this.innerLength = innerLength;
  }

  increase(length) {
    if (typeof length === "number") {
      this.innerLength += length;
    }
  }

  decrease(length) {
    if (typeof length === "number") {
      if (this.innerLength - length < 0) {
        this.innerLength = 0;
      } else {
        this.innerLength -= length;
      }
    }
  }

  toString() {
    if (this.innerLength === 0) {
      return "...";
    } else {
      if (this.innerString.length > this.innerLength) {
        let string = this.innerString.substring(0, this.innerLength);
        let result = string + ".".repeat(3);
        return result;
      } else {
        return this.innerString;
      }
    }
  }
}

let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4);
console.log(test.toString()); // Test
