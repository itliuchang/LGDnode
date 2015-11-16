module.exports = {
	host : '2.uanli.sinaapp.com',
	check : {
		grades : '/wechat/api/?controller=grade&action=read',
		
	},
	user : {
		auth : '/api/?controller=Student&action=isBinding',
		bind : '/api/?controller=Student&action=Binding',
		info : '/api/?controller=Student&action=getInfoByOpenId',
		infoByStuId : '/api/?controller=Student&action=getInfoByStuId',
		classList : '/api/?controller=Student&action=getAllClassmates',
	}

}