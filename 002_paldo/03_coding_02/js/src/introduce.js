//introduce.js
//팔도스토리 > 기업소개


(function($){
	// jQuery 시작

var win = $(window);
var winH = win.outerHeight();


// 모든페이지 공통 속성----------------------------
//headBox 영역 제어 =========================
// 네비게이션
var headBox = $('#headBox');
var gnbBox = $('#gnbBox');
var gnbUl = gnbBox.children('ul');
var gnbDtLink = gnbBox.find('dt').find('a');
var gnbDd = gnbBox.find('dd')
var gnbDdLink = gnbBox.find('dd').find('a');

//mouseenter시에 dd 나타나기
gnbDtLink.on('mouseenter focus',function(){
	gnbDd.stop().slideDown();
	$(this).parents('li').addClass('active');
	$(this).parents('li').siblings().removeClass('active');

	headBox.addClass('active');
});

//mouseleave시에 dd 사라지기
gnbBox.on('mouseleave',function(){
	gnbDd.stop().slideUp();
	gnbBox.find('li').removeClass('active');

	headBox.removeClass('active');
});

//blur시에 dd 사라지기
gnbDdLink.eq(-1).on('blur',function(){
	gnbDd.stop().slideUp();
	headBox.removeClass('active');
});
//dd mouseenter 시 속성
gnbDdLink.on('mouseenter focus',function(){
	$(this).css({color:'#E43D30', fontWeight:'bold'});
	$(this).parent('li').siblings().find('a').removeAttr('style');

	$(this).parents('li').addClass('active');
	$(this).parents('li').siblings().removeClass('active');
});
gnbDdLink.on('mouseleave blur',function(){
	$(this).removeAttr('style');
});

//incoming modal 창
var incomingModal = $('.incoming_modal');
var modalCloseBtn = incomingModal.find('.close_btn').children('button');
gnbUl.children('li').eq(2).find('a').on('click',function(e){
	e.preventDefault();
	incomingModal.fadeIn();
});
gnbUl.children('li').eq(3).find('a').on('click',function(e){
	e.preventDefault();
	incomingModal.fadeIn();
});
modalCloseBtn.on('click',function(e){
	e.preventDefault();
	incomingModal.fadeOut();
});

//mousewheel 시, header 나왔다가 들어왔다가
win.on('mousewheel DOMMouseScroll',function(e){
	var eo = e.originalEvent;
	var delta = eo.wheelDelta;
	// console.log(delta)
	if(delta <= 0){
		headBox.hide();
		} else {
			headBox.show();
		}
});


// 페이지 개별 속성----------------------------

// 스크롤 시 animate

var contBox = $('#contBox');
var contTitle = contBox.find('.cont_title').find('p');
var contTitleOff = contTitle.offset().top;
var contBody = contBox.find('.cont_body').children('li');





//제목 나타나기
contTitle.addClass('active');

//각각 바디텍스트(li)순서대로 나타나기
var contOffArr = [];
for(var i = 0; i < 4; i++){
	contOffArr[i] = contBody.eq(i).offset().top;
}
win.on('scroll',function(){
	myScroll = win.scrollTop();
	
	for(var j=0; j < 4; j++){
		if( myScroll + (winH/6*5) > contOffArr[j] ){
			contBody.eq(j).addClass('active');
		}
	}
	//scroll 종료태그
});






	// jQuery 종료
})(jQuery);