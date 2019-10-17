var connection = require("./connection.js");

var orm = {
  selectAll: function(table, cb) {
    var queryString = "SELECT * FROM " + table +";" ;
    connection.query(queryString, function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },
  insertOne: function(table, column, burger_input, cb) {
    var queryString = "INSERT INTO* + table +" +colToSearch +";" ;

    console.log(queryString);

    connection.query(queryString, function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },
  updateOne: function(onTableTwoCol) {
    var queryString = "UPDATE * FROM " +onTableTwoCol +";";
    queryString += " LEFT JOIN ?? AS tTwo";
    queryString += " ON tOne.?? = tTwo.??";

    console.log(queryString);

    connection.query(queryString, [whatToSelect, tableOne, tableTwo, onTableOneCol, onTableTwoCol], function(
      err,
      result
    ) {
      if (err) throw err;
      console.log(result);
    });
  }
};

module.exports = orm;
