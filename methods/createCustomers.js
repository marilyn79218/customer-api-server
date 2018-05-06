var createCustomers = function(db, postRequest, postResonse) {
  var dbo = db.db("darko_test");
  var insertList = [...postRequest.body];

  dbo.collection("customers").insertMany(insertList, function(err, res) {
    if (err) throw err;

    console.log("Number of documents inserted: " + res.insertedCount);
    postResonse.json({
      success: true,
    });
  });
}

module.exports = createCustomers;
