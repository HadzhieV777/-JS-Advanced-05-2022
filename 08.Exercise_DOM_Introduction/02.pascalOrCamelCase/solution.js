function solve() {
  let userInput = document.getElementById("text").value.split(" ");
  let namingConvention = document.getElementById("naming-convention").value;
  let result = "";

  if (namingConvention === "Camel Case") {
    result = camelCaseConversion(userInput);
  } else if (namingConvention === "Pascal Case") {
    result = pascalCaseConversion(userInput);
  } else {
    result = "Error!";
  }

  document.getElementById("result").textContent = result;

  function camelCaseConversion(text) {
    let result = text
      .map((string) => string.toLowerCase())
      .map((string, i) => {
        if (i !== 0) {
          return string[0].toUpperCase() + string.substring(1);
        }
        return string;
      });

    return result.join("");
  }

  function pascalCaseConversion(text) {
    let result = text
      .map((string) => string.toLowerCase())
      .map((string, i) => {
        return string[0].toUpperCase() + string.substring(1);
      });

    return result.join("");
  }
}
