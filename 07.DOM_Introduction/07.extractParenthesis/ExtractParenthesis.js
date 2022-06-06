function extract(content) {
  let text = document.getElementById("content").innerText;
  let result = "";

  const pattern = /\((.+?)\)/g;
  let match = pattern.exec(text);

  while (match != null) {
    result += match[1] + "; ";
    match = pattern.exec(text);
  }

  return result;
}
