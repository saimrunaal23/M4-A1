const db = require('../config/db.manager');
exports.getAllCustomers = function (req, res) {
const customersProduct = db.getCustomersProducts().then(results=>{
console.log(results);
res.status(200).json({
status: 'successfull',
data: results.recordsets[0]
}); // send all the data
});
}
exports.getCustomersByID = function( req, res){
const {id} = req.params; // get id
res.status(200).json({
status: 'no implemented'
});
}
