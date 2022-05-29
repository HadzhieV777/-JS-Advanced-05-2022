function solve(arr) {
  let biggerNumber = 0;
  let result = [];

  arr.forEach((c) => {
    if (c >= biggerNumber) {
      biggerNumber = c;
      result.push(c);
    }
  });
  return result;
}

console.log(solve([1, 3, 8, 4, 10, 12, 3, 2, 24])); // [1, 3, 8, 10, 12, 24]
console.log(solve([1, 2, 3, 4])); // [1, 2, 3, 4]
console.log(solve([20, 3, 2, 15, 6, 1])); // [20]
