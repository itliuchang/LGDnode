var request = require('request');
var rsync = require('req-sync');

request('http://2.uanli.sinaapp.com/api/?controller=grade&studentId=2015&action=read',function(err,res,body){
	// console.log(body);
	body = JSON.parse(body);
	console.log(body.data[0]);
});