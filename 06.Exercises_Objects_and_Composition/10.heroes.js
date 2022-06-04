function solve() {
  function mage(name) {
    let cast = function (spell) {
      this.mana--;
      console.log(`${this.name} cast ${spell}`);
    };

    let obj = {
      name: name,
      health: 100,
      mana: 100,
      cast,
    };

    return obj;
  }

  function fighter(name) {
    let fight = function () {
      this.stamina--;
      console.log(`${this.name} slashes at the foe!`);
    };

    let obj = {
      name: name,
      health: 100,
      stamina: 100,
      fight,
    };

    return obj;
  }
  return {
    mage,
    fighter,
  };
}

let create = solve();

const scorcher = create.mage("Scorcher");
scorcher.cast("fireball");
scorcher.cast("thunder");
scorcher.cast("light");

const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight();
console.log(scorcher2.stamina);
console.log(scorcher.mana);
