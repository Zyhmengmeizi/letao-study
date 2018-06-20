$(function(){
	$('#loginBtn').on('click',function(){
		var result = $('#loginForm').serializeToJson();

		// console.log(result)
		// 
		if(!$.trim(result.username)){
			alert('请输入用户名');
			return;
		}
			if(!$.trim(result.password)){
			alert('请输入密码');
			return;
		}

		$.ajax({
			type:'post',
			url:`${APP.baseurl}/employee/employeeLogin`,
			data:result,
			success:function(response){
				if(response.success){
					location.href = 'user.html';
				}else {
					alert(response.message);
				}
			}
		})
	})
})