var db = require('mongoskin').db('mongodb://localhost:27017/aqp');

db.collection('companies').find().toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
});