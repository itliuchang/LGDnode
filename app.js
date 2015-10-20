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
var liuchang;
app.use(express.static('./public'));
main(app);
app.use(function(req,res,next){
	for(var key in app.locals){
		res.locals[key] = app.locals[key];
	}
	next();
});
route(app,controllers);
app.listen(3000);