var api = require('../config/api'),
	CProxy = require('./CProxy');
module.exports = {
	auth : function(openId){
		var url = api.user.auth+'&openId='+openId;
		return CProxy.get(url);
	},
	bind : function(openId,studentId,cardId){
		var url = api.user.bind+'&openId='+openId+'&studentId='+studentId+'&cardId='+cardId;
		return CProxy.get(url);
	},
}