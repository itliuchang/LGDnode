var Proxy = require('../../proxy');
module.exports = function(req,res){
	var result = Proxy.active.index();
	if (result.code ==200 ) {
		res.render('./active/index');
	}else{
		res.rend({"code":result.code,"message":result.message});
	}
}