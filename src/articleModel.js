'use strict';

class Article {
    constructor(id, headline, summary, thumbnail, url) {
        this.id = id;
        this.headline = headline;
        this.summary = summary;
        this.thumbnail = thumbnail;
        this.url = url;
    }

    getID() {
        return this.id;
    }

    getHeadline() {
        return this.headline;
    }

    getSummary() {
        return this.summary;
    }

    getThumbnail() {
        return this.thumbnail;
    }

    getURL() {
        return this.url;
    }
}