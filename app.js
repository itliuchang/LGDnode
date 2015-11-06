var controllers = require('./controllers'),
	express = require('express'),
	main = require('./config/main'),
	route = require('./config/route'),
	proxy = require('./proxy');
	ejs = require('ejs'),
	session = require('express-session'),
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
app.use(session({resave: false,saveUninitialized: true,secret:'123456',name: 'testapp',cookie:{ path: '/', httpOnly: true, secure: false, maxAge: null }}));
app.use(cookieParser());

app.use(function(req,res,next){
	session({secret:'123456',name: 'testapp',cookie: {maxAge: 80000,openId:req.query.openId},resave: false,saveUninitialized: true,})(req,res,next);
	next();
});

app.use(function(req,res,next){
	if(req.query.openId) req.session.openId = req.query.openId;	
	route(req,res,app,controllers,proxy);
	next();
});
app.listen(3000);
