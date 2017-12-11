var news = require('../models/newspaperModel');
var arr = require('../models/dataExample');
module.exports = function (app) {
    app.post('/add', (req, res) => {
        arr.map(val =>{
            var obj = news(val);
            obj.save(function (err, rs) {
                if(err){
                    console.log("err",err)
                }
                return res.json({
                    d: obj,
                })
            })

        })
    })
}