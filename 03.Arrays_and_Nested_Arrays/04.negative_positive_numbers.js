function solve(arr) {
  const resultArr = [];
  for (let el of arr) {
    if (el >= 0) {
      resultArr.push(el);
    } else {
      resultArr.unshift(el);
    }
  }
  console.log(resultArr.join("\n"));
}

solve([7, -2, 8, 9]);
solve([3, -2, 0, -1]);
