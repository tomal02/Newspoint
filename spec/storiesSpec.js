describe('Stories', () => {
  let news = new Stories();

  it('can return all stories', () => {
    news.stories = ['testStory1', 'testStory2'];
    expect(news.getAll()).toEqual(['testStory1', 'testStory2']);
  });
});
