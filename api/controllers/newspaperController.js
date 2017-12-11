// 'use strict';


var news = require('../models/newspaperModel');

module.exports = function (app) {

    app.get('/getAllNews', (req, res) => {
        news.find({}, (err, result) => {
            if (result.length > 0) {
                return res.json({
                    code: 200,
                    data: result,
                })
            } else {
                return res.json({
                    code: 400,
                    ms: 'a',
                })
            }
        })
    });

    app.get('/listAllTags', (req, res) => {
        news.find({}, {tag: 1}, (err, result) => {
            if (result.length > 0) {

                return res.json({
                    code: 200,
                    data: result
                })
            } else {
                return res.json({
                    code: 400,
                    ms: 'Error',
                })
            }
        });
    });

    app.get('/listAllCategories', (req, res) => {
        news.find({}, {category: 1}, (err, result) => {
            if (result.length > 0) {

                return res.json({
                    code: 200,
                    data: result
                })
            } else {
                return res.json({
                    code: 400,
                    ms: 'Error',
                })
            }
        });
    });

    app.get('/getArticalByTags/:tags', (req, res) => {
        console.log(req.params.tags);
        var tags = req.params.tags;
        news.find({tag: {$eq: tags}}, (err, result) => {
            //console.log(result)
            if (result.length > 0) {

                return res.json({
                    code: 200,
                    data: result
                })
            } else {
                return res.json({
                    code: 400,
                    ms: 'Error',
                })
            }
        });
    });

    app.get('/getArticalByCategories/:cat', (req, res) => {
        console.log(req.params.cat);
        var cat = req.params.cat;
        news.find({category: {$eq: cat}}, (err, result) => {
            //console.log(result)
            if (result.length > 0) {
                return res.json({
                    code: 200,
                    data: result
                })
            } else {
                return res.json({
                    code: 400,
                    ms: 'Error',
                })
            }
        });
    });
};
