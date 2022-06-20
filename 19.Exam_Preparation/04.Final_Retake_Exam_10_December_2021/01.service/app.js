window.addEventListener("load", solve);

function solve() {
  //  Input Fields
  const input = {
    productType: document.getElementById("type-product"),
    problemDescription: document.getElementById("description"),
    clientName: document.getElementById("client-name"),
    clientPhone: document.getElementById("client-phone"),
  };
  // Main Buttons
  const button = {
    submit: document.querySelector('form button[type="submit"]'),
    clear: document.querySelector("button.clear-btn"),
  };
  // Sections
  const section = {
    receivedOrders: document.getElementById("received-orders"),
    completedOrders: document.getElementById("completed-orders"),
  };

  //   Add functionality to the buttons
  button.submit.addEventListener("click", (ev) => {
    ev.preventDefault();

    // validate input
    const type = input.productType.value;
    const problem = input.problemDescription.value;
    const client = input.clientName.value;
    const pnumber = input.clientPhone.value;

    if (problem == "" || client == "" || pnumber == "") {
      return;
    }

    // Add order info to the received orders section
    let div = document.createElement("div");
    div.className = "container";
    div.innerHTML = `
    <h2>Product type for repair: ${type}</h2>
    <h3>Client information: ${client}, ${pnumber}</h3>
    <h4>Description of the problem: ${problem}</h4>
    <button class="start-btn">Start repair</button>
    <button class="finish-btn">Finish repair</button>`;
    section.receivedOrders.appendChild(div);

    //  Secondary Buttons
    const startBtn = div.querySelector(".start-btn");
    const finishBtn = div.querySelector(".finish-btn");
    finishBtn.disabled = true;

    // Add functionality to secondary buttons
    startBtn.addEventListener("click", () => {
      startBtn.disabled = true;
      finishBtn.disabled = false;
    });

    finishBtn.addEventListener("click", () => {
      // append the div container to the completed orders section
      section.completedOrders.appendChild(div);
      // delete the secondary buttons
      startBtn.remove();
      finishBtn.remove();
    });

    // Clear the input fields
    input.problemDescription.value = "";
    input.clientName.value = "";
    input.clientPhone.value = "";
  });

  button.clear.addEventListener("click", () => {
    // remove the completed orders history
    let completedOrders = Array.from(
      document.querySelectorAll("section#completed-orders div.container")
    );
    completedOrders.forEach((el) => el.remove());
  });
}
