function solve() {
  let [generateBtn, buyBtn] = document.querySelectorAll("button");
  let [inputArea, outputArea] = document.querySelectorAll("textarea");
  let tbody = document.querySelector("tbody");

  generateBtn.addEventListener("click", generateFurniture);
  buyBtn.addEventListener("click", buyFurniture);

  function generateFurniture(e) {
    let furnitureArr = JSON.parse(inputArea.value);

    furnitureArr.forEach((furniture) => {
      let tr = document.createElement("tr");

      Object.keys(furniture)
        .sort((a, b) => a.length - b.length)
        .forEach((key, i) => {
          let td = document.createElement("td");

          if (i === 0) {
            let img = document.createElement("img");
            img.src = furniture[key];
            td.appendChild(img);
          } else {
            let p = document.createElement("p");
            p.textContent = furniture[key];
            td.appendChild(p);
          }

          tr.appendChild(td);
        });

      let td = document.createElement("td");
      let inputEl = document.createElement("input");
      inputEl.setAttribute("type", "checkbox");
      td.appendChild(inputEl);
      tr.appendChild(td);

      tbody.appendChild(tr);
    });
  }

  function buyFurniture(e) {
    let inputs = tbody.querySelectorAll('input[type="checkbox"]');
    let furniture = {
      names: [],
      totalPrice: 0,
      avgDecFactor: [],
    };

    Array.from(inputs).forEach((input) => {
      if (input.checked) {
        let tr = input.parentElement.parentElement;
        let name = tr.children[1].firstElementChild.textContent;
        let price = Number(tr.children[2].firstElementChild.textContent);
        let decFactor = Number(tr.children[3].firstElementChild.textContent);
        furniture.names.push(name);
        furniture.totalPrice += price;
        furniture.avgDecFactor.push(decFactor);
      }
    });

    outputArea.value = `Bought furniture: ${furniture.names.join(
      ", "
    )}\nTotal price: ${furniture.totalPrice.toFixed(
      2
    )}\nAverage decoration factor: ${
      furniture.avgDecFactor.reduce((a, c) => (a += c), 0) /
      furniture.avgDecFactor.length
    }`;
  }
}
