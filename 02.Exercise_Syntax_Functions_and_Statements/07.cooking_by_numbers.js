function numbersCoocker(n, ...params) {
    let number = Number(n)
    const iterator = params.values();
    const parser = {
            chop() {number /= 2},
            dice() {number = Math.sqrt(number)},
            spice() {number += 1},
            bake() {number *= 3 },
            fillet() {number -= number * 0.20},
    }

    for (const command of iterator) {
        parser[command]()
        console.log(number)
    }


}


numbersCoocker('9', 'dice', 'spice', 'chop', 'bake', 'fillet')

