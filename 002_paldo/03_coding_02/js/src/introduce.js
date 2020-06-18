//introduce.js
//팔도스토리 > 기업소개


(function($){
	// jQuery 시작


//다른 페이지로 이동-select 태그
var pageLink = $('#pageLink');
pageLink.on('change',function(){
	var v = $(this).val();
	console.log(v);
	window.location = v;
});



// 스크롤 시 animate
var win = $(window);
var winH = win.outerHeight();
var contBox = $('#contBox');
var contTitle = contBox.find('.cont_title').find('p');
var contTitleOff = contTitle.offset().top;
var contBody = contBox.find('.cont_body').children('li');



var myScroll;

//제목 나타나기
win.on('load',function(){
	myScroll = win.scrollTop();
	if( myScroll + (winH/6*5) > contTitleOff ){
		contTitle.addClass('active');
	}
});

//각각 바디텍스트(li)순서대로 나타나기
var contOffArr = [];
for(var i = 0; i < 4; i++){
	contOffArr[i] = contBody.eq(i).offset().top;
}
win.on('scroll',function(){
	myScroll = win.scrollTop();
	
	// if( myScroll+500 > contOffArr[3] ){
	// 	contBody.eq(3).addClass('active');
	// }
	// if( myScroll+500 > contOffArr[2] ){
	// 	contBody.eq(2).addClass('active');
	// }
	// if( myScroll+500 > contOffArr[1] ){
	// 	contBody.eq(1).addClass('active');
	// }
	// if( myScroll+500 > contOffArr[0] ){
	// 	contBody.eq(0).addClass('active');
	// }
	for(var j=0; j < 4; j++){
		if( myScroll + (winH/6*5) > contOffArr[j] ){
			contBody.eq(j).addClass('active');
		}
	}
	//scroll 종료태그
});






	// jQuery 종료
})(jQuery);