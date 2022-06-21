function solution() {
  const section = {
    gifts: document.querySelector("section.card > ul"),
    sentGifts: document.querySelectorAll("section ul")[1],
    discartedGifts: document.querySelectorAll("section ul")[2],
  };

  const addButton = document.querySelector("button");
  const input = document.querySelector(
    "body > div > section:nth-child(1) > div > input[type=text]"
  );

  addButton.addEventListener("click", () => {
    // Second way to take the button with the button event
    // let input = event.target.previousElementSibling;
    if (input.value == "") {
      return;
    }

    // Create new Li
    let li = document.createElement("li");
    li.className = "gift";
    li.textContent = input.value;

    // Create secondary buttons
    let sendBtn = document.createElement("button");
    sendBtn.id = "sendButton";
    sendBtn.textContent = "Send";
    li.appendChild(sendBtn);

    let discardBtn = document.createElement("button");
    discardBtn.id = "discardButton";
    discardBtn.textContent = "Discard";
    li.appendChild(discardBtn);

    // Add functionality to the secondary buttons
    sendBtn.addEventListener("click", () => {
      sendBtn.remove();
      discardBtn.remove();
      section.sentGifts.appendChild(li);
    });

    discardBtn.addEventListener("click", () => {
      sendBtn.remove();
      discardBtn.remove();
      section.discartedGifts.appendChild(li);
    });

    // Assign the new gift to the next section
    section.gifts.appendChild(li);
    input.value = "";

    // Sort the gifts alphabetically
    Array.from(section.gifts.querySelectorAll("li"))
      .sort((a, b) => a.textContent.localeCompare(b.textContent))
      .forEach((li) => section.gifts.appendChild(li));
  });
}
