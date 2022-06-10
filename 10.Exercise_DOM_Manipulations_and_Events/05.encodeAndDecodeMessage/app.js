function encodeAndDecodeMessages() {
  let inputArea = document.querySelector(
    'textarea[placeholder="Write your message here..."]'
  );
  let outputArea = document.querySelector(
    'textarea[placeholder="No messages..."]'
  );
  let [encodeBtn, decodeBtn] = document.querySelectorAll("button");

  encodeBtn.addEventListener("click", encodeMessage);
  decodeBtn.addEventListener("click", decodeMessage);

  function encodeMessage(event) {
    let message = inputArea.value;
    let result = message
      .split("")
      .map((char) => char.charCodeAt(0) + 1)
      .map((num) => String.fromCharCode(num))
      .join("");

    outputArea.value = result;
    inputArea.value = "";
  }

  function decodeMessage(event) {
    let message = outputArea.value;
    let result = message
      .split("")
      .map((char) => char.charCodeAt(0) - 1)
      .map((num) => String.fromCharCode(num))
      .join("");

    outputArea.value = result;
  }
}
