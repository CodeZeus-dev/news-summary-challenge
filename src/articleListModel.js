'use strict';

class ArticleList {
    constructor() {
        this.articlesList = []; 
    }

    getArticles() {
        return this.articlesList;
    }

    addArticle(article) {
        this.articlesList.push(article);
    }
}