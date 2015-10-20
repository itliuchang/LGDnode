var gulp = require('gulp'),
	livereload = require('gulp-livereload'),
	exec = require('child_process').exec;
gulp.task('watch',function(){
	var server = livereload();
	gulp.watch('./*', function (file) {
        exec('echo $PATH',function(err,stdout,stderr){
        	if(err){
        		console.log('error');
        	}else{
        		console.log(stdout);
        	}
        })
    });
});	