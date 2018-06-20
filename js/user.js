$(function(){

   $.ajax({
   	 type:'get',
   	 url:`${APP.baseurl}/user/queryUser`,
   	 data:{
   	 	page:1,
   	 	pageSize:100
   	 },
   	 success:function(response){
   	 	console.log(response);

   	 	var html = template('userTpl',response);
   	 	$('#userBox').append(html);
   	 }
   });

   $('#userBox').on('click', '.checkStatus',function(){
     var id =$(this).data('user-id');

     var isDelete = $(this).data('user-isdelete');

     $.ajax({
     	type:'post',
     	url:`${APP.baseurl}/user/updateUser`,
     	data:{
     		id:id,
     		isDelete:isDelete == 1?0:1
     	},
     	success:function(response){

          if(response.success){

          	location.reload();
          }else{
          	alert(response.message);
          }
     	}
     })
   })
})