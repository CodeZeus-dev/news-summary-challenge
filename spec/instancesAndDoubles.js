'use strict';

let article = new Article(1, "Sample Headline", "Sample Body", "Sample Thumbnail", "https://sample.url");
let articleDouble = double('Article', {
    getID: 2,
    getHeadline: "Double: Sample Headline",
    getBody: "Double: Sample Body",
    getThumbnail: "Double: Sample Thumbnail",
    getURL: "https://double.sample.url"
});
let articleList = new ArticleList();