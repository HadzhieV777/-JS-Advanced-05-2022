function solve() {
  let addButtons = document.querySelectorAll(".add-product");
  let checkOutButton = document.querySelector(".checkout");
  let textArea = document.querySelector("textarea");
  let listOfProducts = {};

  Array.from(addButtons).forEach((btn) =>
    btn.addEventListener("click", addToCart)
  );
  checkOutButton.addEventListener('click', checkOut)

  function addToCart(event) {
     let addProductDiv = event.target.parentElement
     let product = addProductDiv.previousElementSibling.firstElementChild.textContent
     let money = addProductDiv.nextElementSibling.textContent

     if (!listOfProducts[product]) {
        listOfProducts[product] = 0
     }

     listOfProducts[product] += Number(money)

   let result = `Added ${product} for ${money} to the cart.\n`
   textArea.value += result;
   }
  
   function checkOut(event) {
      let total = Object.values(listOfProducts).reduce((a, b) => a += b,0)
      let allButtons = document.querySelectorAll('button')
      textArea.value += `You bought ${Object.keys(listOfProducts).join(', ')} for ${total.toFixed(2)}.`;
      Array.from(allButtons).forEach(btn => btn.disabled = true);
   }
}
