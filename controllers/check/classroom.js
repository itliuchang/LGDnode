var proxy = require('../../proxy');
module.exports = function(req,res){
	var result = proxy.check.classroom();
	console.log(result);
	res.render('./check/classroom',{data:result.data});
}