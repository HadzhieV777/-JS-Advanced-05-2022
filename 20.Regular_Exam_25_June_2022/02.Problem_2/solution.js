class SmartHike {
  constructor(username) {
    this.username = username;
    this.goals = {};
    this.listOfHikes = [];
    this.resources = 100;
  }

  addGoal(peak, altitude) {
    if (this.goals.hasOwnProperty(peak)) {
      return `${peak} has already been added to your goals`;
    }
    this.goals[peak] = altitude;
    return `You have successfully added a new goal - ${peak}`;
  }

  hike(peak, time, difficultyLevel) {
    if (!this.goals.hasOwnProperty(peak)) {
      throw new Error(`${peak} is not in your current goals`);
    }

    if (this.resources == 0) {
      throw new Error("You don't have enough resources to start the hike");
    }

    if (this.resources - time * 10 < 0) {
      return "You don't have enough resources to complete the hike";
    }

    this.resources -= time * 10;
    this.listOfHikes.push({
      peak,
      time,
      difficultyLevel,
    });

    return `You hiked ${peak} peak for ${time} hours and you have ${this.resources}% resources left`;
  }

  rest(time) {
    if (time * 10 + this.resources >= 100) {
      this.resources = 100;
      return `Your resources are fully recharged. Time for hiking!`;
    } else {
      this.resources += time * 10;
      return `You have rested for ${time} hours and gained ${
        time * 10
      }% resources`;
    }
  }

  showRecord(criteria) {
    if (this.listOfHikes.length === 0) {
      return `${this.username} has not done any hiking yet`;
    }

    if (criteria == "easy") {
      let sorted = this.listOfHikes.filter((h) => h.difficultyLevel === "easy");

      if (sorted.length === 0) {
        return `${this.username} has not done any ${criteria} hiking yet`;
      }

      let bestHike = sorted.sort((a, b) => a.time - b.time)[0];
      return `${this.username}'s best ${criteria} hike is ${bestHike.peak} peak, for ${bestHike.time} hours`;
    } else if (criteria == "hard") {
      let sorted = this.listOfHikes.filter((h) => h.difficultyLevel === "hard");

      if (sorted.length === 0) {
        return `${this.username} has not done any ${criteria} hiking yet`;
      }

      let bestHike = sorted.sort((a, b) => a.time - b.time)[0];
      return `${this.username}'s best ${criteria} hike is ${bestHike.peak} peak, for ${bestHike.time} hours`;
    } else {
      return `All hiking records:\n${this.listOfHikes
        .map((h) => `${this.username} hiked ${h.peak} for ${h.time} hours`)
        .join("\n")}`;
    }
  }
}

// Input
const user = new SmartHike("Vili");
user.addGoal("Musala", 2925);
user.hike("Musala", 8, "hard");
console.log(user.showRecord("easy"));
user.addGoal("Vihren", 2914);
user.hike("Vihren", 4, "hard");
console.log(user.showRecord("hard"));
user.addGoal("Rui", 1706);
user.hike("Rui", 3, "easy");
console.log(user.showRecord("all"));

// Output
// Vili has not done any easy hiking yet
// Vili's best hard hike is Musala peak, for 8 hours
// All hiking records:
// Vili hiked Musala for 8 hours
