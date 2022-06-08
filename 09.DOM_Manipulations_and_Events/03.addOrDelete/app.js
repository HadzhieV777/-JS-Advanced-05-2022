function addItem() {
  let input = document.getElementById("newItemText");
  let listOfItems = document.getElementById("items");

  let inputValue = input.value;
  if (inputValue === 0) return;

  let newLi = document.createElement("li");
  newLi.textContent = inputValue;

  let button = document.createElement("a");
  let linkText = document.createTextNode("[Delete]");
  button.appendChild(linkText);
  button.href = "#";
  button.addEventListener("click", deleteItem);

  newLi.appendChild(button);
  listOfItems.appendChild(newLi);

  function deleteItem() {
    newLi.remove();
  }
  input.value = "";
}
