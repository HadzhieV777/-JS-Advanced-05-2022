function addItem() {
  let input = document.getElementById("newItemText");
  let listOfItems = document.getElementById("items");

  let inputValue = input.value;
  let newLi = document.createElement("li");
  newLi.textContent = inputValue;
  listOfItems.appendChild(newLi);
  input.value = "";
}
