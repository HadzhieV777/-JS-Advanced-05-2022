function carFactory(wantedCar) {
  let engines = [
    { power: 90, volume: 1800 },
    { power: 120, volume: 2400 },
    { power: 200, volume: 3500 },
  ];

  let carriages = [
    { type: "hatchback", color: wantedCar.color },
    { type: "coupe", color: wantedCar.color },
  ];

  let wheelSize =
    wantedCar.wheelsize % 2 == 1
      ? wantedCar.wheelsize
      : wantedCar.wheelsize - 1;

  return {
    model: wantedCar.model,
    engine: engines.filter((e) => e.power >= wantedCar.power)[0],
    carriage: carriages.filter((c) => c.type == wantedCar.carriage)[0],
    wheels: [wheelSize, wheelSize, wheelSize, wheelSize],
  };
}

console.log(
  carFactory({
    model: "VW Golf II",
    power: 90,
    color: "blue",
    carriage: "hatchback",
    wheelsize: 14,
  })
); // { model: 'VW Golf II', engine: { power: 90, volume: 1800 }, carriage: { type: 'hatchback', color: 'blue' }, wheels: [13, 13, 13, 13] }

// carFactory({
//   model: "Opel Vectra",
//   power: 110,
//   color: "grey",
//   carriage: "coupe",
//   wheelsize: 17,
// }); // { model: 'Opel Vectra', engine: { power: 120, volume: 2400 }, carriage: { type: 'coupe', color: 'grey' }, wheels: [17, 17, 17, 17] }
