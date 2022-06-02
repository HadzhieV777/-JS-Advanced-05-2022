function create(words) {
  let output = document.querySelector("#content");
  words.forEach((w) => {
    let div = document.createElement("div");
    let p = document.createElement("p");
    p.textContent = w;
    p.style.display = "none";

    div.addEventListener("click", (e) => {
      let p = e.currentTarget.firstElementChild;
      p.style.display = "block";
    });

    div.appendChild(p);
    output.appendChild(div);
  });
}
