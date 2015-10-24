var api = require('../config/api'),
	CProxy = require('./CProxy');
module.exports = {
	grades : function(id){
		var url = api.check.grades+'&studentId='+id;
		return CProxy.get(url);
	}
}