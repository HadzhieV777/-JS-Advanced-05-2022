class Bank {
  #bankName;
  constructor(bankName) {
    this.#bankName = bankName;
    this.allCustomers = [];
  }

  newCustomer(customer) {
    let registeredCustomer = this.allCustomers.find(
      (c) => c.personalId == customer.personalId
    );

    if (registeredCustomer) {
      throw new Error(
        `${registeredCustomer.firstName} ${registeredCustomer.lastName} is already our customer!`
      );
    }

    this.allCustomers.push(customer);
    return customer;
  }

  depositMoney(personalId, amount) {
    const customerIndex = this.allCustomers.findIndex(
      (c) => c.personalId == personalId
    );

    if (customerIndex === -1) {
      throw new Error("We have no customer with this ID!");
    }

    const registeredCustomer = this.allCustomers[customerIndex];
    registeredCustomer.totalMoney = !registeredCustomer.totalMoney
      ? amount
      : registeredCustomer.totalMoney + amount;

    if (!registeredCustomer.transactions) {
      registeredCustomer.transactions = [];
    }
    registeredCustomer.transactions.unshift(
      `${registeredCustomer.transactions.length + 1}. ${
        registeredCustomer.firstName
      } ${registeredCustomer.lastName} made deposit of ${amount}$!`
    );
    return `${registeredCustomer.totalMoney}$`;
  }

  withdrawMoney(personalId, amount) {
    const customerIndex = this.allCustomers.findIndex(
      (c) => c.personalId === personalId
    );
    if (customerIndex === -1) {
      throw new Error("We have no customer with this ID!");
    }

    const registeredCustomer = this.allCustomers[customerIndex];
    if (
      registeredCustomer.totalMoney < amount ||
      !registeredCustomer.totalMoney
    ) {
      throw new Error(
        `${registeredCustomer.firstName} ${registeredCustomer.lastName} does not have enough money to withdraw that amount!`
      );
    }

    registeredCustomer.totalMoney -= amount;
    if (!registeredCustomer.transactions) {
      registeredCustomer.transactions = [];
    }
    registeredCustomer.transactions.unshift(
      `${registeredCustomer.transactions.length + 1}. ${
        registeredCustomer.firstName
      } ${registeredCustomer.lastName} withdrew ${amount}$!`
    );
    return `${registeredCustomer.totalMoney}$`;
  }

  customerInfo(personalId) {
    const customerIndex = this.allCustomers.findIndex(
      (c) => c.personalId == personalId
    );
    if (customerIndex === -1) {
      throw new Error("We have no customer with this ID!");
    }
    const registeredCustomer = this.allCustomers[customerIndex];

    return `Bank name: ${this.#bankName}\nCustomer name: ${
      registeredCustomer.firstName
    } ${
      registeredCustomer.lastName
    }\nCustomer ID: ${personalId}\nTotal Money: ${
      registeredCustomer.totalMoney ? registeredCustomer.totalMoney : 0
    }$\nTransactions:\n${
      registeredCustomer.transactions
        ? registeredCustomer.transactions.join("\n")
        : ""
    }`;
  }
}

// Input
let bank = new Bank("SoftUni Bank");

console.log(
  bank.newCustomer({
    firstName: "Svetlin",
    lastName: "Nakov",
    personalId: 6233267,
  })
);
console.log(
  bank.newCustomer({
    firstName: "Mihaela",
    lastName: "Mileva",
    personalId: 4151596,
  })
);

bank.depositMoney(6233267, 250);
console.log(bank.depositMoney(6233267, 250));
bank.depositMoney(4151596, 555);
console.log(bank.withdrawMoney(6233267, 125));
console.log(bank.customerInfo(6233267));

// Output

// { firstName: 'Svetlin', lastName: ‘Nakov’, personalId: 6233267 }
// { firstName: 'Mihaela', lastName: ‘Mileva’, personalId: 4151596 }
// 500$
// 375$
// Bank name: SoftUni Bank
// Customer name: Svetlin Nakov
// Customer ID: 6233267
// Total Money: 375$
// Transactions:
// 3. Svetlin Nakov withdrew 125$!
// 2. Svetlin Nakov made depostit of 250$!
// 1. Svetlin Nakov made depostit of 250$!
