function getArticleGenerator(articles) {
  const div = document.getElementById("content");

  return function () {
    if (articles.length > 0) {
      const article = articles.shift();
      const element = document.createElement("article");
      element.textContent = article;
      div.appendChild(element);
    }
  };
}
