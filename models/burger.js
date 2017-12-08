var orm = require('../config/orm.js');

var burger = {
	all: function(callback) {
		orm.selectAll("burgers", callback);
	},
	
	create: function(vals, callback) {
		orm.insertOne("burgers", vals, callback);
	},
	
	update: function(vals, condition, callback) {
		orm.updateOne("burgers", vals, condition, callback);
	},
}

module.exports = burger;