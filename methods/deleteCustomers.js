var deleteCustomers = function(db, deleteRequest, deleteResonse) {
  var dbo = db.db("darko_test");
  var deleteQuery = {
    name: deleteRequest.params.customer_name,
  };

  dbo.collection("customers").deleteOne(deleteQuery, function(err, obj) {
    if (err) throw err;
    console.log(`${obj.result.n} documents deleted`);
    
    deleteResonse.json({
      success: true,
    });
  });
}

module.exports = deleteCustomers;
