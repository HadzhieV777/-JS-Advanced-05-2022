class Garden {
  constructor(spaceAvailable) {
    this.spaceAvailable = spaceAvailable;
    this.plants = [];
    this.storage = [];
  }

  addPlant(plantName, spaceRequired) {
    // If there is not enough space, throw Error
    if (this.spaceAvailable - spaceRequired < 0) {
      throw new Error("Not enough space in the garden.");
    }

    // reduce the space available with the space required by the plant
    this.spaceAvailable -= spaceRequired;

    //  Create an obj to add to [plants]
    const plant = {
      plantName,
      spaceRequired,
      ripe: false,
      quantity: 0,
    };

    //  add plant to to the plants array,
    this.plants.push(plant);
    return `The ${plantName} has been successfully planted in the garden.`;
  }

  ripenPlant(plantName, quantity) {
    // If the received quantity is less than or equal to 0, throw an Error
    if (quantity <= 0) {
      throw new Error("The quantity cannot be zero or negative.");
    }

    const plant = this.plants.find((p) => p.plantName == plantName);
    // If the plant is not found, throw an Error
    if (plant == undefined) {
      throw new Error(`There is no ${plantName} in the garden.`);
    }

    // If the plant is already ripe, throw an Error
    if (plant.ripe) {
      throw new Error(`The ${plantName} is already ripe.`);
    }

    // set the ripe property of the particular plant to true
    plant.ripe = true;
    //  add the quantity to the quantity property of the plant
    plant.quantity += quantity;

    if (quantity == 1) {
      return `${quantity} ${plantName} has successfully ripened.`;
    } else {
      return `${quantity} ${plantName}s have successfully ripened.`;
    }
  }

  harvestPlant(plantName) {
    const plantIndex = this.plants.findIndex((p) => p.plantName == plantName);
    // If the plant is not found, throw an Error
    if (plantIndex == -1) {
      throw new Error(`There is no ${plantName} in the garden.`);
    }

    const plant = this.plants[plantIndex];
    // If the plant is not ripe, throw an Error
    if (plant.ripe == false) {
      throw new Error(
        `The ${plantName} cannot be harvested before it is ripe.`
      );
    }

    // remove the plant from the plants array
    this.plants.splice(plantIndex, 1);

    // add it to storage with properties plantName and quantity
    this.storage.push({
      plantName,
      quantity: plant.quantity,
    });

    //  free up the total space that the plant required
    this.spaceAvailable += plant.spaceRequired;
    return `The ${plantName} has been successfully harvested.`;
  }

  generateReport() {
    const plantAsString = this.plants
      .map((p) => p.plantName)
      .sort((a, b) => a.localeCompare(b));
    const plantsRow = `Plants in the garden: ${plantAsString.join(", ")}`;

    let storageRow = "Plants in storage: The storage is empty.";
    if (this.storage.length > 0) {
      const storageAsString = this.storage.map(
        (p) => `${p.plantName} (${p.quantity})`
      );
      storageRow = `Plants in storage: ${storageAsString.join(", ")}`;
    }

    return [
      `The garden has ${this.spaceAvailable} free space left.`,
      plantsRow,
      storageRow,
    ].join("\n");
  }
}

// Input #1
const myGarden = new Garden(250);
console.log(myGarden.addPlant("apple", 20));
console.log(myGarden.addPlant("ganja", 200));
console.log(myGarden.addPlant("raspberry", 10));
console.log(myGarden.ripenPlant("apple", 10));
console.log(myGarden.ripenPlant("ganja", 1));
console.log(myGarden.harvestPlant("ganja"));
console.log(myGarden.generateReport());

// Output #1
// The apple has been successfully planted in the garden.
// The ganja has been successfully planted in the garden.
// The raspberry has been successfully planted in the garden.
// 10 apples have successfully ripened.
// 1 ganja has successfully ripened.
// The ganja has been successfully harvested.
// The garden has 220 free space left.s
// Plants in the garden: apple, raspberry
// Plants in storage: ganja (1)
