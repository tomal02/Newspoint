class Stories {
  constructor() {
    this.stories = [];
  }

  getStory(index) {
    return this.stories[index];
  }

  getAll() {
    return this.stories;
  }

  addStory(story) {
    this.stories.push(story);
  }
}
