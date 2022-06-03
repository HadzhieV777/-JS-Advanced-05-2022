function jsonParser(arr) {
  let result = [];
  let pattern = /[^\|]+/g;
  let tokens = arr
    .shift()
    .match(pattern)
    .map((el) => el.trim());

  for (let input of arr) {
    let match = input.match(pattern).map((el) => el.trim());

    let obj = {};
    tokens.forEach((el, i) => {
      if (isNaN(match[i])) {
        obj[el] = match[i];
      } else {
        obj[el] = Number(Number(match[i]).toFixed(2));
      }
    });

    result.push(obj);
  }

  return JSON.stringify(result);
}

console.log(
  jsonParser([
    "| Town | Latitude | Longitude |",
    "| Sofia | 42.696552 | 23.32601 |",
    "| Beijing | 39.913818 | 116.363625 |",
  ])
);

// jsonParser([
//   "| Town | Latitude | Longitude |",
//   "| Veliko Turnovo | 43.0757 | 25.6172 |",
//   "| Monatevideo | 34.50 | 56.11 |",
// ]);
