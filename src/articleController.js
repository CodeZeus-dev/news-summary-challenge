'use strict';

class ArticleController {
    constructor(articleList = new ArticleList(), articleListView = new ArticleListView(articleList)) {
        this.articleList = articleList;
        this.articleListView = articleListView;
    }

    updateArticleList(apiResults) {
        apiResults.map(function(article) {
            this.articleList.addArticle(
                article.id,
                article.fields.headline,
                retrieveArticleSummary(article.webUrl),
                article.fields.thumbnail,
                article.webUrl   
        )});
    }

    retrieveCurrentArticles() {
        retrieveAPIData(this.updateArticleList);   
    }

    renderArticleHeadlinesHtml() {
        document.getElementById('article-headlines').innerHTML = this.articleListView.renderListHtml();
        console.log(this.articleListView.renderListHtml());
    }
}

let newsController = new ArticleController();
newsController.retrieveCurrentArticles();
newsController.renderArticleHeadlinesHtml();