$(function(){

	var navLi = $('.navs li')

	navLi.on('click',function(){

		$(this).find('ul').slideToggle();

	});

});

var APP = {
	baseurl :'http://fullstack.net.cn:3000'
}

$.fn.serializeToJson = function(){

	var formAry = this.serializeArray();

	var result = {}

	formAry.forEach(function(item){
		result[item.name] = item.value;
	});

	return result;
}
function getUrlParams(name){
	var search = location.search.slice(1);

	var ary1 = search.split('&');

	for(var i = 0;i < ary1.length;i++){
		var ary2 = ary1[i].split('=');

		if(ary2[0]==name){
			return ary2[1];
		}
	}
	return -1;
}
