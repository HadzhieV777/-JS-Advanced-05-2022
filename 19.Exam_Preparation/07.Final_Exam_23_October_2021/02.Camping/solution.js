class SummerCamp {
  constructor(organizer, location) {
    this.organizer = organizer;
    this.location = location;
    this.priceForTheCamp = { child: 150, student: 300, collegian: 500 };
    this.listOfParticipants = [];
  }

  registerParticipant(name, condition, money) {
    if (!this.priceForTheCamp[condition]) {
      throw new Error("Unsuccessful registration at the camp.");
    }

    if (this.listOfParticipants.find((p) => p.name === name)) {
      return `The ${name} is already registered at the camp.`;
    }

    if (money < this.priceForTheCamp[condition]) {
      return "The money is not enough to pay the stay at the camp.";
    }

    this.listOfParticipants.push({
      name,
      condition,
      power: 100,
      wins: 0,
    });
    return `The ${name} was successfully registered.`;
  }

  unregisterParticipant(name) {
    let participantIndex = this.listOfParticipants.findIndex(
      (p) => p.name === name
    );

    if (participantIndex == -1) {
      throw new Error(`The ${name} is not registered in the camp.`);
    }

    this.listOfParticipants.splice(participantIndex, 1);
    return `The ${name} removed successfully.`;
  }

  timeToPlay(typeOfGame, ...participants) {
    participants.forEach((name) => {
      if (!this.listOfParticipants.find((pl) => pl.name === name)) {
        throw new Error("Invalid entered name/s.");
      }
    });

    const player1 = this.listOfParticipants.find(
      (pl) => pl.name === participants[0]
    );

    if (participants.length == 2) {
      const player2 = this.listOfParticipants.find(
        (pl) => pl.name === participants[1]
      );
      if (player1.condition != player2.condition) {
        throw new Error("Choose players with equal condition.");
      }
    }

    if (typeOfGame == "Battleship") {
      player1.power += 20;
      return `The ${player1.name} successfully completed the game ${typeOfGame}.`;
    } else if (typeOfGame == "WaterBalloonFights") {
      const player2 = this.listOfParticipants.find(
        (pl) => pl.name === participants[1]
      );

      if (player1.power === player2.power) {
        return "There is no winner.";
      }

      if (player1.power > player2.power) {
        player1.wins += 1;
        return `The ${player1.name} is winner in the game ${typeOfGame}.`;
      } else if (player1.power < player2.power) {
        player2.wins += 1;
        return `The ${player2.name} is winner in the game ${typeOfGame}.`;
      }
    }
  }

  toString() {
    const campInfoLine = `${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`;
    let participants = this.listOfParticipants.sort((a, b) => b.wins - a.wins);
    participants = participants
      .map((p) => Object.values(p).join(" - "))
      .join("\n");

    return [campInfoLine, participants].join("\n");
  }
}

// Input
const summerCamp = new SummerCamp(
  "Jane Austen",
  "Pancharevo Sofia 1137, Bulgaria"
);
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
console.log(
  summerCamp.timeToPlay(
    "WaterBalloonFights",
    "Petar Petarson",
    "Dimitur Kostov"
  )
);

console.log(summerCamp.toString());

// Output
// The Petar Petarson was successfully registered.
// The Petar Petarson successfully completed the game Battleship.
// The Sara Dickinson was successfully registered.
// Uncaught Error: Choose players with equal condition.
// The Dimitur Kostov was successfully registered.
// The Petar Petarson is winner in the game WaterBalloonFights.
// Jane Austen will take 3 participants on camping to Pancharevo Sofia 1137, Bulgaria
// Petar Petarson - student - 120 - 1
// Sara Dickinson - child - 100 - 0
// Dimitur Kostov - student - 100 - 0
