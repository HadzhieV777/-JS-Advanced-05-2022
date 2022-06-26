function tickets(ticketDescriptions, criterion) {
  class Ticket {
    constructor(destination, price, status) {
      this.destination = destination;
      this.price = price;
      this.status = status;
    }
  }

  let tickets = [];

  ticketDescriptions.forEach((t) => {
    let [destination, price, status] = t.split("|");
    tickets.push(new Ticket(destination, Number(price), status));
  });

  if (criterion === "price") {
    tickets.sort((a, b) => a[criterion] - b[criterion]);
  } else {
    tickets.sort((a, b) => a[criterion].localeCompare(b[criterion]));
  }

  return tickets;
}

console.log(
  tickets(
    [
      "Philadelphia|94.20|available",
      "New York City|95.99|available",
      "New York City|95.99|sold",
      "Boston|126.20|departed",
    ],
    "destination"
  )
);
