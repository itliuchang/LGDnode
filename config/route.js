module.exports=function(req,res,app,controllers,proxy){
	// console.log(req.query);
	if(req.path=='/userAuth'){
		app.get('/userAuth',controllers.UserAuth);
	}else if(req.path=='/userbind'){
		app.get('/userbind',controllers.UserBind);
	}else{
		var openId = req.query.openId || 0;
		// console.log(proxy.user.auth(openId).code);
		if(proxy.user.auth(openId).code!=200) res.redirect('/userAuth');
		else{
			app.get('/active/index',controllers.Aindex);
			app.get('/active/signup',controllers.Asignup);
			app.get('/check/curriculum',controllers.Ccurriculum);
			app.get('/check/grades',controllers.Cgrades);
			app.get('/check/books',controllers.Cbooks);
			app.get('/check/classroom',controllers.Cclassroom);
		}
	}
	
}