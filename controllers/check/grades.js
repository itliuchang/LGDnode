var proxy = require('../../proxy');
module.exports = function(req,res){
	proxy.check.grades(2015);
	res.render('./check/grades');
}