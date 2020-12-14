'use strict';

it('creates an empty articles\'s array upon initialisation', function() {
    expect(articleList.getArticles()).toEqualArray([]);
});

it('adds a new article instance to the list of articles', function() {
    articleList.addArticle(article);
    expect(articleList.getArticles()).toContain(article);
});

