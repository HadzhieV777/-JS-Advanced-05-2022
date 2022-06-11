function solution() {
  let string = "";

  function append(newString) {
    if (typeof newString === "string") {
      string += newString;
    }
  }

  function removeStart(count) {
    if (typeof count === "number") {
      string = string.substring(count);
    }
  }

  function removeEnd(count) {
    if (typeof count === "number") {
      string = string.substring(0, string.length - count);
    }
  }

  function print() {
    console.log(string);
  }

  return {
    append,
    removeStart,
    removeEnd,
    print,
  };
}

let firstZeroTest = solution();
firstZeroTest.append("hello");
firstZeroTest.append("again");
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();
