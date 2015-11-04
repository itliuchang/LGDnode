$('.submit').click(function(){
	var studentId = $('#studentId').val(),
		password = $('#password').val();
	// $.getJSON('http://uanli.cn/wechat/api/&jsoncallback=?',{
	// 	"controller" : "isuser",
	// 	"action" : "bd",
	// 	"openId" : "abcdefg",
	// 	"studentId" : studentId,
	// 	"carId" : password,
	// },function(data){
	// 	console.log(data);
	// });
// $.ajax({
// 	type:"GET",
// 	cache:false,
// 	url:"http://uanli.cn/wechat/api/",
// 	data:{
// 		"controller" : "isuser",
// 		"action" : "bd",
// 		"openId" : "abcdefg",
// 		"studentId" : studentId,
// 		"carId" : password,
// 		'ajax' : true,
// 	},
// 	dataType:"jsonp",
// 	jsonpCallback:"test"
// });
// function test(data){
// 	console.log(data);
// }
$.getJSON('http://uanli.cn/wechat/api/?controller=isuser&action=bd&openId=liuchang&studentId='+studentId+'&cardId='+password+'&ajax=true&callback=?',function(data){
	// if(data.code==200) alert('绑定成功！');
	// else alert('绑定失败');
	if(data.code==200) alert('绑定成功！');
	else alert('绑定失败');
});
});