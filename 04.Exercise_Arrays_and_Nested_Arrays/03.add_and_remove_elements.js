function solve(commandsArr) {
  let num = 0;
  let result = [];

  commandsArr.forEach((c) => {
    num++;

    if (c === "add") {
      result.push(num);
    } else {
      result.pop();
    }
  });

  if (result.length > 0) {
      return result.join("\n");
  } else {
      return 'Empty'
  }
}

console.log(solve(["add", "add", "add", "add"]));
console.log(solve(["add", "add", "remove", "add", "add"]));
console.log(solve(["remove", "remove", "remove"]));
