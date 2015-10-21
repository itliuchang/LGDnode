var api = require('../config/api');
var request = require('request');
module.exports = {
	grades : function(id){
		var url = api.check.grades+'&studentId='+id;
		console.log(url);
	}
}