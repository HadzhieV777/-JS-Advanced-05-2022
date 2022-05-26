function solve(arr) {
  arr.sort((a, b) => a - b);
  return `${arr[0]} ${arr[1]}`;
}

solve([30, 15, 50, 5]); // 5 15
solve([3, 0, 10, 4, 7, 3]); // 0 3
