var proxy = require('../../proxy');
module.exports = function(req,res){
	var result = proxy.check.timeTable(req.session.openId);
	console.log(result);
	res.render('./check/curriculum',{data:result.data});
}