function validate() {
  let pattern = /[a-z]+@[a-z]+\.[a-z]+/;
  let inputEl = document.querySelector("#email");

  inputEl.addEventListener("change", validation);

  function validation(e) {
    let match = inputEl.value.match(pattern);

    if (match) {
      inputEl.classList.remove("error");
    } else {
      inputEl.classList.add("error");
    }
  }
}
