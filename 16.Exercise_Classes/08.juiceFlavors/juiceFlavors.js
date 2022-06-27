function juiceFactory(arr) {
  let result = {};
  let bottles = {};

  arr.forEach((juice) => {
    let [flavour, quantity] = juice.split(" => ");

    if (!result.hasOwnProperty(flavour)) {
      result[flavour] = 0;
    }
    result[flavour] += Number(quantity);

    while (result[flavour] >= 1000) {
      if (!bottles.hasOwnProperty(flavour)) {
        bottles[flavour] = 0;
      }
      bottles[flavour] += 1;
      result[flavour] -= 1000;
    }
  });
  Object.entries(bottles).forEach((entry) =>
    console.log(`${entry[0]} => ${entry[1]}`)
  );
}

juiceFactory([
  "Orange => 2000",
  "Peach => 1432",
  "Banana => 450",
  "Peach => 600",
  "Strawberry => 549",
]);
// Orange => 2
// Peach => 2

juiceFactory([
  "Kiwi => 234",
  "Pear => 2345",
  "Watermelon => 3456",
  "Kiwi => 4567",
  "Pear => 5678",
  "Watermelon => 6789",
]);

// Pear => 8
// Watermelon => 10
// Kiwi => 4
