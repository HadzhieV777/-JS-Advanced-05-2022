function solve() {
  //  Form Fields
  const input = {
    firstName: document.getElementById("fname"),
    lastName: document.getElementById("lname"),
    email: document.getElementById("email"),
    dateOfBirth: document.getElementById("birth"),
    position: document.getElementById("position"),
    salary: document.getElementById("salary"),
  };
  //  Button
  let hireButton = document.getElementById("add-worker");

  // Table
  let tableBody = document.getElementById("tbody");

  // Message
  let salaryMessageSpan = document.getElementById("sum");

  //  Total sum of all salaries
  let sumOfSalary = 0;

  hireButton.addEventListener("click", (ev) => {
    ev.preventDefault();

    // read the input
    const fname = input.firstName.value;
    const lname = input.lastName.value;
    const email = input.email.value;
    const date = input.dateOfBirth.value;
    const position = input.position.value;
    const salary = input.salary.value;

    // validate the input
    if (
      fname == "" ||
      lname == "" ||
      email == "" ||
      date == "" ||
      position == "" ||
      salary == ""
    ) {
      return;
    }

    let tableRow = document.createElement("tr");
    tableRow.innerHTML = `<td>${fname}</td>
    <td>${lname}</td>
    <td>${email}</td>
    <td>${date}</td>
    <td>${position}</td>
    <td>${salary}</td>
    <td><button class='fired'>Fired</button> <button class='edit'>Edit</button></td>`;

    tableBody.appendChild(tableRow);

    sumOfSalary += Number(salary);

    // clear input fields
    input.firstName.value = "";
    input.lastName.value = "";
    input.email.value = "";
    input.dateOfBirth.value = "";
    input.position.value = "";
    input.salary.value = "";

    // change the salary message
    salaryMessageSpan.textContent = `${sumOfSalary.toFixed(2)}`;

    // Add functionality to the secondary buttons
    const firedButton = tableRow.querySelector(".fired");
    const editButton = tableRow.querySelector(".edit");
    firedButton.addEventListener("click", fireEmployee);
    editButton.addEventListener("click", edit);

    function edit() {
      // populate input fields
      input.firstName.value = fname;
      input.lastName.value = lname;
      input.email.value = email;
      input.dateOfBirth.value = date;
      input.position.value = position;
      input.salary.value = salary;

      // remove tableRow from tableBody
      tableRow.remove();

      sumOfSalary -= Number(salary);
      salaryMessageSpan.textContent = `${sumOfSalary.toFixed(2)}`;
    }

    function fireEmployee() {
      tableRow.remove();

      sumOfSalary -= Number(salary);
      salaryMessageSpan.textContent = `${sumOfSalary.toFixed(2)}`;
    }
  });
}
solve();
