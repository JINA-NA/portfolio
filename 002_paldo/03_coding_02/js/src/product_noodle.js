//product_noodle.js
//제품 소개 > 면 제품


(function($){
	// jQuery 시작 



var pageLink = $('#pageLink');
pageLink.find('option')
속성명도 셀렉티드, 속성값도 셀렉티드


//다른 페이지로 이동-select 태그
pageLink.on('change',function(){
	var v = $(this).val();
	console.log(v);
	window.location = v;
});



	// jQuery 종료
})(jQuery);