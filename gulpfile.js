var gulp = require('gulp'),
	livereload = require('gulp-livereload'),
	express = require('express'),
	exec = require('child_process').exec,
	cmd = 'git pull lgd master;pm2 restart /home/liuchang/LGDgit/app.js',
	app = express();
	app.get('/',function(req,res){
		exec(cmd,function(err,stdout,stderr){
        	if(err){
        		console.log('error');
        	}else{
        		console.log(stdout);
			res.send(stdout);
        	}
        });
	});
	app.listen(3100);
// gulp.task('watch',function(){
// 	var server = livereload();
// 	gulp.watch('./*', function (file) {
//         exec(cmd,function(err,stdout,stderr){
//         	if(err){
//         		console.log('error');
//         	}else{
//         		console.log(stdout);
//         	}
//         })
//     });
// });	
