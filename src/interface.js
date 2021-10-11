document.addEventListener('DOMContentLoaded', () => {
  let client = new Client();

  function fetchArticles() {
    client
      .getArticles()
      .then((results) => {
        console.log(results);
      })
      .catch((err) => console.log(err));
  }

  fetchArticles();
});
