var MongoClient = require('mongodb').MongoClient;
var express = require("express");

var getCustomers = require('./methods/getCustomers.js');

var app = express();

var db;
var url = "mongodb://root:1qaz2wsx@127.0.0.1:27017/";
// Initialize connection once
MongoClient.connect(url, function(err, database) {
  if(err) throw err;
  db = database;

  app.listen(3000, function(){
    console.log('Server is running!');
  });
});

//set view engine
app.set("view engine","jade");
//set view directory
app.set("views","MyViews");

app.get('/customer',function(req, res){
  getCustomers(db, function(recordset){
    //console.log(recordset);
    res.render('customerPageTP', { customers:recordset });
  })
});
