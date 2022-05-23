function roadRadar(speed, area) {
    let speedLimit = 0;
    switch (area) {
        case 'residential':
            speedLimit = 20;
            break;
        case 'city':
            speedLimit = 50;
            break;
        case 'interstate':
            speedLimit = 90;
            break;
        case 'motorway':
            speedLimit = 130;
            break;
    }

    if (speed <= speedLimit) {
        console.log(`Driving ${speed} km/h in a ${speedLimit} zone`)
    } else {
        let overSpeed = speed - speedLimit;
        let status = '';
        
        if (overSpeed > 0 && overSpeed <= 20) {
            status = 'speeding';

        } else if (overSpeed > 20 && overSpeed <= 40) {
            status = 'excessive speeding';
        } else {
            status = 'reckless driving';
        }

        console.log(`The speed is ${overSpeed} km/h faster than the allowed speed of ${speedLimit} - ${status}`)
    }
}

// roadRadar(40, 'city')
// roadRadar(21, 'residential')
// roadRadar(120, 'interstate')
roadRadar(200, 'motorway')

