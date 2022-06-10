function lockedProfile() {
  let buttons = document.querySelectorAll("button");

  Array.from(buttons).forEach((btn) => btn.addEventListener("click", showInfo));

  function showInfo(event) {
    let profile = event.target.parentElement;
    let lockedProfile = profile.querySelector('input[value="lock"]');

    if (!lockedProfile.checked) {
      let hiddenData = profile.querySelector("div");

      if (event.target.textContent === "Hide it") {
        hiddenData.style.display = "none";
        event.target.textContent = "Show more";
      } else {
        hiddenData.style.display = "block";
        event.target.textContent = "Hide it";
      }
    }
  }
}
