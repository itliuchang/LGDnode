var proxy = require('../../proxy');
module.exports = function(req,res){
	var result = proxy.check.grades(2015);
	console.log(result);
	res.render('./check/grades',{data:result.data});
}