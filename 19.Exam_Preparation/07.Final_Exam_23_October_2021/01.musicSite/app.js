window.addEventListener("load", solve);

function solve() {
  // Read the input
  const fields = {
    genre: document.getElementById("genre"),
    songName: document.getElementById("name"),
    songAuthor: document.getElementById("author"),
    creationDate: document.getElementById("date"),
  };
  const button = {
    add: document.getElementById("add-btn"),
  };
  const containers = {
    all: document.querySelector(".all-hits-container"),
    saved: document.querySelector(".saved-container"),
  };
  // Create likes counter
  let totalLikes = 0;

  // Add functionality to main buttons
  button.add.addEventListener("click", (e) => {
    e.preventDefault();

    const genre = fields.genre.value;
    const song = fields.songName.value;
    const author = fields.songAuthor.value;
    const date = fields.creationDate.value;

    // validate the input
    if (genre == "" || song == "" || author == "" || date == "") {
      return;
    }

    let div = document.createElement("div");
    div.className = "hits-info";

    div.innerHTML = `
    <img src="./static/img/img.png">
    <h2>Genre: ${genre}</h2>
    <h2>Name: ${song}</h2>
    <h2>Author: ${author}</h2>
    <h3>Date: ${date}</h3>
    <button class="save-btn">Save song</button>
    <button class="like-btn">Like song</button>
    <button class="delete-btn">Delete</button>`;
    containers.all.appendChild(div);

    // Add functionality to the  secondary buttons
    const saveBtn = div.querySelector(".save-btn");
    const likeBtn = div.querySelector(".like-btn");
    const deleteBtn = div.querySelector(".delete-btn");

    saveBtn.addEventListener("click", () => {
      saveBtn.remove();
      likeBtn.remove();
      containers.saved.appendChild(div);
    });

    likeBtn.addEventListener("click", () => {
      totalLikes++;
      let p = document.querySelector("div.likes > p");
      p.textContent = `Total Likes: ${totalLikes}`;

      likeBtn.disabled = true;
    });
    deleteBtn.addEventListener("click", (e) => {
      e.target.parentElement.remove();
    });

    // Clear input values
    fields.genre.value = "";
    fields.songName.value = "";
    fields.songAuthor.value = "";
    fields.creationDate.value = "";
  });
}
