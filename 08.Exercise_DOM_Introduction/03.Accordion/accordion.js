function toggle() {
  let button = document.getElementsByClassName("button")[0];
  let text = document.getElementById("extra");
  if (button.innerText.toLowerCase() === "More".toLowerCase()) {
    text.style.display = "block";
    button.innerText = "Less";
  } else if (button.innerText.toLowerCase() === "Less".toLowerCase()) {
    text.style.display = "none";
    button.innerText = "More";
  }
}
