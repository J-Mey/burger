// Import of the MySQL connection.
var connection = require("../config/connection.js");

var orm = {

//selectAll
selectAll = function(tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
        if (err) {
            throw err;
        }
        cb(result)
    });
},

//insertOne
insertOne = function(burger, devoured, cb) {
    var queryString = "INSERT INTO ?? VALUE ?";
    connection.query(queryString, [burger, devoured], function(err, result) {
        if (err) {
            throw err;
        }
        cb(result)
    });
},

//updateOne
updateOne = function()
};
module.exports = orm;