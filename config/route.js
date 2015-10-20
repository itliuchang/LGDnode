module.exports=function(app,controllers){
	app.get('/active/index',controllers.Aindex);
	app.get('/active/signup',controllers.Asignup);
	app.get('/check/curriculum',controllers.Ccurriculum);
	app.get('/check/grades',controllers.Cgrades);
	app.get('/check/books',controllers.Cbooks);
	app.get('/check/classroom',controllers.Cclassroom);
}