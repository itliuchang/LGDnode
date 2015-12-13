var proxy = require('../../proxy');
module.exports = function(req,res){
	var result = proxy.check.grades(req.session.openId);
	res.render('./check/grades',{data:result.data});
}