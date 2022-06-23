window.addEventListener("load", solve);

function solve() {
  const field = {
    model: document.getElementById("model"),
    year: document.getElementById("year"),
    description: document.getElementById("description"),
    price: document.getElementById("price"),
  };

  const button = {
    add: document.getElementById("add"),
  };

  const table = {
    body: document.getElementById("furniture-list"),
    totalPrice: document.querySelector(".total-price"),
  };

  button.add.addEventListener("click", (e) => {
    e.preventDefault();

    const model = field.model.value;
    const year = field.year.value;
    const description = field.description.value;
    const price = field.price.value;

    if (model == "" || year == "" || description == "" || price == "") {
      return;
    }

    if (isNaN(year) || year < 0 || isNaN(price) || price < 0) {
      return;
    }

    let infoTr = document.createElement("tr");
    infoTr.className = "info";
    infoTr.innerHTML = `<td>${model}</td>
    <td>${Number(price).toFixed(2)}</td>
    <td><button class="moreBtn">More Info</button>
    <button class="buyBtn">Buy it</button></td>`;
    table.body.appendChild(infoTr);

    let hiddenTr = document.createElement("tr");
    hiddenTr.className = "hide";
    hiddenTr.innerHTML = `<td>Year: ${year}</td>
    <td colspan="3">Description: ${description}</td>`;
    table.body.appendChild(hiddenTr);

    const moreInfoBtn = infoTr.querySelector(".moreBtn");
    const buyBtn = infoTr.querySelector(".buyBtn");

    moreInfoBtn.addEventListener("click", (e) => {
      if (e.target.textContent === "More Info") {
        e.target.textContent = "Less Info";
        hiddenTr.style.display = "contents";
      } else {
        e.target.textContent = "More Info";
        hiddenTr.style.display = "none";
      }
    });

    buyBtn.addEventListener("click", (e) => {
      let singlePrice = Number(
        e.target.parentElement.previousElementSibling.textContent
      );
      let totalPrice = Number(table.totalPrice.textContent);

      table.totalPrice.textContent = (singlePrice + totalPrice).toFixed(2);
      table.body.removeChild(infoTr);
      table.body.removeChild(hiddenTr);
    });

    field.model.value = "";
    field.year.value = "";
    field.description.value = "";
    field.price.value = "";
  });
}
