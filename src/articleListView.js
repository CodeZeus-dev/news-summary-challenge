'use strict'

class ArticleListView {
    constructor(articleList = new ArticleList()) {
        this.articleList = articleList;
    }

    renderListHtml() {
        console.log(this.articleList.getArticles())
        return '<ul class=list-group>' + 
                this.articleList.getArticles().map(function(article) {
                    return `<li class="list-group-item">
                        <img src=${article.getThumbnail()}><br>
                        <p class="lead">${article.getHeadline()}</p><br>
                        <p>${article.getSummary()}</p>
                    </li>`;
                })
                + '</ul>';
    }
}