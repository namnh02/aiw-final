var express = require('express'),
    mongoose = require('mongoose'),
    News = require('./api/models/newspaperModel'),
    bodyParser = require('body-parser');
var app = express(),
    port = process.env.PORT || 3000;

//mongodb connect
// mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost/newsdb',{
//     useMongoClient: true
// });

mongoose.connect('mongodb://localhost/newsdb');
mongoose.Promise = global.Promise;
var dbMongo = mongoose.connection;
dbMongo.on('err', console.error.bind(console, 'connect err'))
dbMongo.once("open", function (err, rs) {
    if (!err) {
        console.log('mongodb connect');
    } else {
        console.log('err');
    }
});
//


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//import route


//express listenning
app.listen(port);
console.log('News RESTful API server are listening on port: ' + port);
require('./api/routes/newspaperRoutes')(app);