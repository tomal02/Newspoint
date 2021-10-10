describe('Stories', () => {
  let news = new Stories();

  it('can return all stories', () => {
    news.stories = ['testStory1', 'testStory2'];
    expect(stories.getAll()).toEqual(['testStory1', 'testStory2']);
  });
});
