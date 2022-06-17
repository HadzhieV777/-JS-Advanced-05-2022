window.addEventListener("load", solution);

function solution() {
  //  Fields
  let fullNameField = document.getElementById("fname");
  let emailField = document.getElementById("email");
  let phoneField = document.getElementById("phone");
  let addressField = document.getElementById("address");
  let postCodeField = document.getElementById("code");

  // Backup field Values
  let copyOfFullNameField = "";
  let copyOfEmailField = "";
  let copyOfPhoneField = "";
  let copyOfAddressField = "";
  let copyOfPostCodeField = "";

  //  Information preview
  let previewUl = document.getElementById("infoPreview");

  //  Buttons
  let submitButton = document.getElementById("submitBTN");
  let editButton = document.getElementById("editBTN");
  let continueButton = document.getElementById("continueBTN");

  submitButton.addEventListener("click", () => {
    // Take input value
    if (fullNameField.value === "" || emailField.value === "") {
      return;
    }

    let previewCOntent = `
        <li>Full Name: ${fullNameField.value}</li>
        <li>Email: ${emailField.value}</li>
        <li>Phone Number: ${phoneField.value}</li>
        <li>Address: ${addressField.value}</li>
        <li>Postal Code: ${postCodeField.value}</li>
        `;

    previewUl.innerHTML = previewCOntent;

    // Assign backup values
    copyOfFullNameField = fullNameField.value;
    copyOfEmailField = emailField.value;
    copyOfPhoneField = phoneField.value;
    copyOfAddressField = addressField.value;
    copyOfPostCodeField = postCodeField.value;

    //  Clear fields
    fullNameField.value = "";
    emailField.value = "";
    phoneField.value = "";
    addressField.value = "";
    postCodeField.value = "";

    // Enable/ Disable buttons
    submitButton.disabled = true;
    editButton.disabled = false;
    continueButton.disabled = false;
  });

  editButton.addEventListener("click", () => {
    //  Get user data back to the form
    fullNameField.value = copyOfFullNameField;
    emailField.value = copyOfEmailField;
    phoneField.value = copyOfPhoneField;
    addressField.value = copyOfAddressField;
    postCodeField.value = copyOfPostCodeField;

    // Delete InnerHTML of previewUl
    previewUl.innerHTML = "";

    // Clear Backups
    copyOfFullNameField = "";
    copyOfEmailField = "";
    copyOfPhoneField = "";
    copyOfAddressField = "";
    copyOfPostCodeField = "";

    // Enable/ Disable buttons
    submitButton.disabled = false;
    editButton.disabled = true;
    continueButton.disabled = true;
  });

  continueButton.addEventListener("click", () => {
    let divElement = document.querySelector("#block");
    divElement.innerHTML = "";
    let thankYouMessage = document.createElement("h3");
    thankYouMessage.textContent = "Thank you for your reservation!";
    divElement.appendChild(thankYouMessage);
  });
}
