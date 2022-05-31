function solve(arr) {
    arr.sort((a, b) => a.localeCompare(b))
    arr.sort((a, b) => a.length - b.length)

    return arr.join('\n')
}

console.log(solve(["alpha", "beta", "gamma"])); // beta alpha gamma
console.log(solve(["Isacc", "Theodor", "Jack", "Harrison", "George"])); // Jack Isacc George Theodor Harrison
console.log(solve(["test", "Deny", "omen", "Default"])); //  Deny omen test Default
