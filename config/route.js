module.exports=function(req,res,app,controllers,proxy){
	if(req.path=='/userAuth'){
		app.all('/userAuth',controllers.UserAuth);
	}else if(req.path=='/userbind'){
		app.all('/userbind',controllers.UserBind);
	}else{
		var sopenId ="openId" in req.session?req.session.openId:0;
		var openId = req.query.openId || sopenId || 0;
		if(proxy.user.auth(openId).code!=200) res.redirect('/userAuth');
		else{
			app.get('/active/index',controllers.Aindex);
			app.get('/active/signup',controllers.Asignup);
			app.get('/check/curriculum',controllers.Ccurriculum);
			app.get('/check/grades',controllers.Cgrades);
			app.get('/check/books',controllers.Cbooks);
			app.get('/check/classroom',controllers.Cclassroom);
			app.get('/info',controllers.Cinfo);
		}
	}
	
}