var api = require('../config/api'),
	CProxy = require('./CProxy');
module.exports = {
	grades : function(id){
		var url = api.check.grades+'&openid='+id;
		console.log(url);
		return CProxy.get(url);
	},
	classroom : function(){
		var url = api.check.classroom;
		return CProxy.get(url);
	},
	timeTable : function(openid){
		var url = api.check.timeTable+'&openid='+openid;
		return CProxy.get(url);
	}
}