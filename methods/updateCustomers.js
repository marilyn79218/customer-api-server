var updateCustomers = function(db, updateRequest, updateResonse) {
  var dbo = db.db("darko_test");

  var updateQuery = {
    name: updateRequest.params.customer_name,
  };
  var newValue = {
    $set: {
      ...updateRequest.body,
    },
  };
  // var myquery = { address: "Mountain 21" };
  // var newvalues = { $set: {name: "Mickey", address: "Canyon 123" } };

  dbo.collection("customers").updateOne(updateQuery, newValue, function(err, res) {
    if (err) throw err;
    console.log('1 document updated');
    
    updateResonse.json({
      success: true,
    });
  });
}

module.exports = updateCustomers;
