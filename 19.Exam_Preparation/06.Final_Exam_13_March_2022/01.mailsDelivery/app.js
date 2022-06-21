function solve() {
  const field = {
    recipient: document.getElementById("recipientName"),
    title: document.getElementById("title"),
    message: document.getElementById("message"),
  };

  const button = {
    add: document.getElementById("add"),
    reset: document.getElementById("reset"),
  };

  const list = {
    mails: document.getElementById("list"),
    sent: document.querySelector(".sent-list"),
    deleted: document.querySelector(".delete-list"),
  };

  //   Add functionality to main buttons
  button.add.addEventListener("click", (event) => {
    event.preventDefault();

    // Read and validate the input
    let recipient = field.recipient.value;
    let title = field.title.value;
    let message = field.message.value;

    if (recipient == "" || title == "" || message == "") {
      return;
    }

    // Add email info to the emails list
    const li = document.createElement("li");
    li.innerHTML = `<h4>Title: ${title}</h4>
    <h4>Recipient Name: ${recipient}</h4>
    <span>${message}</span>
    <div id="list-action">
      <button type="submit" id="send">Send</button>
      <button type="submit" id="delete">Delete</button>
    </div>`;

    list.mails.appendChild(li);
    clearFields();

    // Add functionality to the secondary buttons
    let sendBtn = li.querySelector("#list-action").firstElementChild;
    let deleteBtn = li.querySelector("#list-action").lastElementChild;

    sendBtn.addEventListener("click", () => {
      li.innerHTML = `<span>To: ${recipient}</span>
        <span>Title: ${title}</span>
        <div class="btn">
           <button type="submit" class="delete">Delete</button>
        </div>`;
      list.sent.appendChild(li);

      let secondDeleteBtn = li.querySelector(".delete");
      secondDeleteBtn.addEventListener("click", () => {
        li.innerHTML = `<span>To: ${recipient}</span>
        <span>Title: ${title}</span>`;
        list.deleted.appendChild(li);
      });
    });

    deleteBtn.addEventListener("click", () => {
      li.innerHTML = `<span>To: ${recipient}</span>
        <span>Title: ${title}</span>`;
      list.deleted.appendChild(li);
    });
  });

  button.reset.addEventListener("click", (event) => {
    event.preventDefault();
    clearFields();
  });

  function clearFields() {
    field.recipient.value = "";
    field.title.value = "";
    field.message.value = "";
  }
}
solve();
