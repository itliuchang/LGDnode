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
	getInfo : function(data){
		var url = api.user.info +'&openId='+data.openId;
		return CProxy.get(url);
	},
	getInfoByStuId : function(data){
		var url = api.user.infoByStuId+'&stuId='+data.stuId+'&source='+data.source;
		return CProxy.get(url);
	},
	getClassList : function(openId){
		var url = api.user.classList + '&openId='+openId;
		return CProxy.get(url);
	}
}