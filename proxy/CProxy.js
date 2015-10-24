var httpSync = require('http-sync-4'),
	api = require('../config/api');
	var CProxy = {
	get : function(path){
		var request = httpSync.request({
			method : 'GET',
			host : api.host,
			path : path,
		});
		var response = request.end();
		return JSON.parse(response.body.toString("utf-8"));
	},
}
module.exports = CProxy;
