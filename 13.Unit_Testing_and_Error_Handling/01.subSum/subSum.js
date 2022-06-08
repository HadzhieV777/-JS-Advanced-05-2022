function solve(arr, start, end) {
  if (!Array.isArray(arr)) {
    return NaN;
  }
  if (start < 0) {
    start = 0;
  }
  if (end > arr.length - 1) {
    end = arr.length - 1;
  }

  let result = 0;
  let slice = arr.slice(start, end + 1);
  slice.forEach((n) => (result += Number(n)));
  return result;
}

console.log(solve([10, 20, 30, 40, 50, 60], 3, 300)); // 150
console.log(solve([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1)); // 3.3
console.log(solve([10, "twenty", 30, 40], 0, 2)); // NaN
console.log(solve([], 1, 2)); // 0
console.log(solve("text", 0, 2)); // NaN
