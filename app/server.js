var MongoClient = require('mongodb').MongoClient;
var express = require("express");
var bodyParser = require('body-parser');

var getCustomers = require('./methods/getCustomers.js');
var createCustomers = require('./methods/createCustomers.js');
var deleteCustomers = require('./methods/deleteCustomers.js');
var updateCustomers = require('./methods/updateCustomers.js');

var app = express();
var router = express.Router();

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
app.set("view engine", "jade");
//set view directory
app.set("views", "app/MyViews");
app.use(bodyParser.json());

app.get('/customer',function(req, res) {

  getCustomers(db, function(recordset) {
    res.render('customerPageTP', {
      customers: recordset
    });
  });
});

router.route('/')
  .post(function(req, res) {
    console.log('create req', req.body);

    createCustomers(db, req, res);
  });

router.route('/:customer_name')
  .delete(function(req, res) {
    console.log('delete param', req.params.customer_name);

    deleteCustomers(db, req, res);
  })
  .put(function(req, res) {
    console.log('update param', req.params.customer_name);

    updateCustomers(db, req, res);
  });

app.use('/customer', router);
