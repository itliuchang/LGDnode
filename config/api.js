module.exports = {
	host : 'uanli.cn',
	check : {
		grades : '/wechat/api/?controller=grade&action=read',
		
	},
	user : {
		auth : '/wechat/api/?controller=isuser&action=read',
		bind : '/wechat/api/?controller=isuser&action=bd',
	}

}