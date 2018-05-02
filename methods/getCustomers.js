var getCustomers = function(db, renderCallback) {
  var dbo = db.db("darko_test");

  var query = {};
  dbo.collection("customers").find(query).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);

    if (renderCallback) {
      renderCallback(result);
    }
  });
}

module.exports = getCustomers;
