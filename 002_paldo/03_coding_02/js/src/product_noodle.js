//product_noodle.js
//제품 소개 > 면 제품


(function($){
	// jQuery 시작 



var pageLink = $('#pageLink');
pageLink.find('option')



//다른 페이지로 이동-select 태그
pageLink.on('change',function(){
	var v = $(this).val();
	console.log(v);
	window.location = v;
});



// 제품 리스트 ===============================
var contBox = $('#contBox');
var proUl = contBox.find('ul');
var proArr =  [
	{name:'비빔면', img:'./bibimmen_con_039.png'},
	{name:'비빔면 매운맛', img:'./bibimmen_con_039.png'},
	{name:'왕뚜껑', img:'./bibimmen_con_039.png'},
	{name:'남자라면', img:'./bibimmen_con_039.png'},
	{name:'일품 해물라면', img:'./bibimmen_con_039.png'},
	{name:'일품 짜장면', img:'./bibimmen_con_039.png'},
	{name:'팔도 짜장면', img:'./bibimmen_con_039.png'}
];
var proLi;
for(var i = 0; i < proArr.length; i++){
	proUl.append('<li><div class="product_img"></div> <p class="product_name">' + proArr[i].name +'</p></li>');
	proLi = proUl.children('li');
	
}










	// jQuery 종료
})(jQuery);