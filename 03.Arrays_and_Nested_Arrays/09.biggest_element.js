function solve(matrix) {
  let biggestNum = -Infinity;

  matrix.forEach((arr) => {
    let biggesNumFromArr = Math.max(...arr);
    if (biggestNum <= biggesNumFromArr) {
      biggestNum = biggesNumFromArr;
    }
  });

  return biggestNum;
}

console.log(
  solve([
    [20, 50, 10],
    [8, 33, 145],
  ])
); // 145

console.log(
  solve([
    [3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4],
  ])
); // 33
