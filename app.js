var controllers = require('./controllers'),
	express = require('express'),
	main = require('./config/main'),
	route = require('./config/route'),
	ejs = require('ejs'),
	app = express();
ejs.open = "{{";
ejs.close = "}}";
app.set('view engine','ejs');
app.set('views','./views');
app.set('view options',{
	"open":"{{",
	"close":"}}"
});
app.use(express.static('./public'));
main(app);
app.use(function(req,res,next){
	for(var key in app.locals){
		res.locals[key] = app.locals[key];
	}
	next();
});
app.use(function(req,res,next){
	route(req,app,controllers);
	next();
});
app.listen(3000);
