function solve(arr) {
  console.log(
    arr
      // returns the elements at odd position:
      .filter((_, i) => i % 2)
      // doubled
      .map((x) => x * 2)
      // and in reverse order
      .reverse()
      // return result on the console: single line, separated by space
      .join(" ")
  );
}

console.log(solve([10, 15, 20, 25])); // 50 30
console.log(solve([3, 0, 10, 4, 7, 3])); // 6 8 0

// function solve(arr) {
//   let result = [];

//   for (let i = 1; i < arr.length; i += 2) {
//     result.unshift(arr[i] * 2);
//   }
//   return result.join(" ");
// }
