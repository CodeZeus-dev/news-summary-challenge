'use strict';

(function(exports) {
    function retrieveArticleSummary(url) {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', `http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=${url}`);
        xhr.send();
        xhr.onload = function() {
            return JSON.parse(xhr.response).sentences.join("");
        }
    }

    exports.retrieveArticleSummary = retrieveArticleSummary;
})(this)