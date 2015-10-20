var gulp = require('gulp'),
	livereload = require('gulp-livereload'),
	exec = require('child_process').exec,
	cmd = 'git add .;git commit -m  "ff" ;git push lgd master';
gulp.task('watch',function(){
	var server = livereload();
	gulp.watch('./*', function (file) {
        exec(cmd,function(err,stdout,stderr){
        	if(err){
        		console.log('error');
        	}else{
        		console.log(stdout);
        	}
        })
    });
});	