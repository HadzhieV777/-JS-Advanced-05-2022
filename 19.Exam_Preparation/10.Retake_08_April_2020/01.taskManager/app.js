function solve() {
  let [_, open, inProgress, complete] = document.querySelectorAll(
    "div.wrapper > section > div:nth-of-type(2)"
  );
  const fields = {
    task: document.getElementById("task"),
    description: document.getElementById("description"),
    date: document.getElementById("date"),
  };

  const button = {
    add: document.getElementById("add").addEventListener("click", newTask),
  };

  function newTask(e) {
    e.preventDefault();

    // Validate the input
    if (
      fields.task.value == "" ||
      fields.description.value == "" ||
      fields.date.value == ""
    ) {
      return;
    }

    // Create the section with all needed childs
    let article = document.createElement("article");
    article.appendChild(createNewElement("h3", fields.task.value));
    article.appendChild(
      createNewElement("p", `Description: ${fields.description.value}`)
    );
    article.appendChild(
      createNewElement("p", `Due Date: ${fields.date.value}`)
    );

    const div = createNewElement("div", "", "flex");

    // Create secondary buttons
    const startBtn = createNewElement("button", "Start", "green");
    const deleteBtn = createNewElement("button", "Delete", "red");
    const finishBtn = createNewElement("button", "Finish", "orange");

    div.appendChild(startBtn);
    div.appendChild(deleteBtn);
    article.appendChild(div);
    open.appendChild(article);

    // CLear the input fields
    Object.values(fields).forEach((f) => (f.value = ""));

    // Add functionality to the secondary buttons
    startBtn.addEventListener("click", () => {
      startBtn.remove();
      div.appendChild(finishBtn);
      inProgress.appendChild(article);
    });

    deleteBtn.addEventListener("click", () => {
      article.remove();
    });

    finishBtn.addEventListener("click", () => {
      div.remove();
      complete.appendChild(article);
    });
  }

  function createNewElement(type, content, className) {
    const element = document.createElement(type);
    element.textContent = content;
    if (className) {
      element.className = className;
    }
    return element;
  }
}
