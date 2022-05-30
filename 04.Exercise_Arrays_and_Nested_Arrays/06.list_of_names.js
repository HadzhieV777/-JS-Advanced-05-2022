function solve(names) {
    names.sort((a, b) => a.localeCompare(b))

    names.forEach((el, i) => {
        console.log(`${i + 1}.${el}`)
    })
}

solve(["John", "Bob", "Christina", "Ema"])
