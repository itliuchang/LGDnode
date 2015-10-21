var request = require('request');
var httpSync = require('http-sync-4');
var request = httpSync.request({
	method:'GET',
	host:'2.uanli.sinaapp.com',
	path:'/api/?controller=grade&studentId=2015&action=read'
});
var response = request.end();

console.log(JSON.parse(response.body.toString("utf-8")).data[0]);
// request('http://2.uanli.sinaapp.com/api/?controller=grade&studentId=2015&action=read',function(err,res,body){
// 	// console.log(body);
// 	body = JSON.parse(body);
// 	console.log(body.data[0]);
// });