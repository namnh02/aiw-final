'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var news = require('../models/dataExample');
var NewsSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    shortIntro: {
        type: String
    },
    content: {
        type: String,
        required: true
    },
    date_created: {
        type: Date,
        default: Date.now
    },
    author: {
        type: String
    },
    related_article: {
        type: String
    },
    comment: {
        type: Array
    },
    tag: {
        type: Array
    },
    category: {
        type: String
    }
});

module.exports = mongoose.model('News', NewsSchema);