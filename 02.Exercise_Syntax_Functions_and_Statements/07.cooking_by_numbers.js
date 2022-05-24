function numbersCoocker(n, ...params) {
    let number = Number(n)
    const iterator = params.values();

    for (const command of iterator) {

        switch (command) {
            case 'chop':
                number /= 2;
                console.log(number)
                break;
            case 'dice':
                number = Math.sqrt(number)
                console.log(number)
                break;
            case 'spice':
                number += 1
                console.log(number)
                break;
            case 'bake':
                number *= 3 
                console.log(number)
                break;
            case 'fillet':
                number -= number * 0.20; 
                console.log(number)
                break;    
        }
    }


}


numbersCoocker('9', 'dice', 'spice', 'chop', 'bake', 'fillet')

