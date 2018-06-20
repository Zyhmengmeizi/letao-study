$(function(){


var page = 1;
var pageSize = 5;

var totalPage = 0;

getData();

$('#next').on('click',function(){
	page++;

	if(page > totalPage){

		page = totalPage;
		alert('没有多余得数据了');

		return;
	}

	getData();
});

   $('#prev').on('click',function(){

	page--;

	if(page <1){

		page = 1;
		alert('已经是第一页了');
		return;
	}

	getData();
  });

 function getData(){
	 $.ajax({
		type:'get',
		url:`${APP.baseurl}/category/queryTopCategoryPaging`,
		data:{
			page:1,
			pageSize:5
		},
		success:function(response){
			// console.log(response)
			
			 if(response.error){
			   location.href = 'login.html';
			 }else{

			   var html = template('categoryFirstTpl', response);

			   $('#categoryFirstBox').html(html);
			 }


			totalPage = Math.ceil(response.total / pageSize);
		}
	});
  }
	

 $('#addCategoryBtn').on('click',function(){

 	var categoryName = $.trim($('#categoryName').val());

 	$.ajax({

 		type:'post',
 		url:`${APP.baseurl}/category/addTopCategory`,
 		data:{
 		 categoryName:categoryName	
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

