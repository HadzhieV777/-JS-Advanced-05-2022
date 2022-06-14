function Person(first, last) {
  this.firstName = first;
  this.lastName = last;

  Object.defineProperty(this, "fullName", {
    get() {
      return this.firstName + " " + this.lastName;
    },
    set(newFullName) {
      let pattern = /(?<firstName>\w+) (?<lastName>\w+)/;
      let matchResult = newFullName.match(pattern);

      if (matchResult) {
        this.firstName = matchResult.groups.firstName;
        this.lastName = matchResult.groups.lastName;
      }
    },
  });
}

let person = new Person("Peter", "Ivanov");
console.log(person.fullName); //Peter Ivanov
person.firstName = "George";
console.log(person.fullName); //George Ivanov
person.lastName = "Peterson";
console.log(person.fullName); //George Peterson
person.fullName = "Nikola Tesla";
console.log(person.firstName); //Nikola
console.log(person.lastName); //Tesla

// let person = new Person("Albert", "Simpson");
// console.log(person.fullName); //Albert Simpson
// person.firstName = "Simon";
// console.log(person.fullName); //Simon Simpson
// person.fullName = "Peter";
// console.log(person.firstName); // Simon
// console.log(person.lastName); // Simpson
