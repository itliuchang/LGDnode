var proxy = require('../proxy');
module.exports = function(req,res){
	var result = proxy.user.getInfo(req.session.openId);
	res.render('./info',{data:result.data});
}