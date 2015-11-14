$('.submit').click(function(){
	var studentId = $('#studentId').val(),
		password = $('#password').val();
$.get('/bind?studentId='+studentId+'&name='+password+'&ajax=true',function(data){
	var data = JSON.parse(data);
	if(data.code==200) {
		alert('绑定成功！');
		location.href = '/info';
	}else alert('绑定失败！');
});
});