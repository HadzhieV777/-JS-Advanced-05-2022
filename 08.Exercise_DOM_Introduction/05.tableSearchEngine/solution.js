function solve() {
  document.querySelector("#searchBtn").addEventListener("click", onClick);
  let searchField = document.querySelector("#searchField");

  function onClick() {
    let searchValue = searchField.value;
    let rows = document.querySelector("tbody").children;
    Array.from(rows).forEach((td) => {
      td.removeAttribute("class", "select");
      if (td.textContent.includes(searchValue)) {
        td.setAttribute("class", "select");
      }
    });
    searchField.value = "";
  }
}
