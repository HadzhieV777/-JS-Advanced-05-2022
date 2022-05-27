function solve(arr) {
  arr.sort((a, b) => a - b);
  return arr.slice(arr.length / 2);
}

console.log(solve([4, 7, 2, 5])); // [5, 7]
console.log(solve([3, 19, 14, 7, 2, 19, 6])); // [7, 14, 19, 19
