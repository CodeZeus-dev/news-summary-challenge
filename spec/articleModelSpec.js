'use strict';

it('creates an instance of an article', function() {
    expect(article).toBeInstanceOf(Article);
});

it('gets the ID attribute of an article', function() {
    expect(article.getID()).toEqual(1);
});

it('gets the headline attribute of an article', function() {
    expect(article.getHeadline()).toEqual("Sample Headline");
});

it('gets the body attribute of an article', function() {
    expect(article.getBody()).toEqual("Sample Body");
});

it('gets the thumbnail attribute of an article', function() {
    expect(article.getThumbnail()).toEqual("Sample Thumbnail");
});

it('gets the url attribute of an article', function() {
    expect(article.getURL()).toEqual("https://sample.url");
});