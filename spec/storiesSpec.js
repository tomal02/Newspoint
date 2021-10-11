describe('Stories', () => {
  let news = new Stories();

  it('can return all stories', () => {
    news.stories = ['testStory1', 'testStory2'];
    expect(news.getAll()).toEqual(['testStory1', 'testStory2']);
  });

  it('can store story attributes correctly', () => {
    let testStory1 = new Story('title1', 'body1', 'image1', 'source1');
    let testStory2 = new Story('title2', 'body2', 'image2', 'source2');
    news.stories = ['testStory1', 'testStory2'];
    let result = news.getAll();
    expect(result[0].title).toEqual('title1');
    expect(result[0].body).toEqual('title1');
    expect(result[1].source).toEqual('title1');
    expect(result[1].image).toEqual('title1');
  });
});
