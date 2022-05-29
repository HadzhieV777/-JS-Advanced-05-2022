function solve(arr, rotations) {
    while (rotations > 0) {
        let lastEl = arr.pop();
        arr.unshift(lastEl);

        rotations--;
    }

    return arr.join(' ');
}

// function solve(arr, rotationsCount) {
//     for (let i=0;i < rotationsCount; i++) {
//         arr.unshift(arr.pop())
//     }
//     return arr.join(' ');
// }

console.log(solve(["1", "2", "3", "4"], 2)); // 3 4 1 2
console.log(solve(["Banana", "Orange", "Coconut", "Apple"], 15)); // Orange Coconut Apple Banana
