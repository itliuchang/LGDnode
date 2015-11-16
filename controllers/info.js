var proxy = require('../proxy');
module.exports = function(req,res){
	if(req.query['stuId']){
		var result = proxy.user.getInfoByStuId({stuId : req.query['stuId'],source : req.query['source']||'self'});
	}else{
		var result = proxy.user.getInfo({stuId : req.query['stuId']||'',openId : req.session.openId||''});
	}
		res.render('./info',{data:result.data});
}