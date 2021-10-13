describe('Story', () => {
  it('can store attributes correctly', () => {
    let story = new Story({
      title: 'title1',
      body: 'body1',
      image: 'image1',
      source: 'source1',
    });
    expect(story.title).toEqual('title1');
    expect(story.body).toEqual('body1');
    expect(story.image).toEqual('image1');
    expect(story.source).toEqual('source1');
  });
});
