var api = require('../config/api'),
	CProxy = require('./CProxy');
module.exports = {
	auth : function(openId){
		var url = api.user.auth+'&openId='+openId;
		return CProxy.get(url);
	},
	bind : function(openId,studentId,name){
		var url = api.user.bind+'&openId='+openId+'&stuId='+studentId+'&name='+name;
		return CProxy.get(url);
	},
	getInfo : function(openId){
		var url = api.user.info +'&openId='+openId;
		return CProxy.get(url);
	}
}