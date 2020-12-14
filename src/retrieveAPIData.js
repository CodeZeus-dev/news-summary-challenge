'use strict';

(function(exports){

    function retrieveAPIData(callback){
        let xhr = new XMLHttpRequest();
        xhr.open('GET', `https://content.guardianapis.com/search?show-fields=headline%2Cthumbnail&api-key=${guardianAPIKey}`);
        xhr.send();
        xhr.onload = function() {
            return callback(JSON.parse(xhr.response).response.results);
          };
    }

    exports.retrieveAPIData = retrieveAPIData;
})(this)