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
      document.querySelector('#full-story-title').innerText =
        stories.stories[0].title;
      document.querySelector('#full-story-body').innerText =
        stories.stories[0].body;

      const image = document.createElement('img');
      image.src = `${stories.stories[0].image}`;
      document.querySelector('.image-div').appendChild(image);

      document.querySelector('#full-story-source').innerText =
        stories.stories[0].source;
    });
});
