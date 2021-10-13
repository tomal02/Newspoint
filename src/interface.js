document.addEventListener('DOMContentLoaded', () => {
  const stories = new Stories();

  fetch('https://enhkjf1ko7k3jgo.m.pipedream.net')
    .then((response) => response.json())
    .then((data) => {
      data.articles.forEach((story) => {
        stories.addStory(
          new Story({
            title: story.webTitle,
            body: story.fields.bodyText,
            image: story.fields.thumbnail,
            source: story.webUrl,
          })
        );
      });
      console.log(stories);
      // document.querySelector('#full-story-title').innerText =
      //   stories.stories[0].body;
    });
});
