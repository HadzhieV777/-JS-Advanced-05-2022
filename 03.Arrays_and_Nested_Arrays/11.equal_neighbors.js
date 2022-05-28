function solve(matrix) {
    let pairs = 0;

    for (let i = 0; i < matrix.length; i++) {
        let firstArr = matrix[i]
        let secondArr = matrix[i + 1];

        if (secondArr === undefined) {
            for (let j = 0; j < firstArr.length; j++) {
                let firstArrEl = firstArr[j];
                let firstArrNextEl = firstArr[j + 1];

                if (firstArrNextEl === undefined) {
                    break;
                }

                if (firstArrEl === firstArrNextEl) {
                    pairs++;
                }
            }

            break;
        }

        for (let k = 0; k < firstArr.length; k++) {
            let firstArrEl = firstArr[k];
            let firstArrNextEl = firstArr[k + 1];
            let secondArrEl = secondArr[k];

            if (firstArrEl === secondArrEl) {
                pairs++;
            }

            if (firstArrNextEl === undefined) {
                break;
            }

            if (firstArrEl === firstArrNextEl) {
                pairs++;
            }
        }
    }

    return pairs;
}

console.log(solve([
  ["2", "3", "4", "7", "0"],
  ["4", "0", "5", "3", "4"],
  ["2", "3", "5", "4", "2"],
  ["9", "8", "7", "5", "4"],
])); // 1

console.log(solve([
  ["test", "yes", "yo", "ho"],
  ["well", "done", "yo", "6"],
  ["not", "done", "yet", "5"],
])); // 2
