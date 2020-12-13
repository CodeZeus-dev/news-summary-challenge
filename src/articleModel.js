'use strict';

class Article {
    constructor(id, title, body, thumbnail, url) {
        this.id = id;
        this.headline = title;
        this.body = body;
        this.thumbnail = thumbnail;
        this.url = url;
    }

    getID() {
        return this.id;
    }

    getHeadline() {
        return this.headline;
    }

    getBody() {
        return this.body;
    }

    getThumbnail() {
        return this.thumbnail;
    }

    getURL() {
        return this.url;
    }
}