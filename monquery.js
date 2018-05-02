var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://root:1qaz2wsx@127.0.0.1:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("darko_test");
//   var query = { address: "Apple st 652" };
  var query = {};
  dbo.collection("customers").find(query).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});