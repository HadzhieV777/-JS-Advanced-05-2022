function solve(matrix) {
  let sum = matrix[0].reduce((acc, curr) => (acc += curr), 0);

  for (let i = 0; i < matrix.length; i++) {
    let columnSum = 0;
    let rowSum = 0;

    for (let j = 0; j < matrix.length; j++) {
      let el = matrix[i][j];
      let otherEl = matrix[j][i];
      rowSum += el;
      columnSum += otherEl;
    }

    if (columnSum !== sum || rowSum !== sum) {
      return false;
    }
  }
  return true;
}

console.log(
  solve([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5],
  ])
); // true

console.log(
  solve([
    [11, 32, 45],
    [21, 0, 1],
    [21, 1, 1],
  ])
); // false

console.log(
  solve([
    [1, 0, 0],
    [0, 0, 1],
    [0, 1, 0],
  ])
); // true
