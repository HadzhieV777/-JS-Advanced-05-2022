function validate() {
  document.getElementById("email").addEventListener("change", validateEmail);

  function validateEmail(event) {
    const pattern =
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

    if (pattern.test(event.target.value)) {
      event.target.classList.remove("error");
    } else {
      event.target.classList.add("error");
    }
  }
}
