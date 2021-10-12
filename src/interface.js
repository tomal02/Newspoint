document.addEventListener('DOMContentLoaded', () => {
  const stories = new Stories();

  const fetchStories = () => {
    fetch('https://enhkjf1ko7k3jgo.m.pipedream.net')
      .then((response) => response.json())
      .then((data) => {
        data.storys.forEach((story) => {
          stories.addStory(
            new Story({
              title: story.webTitle,
              body: story.fields.bodyText,
              image: story.fields.thumbnail,
              source: story.webUrl,
            })
          );
        });
      });
  };
  fetchStories();
});
