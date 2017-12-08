var connection = require('./connection.js');

var orm = {
	selectAll: function(table, callback) {
		var query = "select * from " + table + ";";
		
		connection.query(query, function(err, res) {
			if (err) throw err;
			
			callback(res);
		});
	},
	
	insertOne: function(table, vals, callback) {
		var query = "insert into "+ table + " set ?;";
		
		connection.query(query, vals, function(err, res) {
			if (err) throw err;
			
			callback(res);
		});
	},
	
	updateOne: function(table, vals, condition, callback) {
		var query = "update " + table + " set ? where ?;";
		
		connection.query(query, [vals, condition], function(err, res) {
			if (err) throw err;
			
			callback(res);
		});
	},
}

module.exports = orm;