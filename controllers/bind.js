var proxy = require('../proxy');
module.exports = function(req,res){
	var result = proxy.user.bind(req.session.openId,req.query.studentId,req.query.cardId);
	result = JSON.stringify(result);
	console.log(result);
	res.end(result);

}