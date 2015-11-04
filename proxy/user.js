var api = require('../config/api'),
	CProxy = require('./CProxy');
module.exports = {
	auth : function(openId){
		var url = api.user.auth+'&openId='+openId;
		return CProxy.get(url);
	}
}