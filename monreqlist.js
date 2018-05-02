var mongodata=require('./monlistdata.js');
 
mongodata.customers(function(res){
    console.log(res);
});