var proxy = require('../../proxy');
module.exports = function(req,res){
	var result = proxy.check.grades(2015);
	res.render('./check/grades',{data:result.data});
}