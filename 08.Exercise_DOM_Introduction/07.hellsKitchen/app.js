function solve() {
  let bestRestaurantInfo = document.querySelector("#bestRestaurant p");
  let bestWorkersInfo = document.querySelector("#workers p");

  document.querySelector("#btnSend").addEventListener("click", onClick);

  function onClick() {
    let input = JSON.parse(document.querySelector("textarea").value);
    let restaurantsInfo = {};

    input.forEach((text) => {
      let [restaurantName, employeesInfo] = text.split(" - ");

      if (!restaurantsInfo.hasOwnProperty(restaurantName)) {
        restaurantsInfo[restaurantName] = [];
      }
      employeesInfo.split(", ").forEach((emplInfo) => {
        let [employeeName, salary] = emplInfo.split(" ");
        let employeData = {
          name: employeeName,
          salary: Number(salary),
        };
        restaurantsInfo[restaurantName].push(employeData);
      });
    });
    let highestAvgSalary = 0;
    let bestRestaurant = "";

    for (let restaurant in restaurantsInfo) {
      let avgSalary =
        restaurantsInfo[restaurant].reduce((a, c) => (a += c.salary), 0) /
        restaurantsInfo[restaurant].length;

      if (avgSalary > highestAvgSalary) {
        highestAvgSalary = avgSalary;
        bestRestaurant = restaurant;
      }
    }

    let result = restaurantsInfo[bestRestaurant].sort(
      (a, b) => b.salary - a.salary
    );
    let workerOutput = "";
    result.forEach((obj) => {
      workerOutput += `Name: ${obj.name} With Salary: ${obj.salary} `;
    });
    bestRestaurantInfo.textContent = `Name: ${bestRestaurant} Average Salary: ${highestAvgSalary.toFixed(
      2
    )} Best Salary: ${result[0].salary.toFixed(2)}`;
    bestWorkersInfo.textContent = workerOutput.trim();
  }
}
