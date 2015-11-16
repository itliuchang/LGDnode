var proxy = require('../proxy');
module.exports = function(req,res){
	var result = proxy.user.getClassList(req.session.openId);
	res.render('./classList',{data : result.data});
}