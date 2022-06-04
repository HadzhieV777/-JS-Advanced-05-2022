function rectangle(width, height, color) {
  let calcArea = function () {
    return this.width * this.height;
  };

  color = color.split("").map((el, i) => (i === 0 ? el.toUpperCase() : el)).join('');

  return {
      width,
      height,
      color,
      calcArea
  }
}

let rect = rectangle(4, 5, "red");
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());

rect.color = "blue";
console.log(rect.color);
rect.width = 5;
console.log(rect.calcArea());
