class Hex {
  constructor(value) {
    this.value = value;
  }

  valueOf() {
    return this.value;
  }

  toString() {
    let hexaDecimalValue = this.value.toString(16).toUpperCase();
    return "0x" + hexaDecimalValue;
  }

  plus(input) {
    let newValue = 0;
    if (input instanceof Hex) {
      newValue = this.value + input.value;
    } else {
      newValue = this.value + input;
    }

    return new Hex(newValue);
  }

  minus(input) {
    let newValue = 0;
    if (input instanceof Hex) {
      newValue = this.value - input.value;
    } else {
      newValue = this.value - input;
    }

    return new Hex(newValue);
  }

  parse(input) {
    let hexadecimalNum = "0x" + input;
    let decilamNum = parseInt(hexadecimalNum);
    return decilamNum;
  }
}

let FF = new Hex(255);
console.log(FF.toString()); // 0XFF
FF.valueOf() + 1 == 256;
let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(b).toString()); // 0XF
console.log(a.plus(b).toString() === "0xF"); // true
console.log(FF.parse("AAA")); // 2730
