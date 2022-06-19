window.addEventListener("load", solve);

function solve() {
  // Fields
  let postTitleField = document.getElementById("post-title");
  let postCategoryField = document.getElementById("post-category");
  let postContentField = document.getElementById("post-content");

  // Related posts and published posts lists
  let relatedPostsContainer = document.getElementById("relatedPosts");
  let publishedList = document.getElementById("published-list");

  // Main buttons
  let publishBtn = document.getElementById("publish-btn");
  let clearBtn = document.getElementById("clear-btn");

  publishBtn.addEventListener("click", () => {
    // Read the input fields
    let title = postTitleField.value;
    let category = postCategoryField.value;
    let content = postContentField.value;

    // Validate the input fields
    if (title == "" || category == "" || content == "") {
      return;
    }

    //  create list items
    let newLiElement = document.createElement("li");
    newLiElement.className = "rpost";
    newLiElement.innerHTML = `<article>
      <h4>${title}</h4>
      <p>Category: ${category}</p>
      <p>Content: ${content}</p>
      </article>
      <button class="action-btn edit">Edit</button>
      <button class="action-btn approve">Approve</button>
      `;

    // Add functionality to the secondary buttons
    let editBtn = newLiElement.querySelector(".edit");
    let approveBtn = newLiElement.querySelector(".approve");
    editBtn.addEventListener("click", editPost);
    approveBtn.addEventListener("click", approvePost);

    // Append the new Li to the related posts container
    relatedPostsContainer.appendChild(newLiElement);

    // Clear the fields
    postTitleField.value = "";
    postCategoryField.value = "";
    postContentField.value = "";

    function editPost() {
      // Populate input fields
      postTitleField.value = title;
      postCategoryField.value = category;
      postContentField.value = content;

      // Remove the list item
      newLiElement.remove();
    }

    function approvePost() {
      // move the list item from the first to the second list
      publishedList.appendChild(newLiElement);

      // remove buttons
      editBtn.remove();
      approveBtn.remove();
    }
  });

  clearBtn.addEventListener("click", () => {
    // clear the uploaded posts section
    publishedList.innerHTML = "";
  });
}

// Second way with objects
// function solve() {
//   const input = {
//       title: document.getElementById('post-title'),
//       category: document.getElementById('post-category'),
//       content: document.getElementById('post-content')
//   };
//   const lists = {
//       review: document.getElementById('review-list'),
//       published: document.getElementById('published-list')
//   };
//   document.getElementById('publish-btn').addEventListener('click', publish);
//   document.getElementById('clear-btn').addEventListener('click', clear);

//   function publish(event) {
//       event.preventDefault();

//       // read input fields
//       const title = input.title.value;
//       const category = input.category.value;
//       const content = input.content.value;

//       // validate input
//       if (title == '' || category == '' || content == '') {
//           return;
//       }

//       // create list item
//       const li = document.createElement('li');
//       li.className = 'rpost';
//       li.innerHTML = `<article>
//           <h4>${title}</h4>
//           <p>Category: ${category}</p>
//           <p>Content: ${content}</p>
//       </article>
//       <button class="action-btn edit">Edit</button>
//       <button class="action-btn approve">Approve</button>`;

//       // * add functionality to buttons
//       const editBtn = li.querySelector('.edit');
//       const approveBtn = li.querySelector('.approve');
//       editBtn.addEventListener('click', edit);
//       approveBtn.addEventListener('click', approve);

//       // append to first list
//       lists.review.appendChild(li);

//       // clear input fields
//       input.title.value = '';
//       input.category.value = '';
//       input.content.value = '';

//       function edit() {
//           // populate input fields with values
//           input.title.value = title;
//           input.category.value = category;
//           input.content.value = content;

//           // remove list item from list
//           li.remove();
//       }

//       function approve() {
//           // move list item from first list to second list
//           lists.published.appendChild(li);
//           // remove action buttons
//           editBtn.remove();
//           approveBtn.remove();
//       }
//   }

//   function clear() {
//       // set second list HTML to empty string
//       lists.published.innerHTML = '';
//   }
// }
