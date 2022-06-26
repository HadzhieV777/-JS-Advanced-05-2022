class List {
  constructor() {
    this.numbers = [];
    this.size = this.numbers.length;
  }

  add(elements) {
    if (Array.isArray(elements)) {
      this.numbers.push(...elements);
    } else {
      this.numbers.push(elements);
    }

    this.numbers.sort((a, b) => a - b);
    this.size = this.numbers.length;
  }

  remove(index) {
    if (this.numbers[index] !== undefined) {
      this.numbers.splice(index, 1);
    } else {
      throw new RangeError("index out of range");
    }

    this.numbers.sort((a, b) => a - b);
    this.size = this.numbers.length;
  }

  get(index) {
    if (this.numbers[index] !== undefined) {
      return this.numbers[index];
    } else {
      throw new RangeError("index out of range");
    }
  }
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); // 6
list.remove(1);
console.log(list.get(1)); // 7
