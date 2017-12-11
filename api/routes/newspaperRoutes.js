'use strict';
module.exports = function (app) {
    var newspaper = require('../controllers/newspaperController');

    //newspaper routes
    require('../controllers/newspaperController')(app);
    require('../controllers/addnewpaper')(app);
}