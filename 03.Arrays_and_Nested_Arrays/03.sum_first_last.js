function solve(arr) {
  let first = Number(arr.shift());
  let last = Number(arr.pop());
  let result = first + last;
  return result;
}

console.log(solve(["20", "30", "40"])); // 60
console.log(solve(["5", "10"])); // 15
