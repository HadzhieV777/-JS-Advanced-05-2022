function solve(string, criteria) {
  let arr = JSON.parse(string);

  if (criteria === "all") {
    filterAll();
  } else {
    filterByCriteria();
  }

  function filterAll() {
    arr.forEach((obj, i) => {
      console.log(
        `${i}. ${obj["first_name"]} ${obj["last_name"]} - ${obj["email"]}`
      );
    });
  }

  function filterByCriteria() {
    let [key, value] = criteria.split("-");

    let filteredArr = arr.filter((obj) => obj[key] === value);

    filteredArr.forEach((obj, i) => {
      console.log(
        `${i}. ${obj["first_name"]} ${obj["last_name"]} - ${obj["email"]}`
      );
    });
  }
}

solve(
  `[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`,
  "gender-Female"
);
