var proxy = require('../proxy');
module.exports = function(req,res){
	var result = proxy.user.getClassList(req.session.openId);
	if(result.code==200){
		res.render('./classList',{data : result.data});
	}else{
		res.end('没有查询到相关信息！');
	}
}