window.addEventListener("load", solve);

function solve() {
  const fields = {
    make: document.getElementById("make"),
    model: document.getElementById("model"),
    year: document.getElementById("year"),
    fuel: document.getElementById("fuel"),
    originalCost: document.getElementById("original-cost"),
    sellingPrice: document.getElementById("selling-price"),
  };

  const button = {
    publish: document.getElementById("publish"),
  };

  const table = {
    body: document.getElementById("table-body"),
    soldCars: document.getElementById("cars-list"),
    profit: document.getElementById("profit"),
  };
  let profitMade = 0;

  // Add functionality to the main button
  button.publish.addEventListener("click", (e) => {
    e.preventDefault();

    // Read the input
    const make = fields.make.value;
    const model = fields.model.value;
    const year = fields.year.value;
    const fuel = fields.fuel.value;
    const cost = Number(fields.originalCost.value);
    const sellingPrice = Number(fields.sellingPrice.value);

    // Validate the input
    if (
      make == "" ||
      model == "" ||
      year == "" ||
      fuel == "" ||
      cost == "" ||
      sellingPrice == ""
    ) {
      return;
    }

    if (cost > sellingPrice) {
      return;
    }

    // Assign the form data to the info table
    let tr = createNewElement("tr", "", "row");
    tr.appendChild(createNewElement("td", make));
    tr.appendChild(createNewElement("td", model));
    tr.appendChild(createNewElement("td", year));
    tr.appendChild(createNewElement("td", fuel));
    tr.appendChild(createNewElement("td", cost));
    tr.appendChild(createNewElement("td", sellingPrice));

    let buttonsTd = createNewElement("td", "");

    // Create secondary buttons
    const editBtn = createNewElement("button", "Edit", "action-btn edit");
    const sellBtn = createNewElement("button", "Sell", "action-btn sell");
    buttonsTd.appendChild(editBtn);
    buttonsTd.appendChild(sellBtn);

    tr.appendChild(buttonsTd);
    table.body.appendChild(tr);

    // clear the input
    Object.values(fields).forEach((f) => (f.value = ""));

    // Add functionality to the secondary buttons
    editBtn.addEventListener("click", () => {
      tr.remove();

      fields.make.value = make;
      fields.model.value = model;
      fields.year.value = year;
      fields.fuel.value = fuel;
      fields.originalCost.value = cost;
      fields.sellingPrice.value = sellingPrice;
    });

    sellBtn.addEventListener("click", () => {
      tr.remove();
      profitMade += sellingPrice - cost;
      let li = createNewElement("li", "", "each-list");
      li.appendChild(createNewElement("span", `${make} ${model}`));
      li.appendChild(createNewElement("span", year));
      li.appendChild(createNewElement("span", sellingPrice - cost));
      table.soldCars.appendChild(li);
      table.profit.textContent = `${profitMade.toFixed(2)}`;
    });
  });

  function createNewElement(type, content, className) {
    const element = document.createElement(type);
    element.textContent = content;
    if (className) {
      element.className = className;
    }
    return element;
  }
}
