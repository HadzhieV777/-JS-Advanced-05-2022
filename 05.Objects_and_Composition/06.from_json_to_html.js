function htmlParser(jsonArr) {
  let arr = JSON.parse(jsonArr);

  let outputArr = ["<table>"];
  outputArr.push(makeKeyRow(arr));
  arr.forEach((object) => outputArr.push(makeValueRow(object)));
  outputArr.push("</table>");

  console.log(outputArr.join("\n"));

  function makeKeyRow(arr) {
    let result = "   <tr>";
    Object.keys(arr[0]).forEach((key) => {
      result += `<th>${escapeHtml(key)}</th>`;
    });
    result += "</tr>";
    return result;
  }

  function makeValueRow(arr) {
    let result = "   <tr>";
    Object.values(arr).forEach((value) => {
      result += `<td>${escapeHtml(value)}</td>`;
    });
    result += "</tr>";
    return result;
  }

  function escapeHtml(value) {
    return value
      .toString()
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }
}

htmlParser(`[
    {"Name":"Stamat", "Score":5.5},
    {"Name":"Rumen","Score":6}
]`);

htmlParser(`[
    {"Name":"Pesho", "Score":4, " Grade":8},
    {"Name":"Gosho", "Score":5, " Grade":8},
    {"Name":"Angel", "Score":5.50, " Grade":10}
]`);
