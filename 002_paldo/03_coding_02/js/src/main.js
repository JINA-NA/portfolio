// main.js
// 팔도- 메인페이지

(function($){
// jQuery 시작


//headBox 영역 제어 =========================
// 네비게이션
var headBox = $('#headBox');
var gnbBox = $('#gnbBox');
var gnbUl = gnbBox.children('ul');
var gnbDt = gnbBox.find('dt')
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


//스크롤시 headBox 색상 생성
var win = $(window);
var winH = win.outerHeight();
var winW = win.outerWidth();
var myScroll;

var productBox = $('#productBox');
var iconLi = productBox.find('.product_group').find('li');





// ==================
//메뉴 버튼 누르면 옆에서 메뉴 나오기(mobile, tablet)
var gnbBtn = $('.gnb_btn');
var gnbArea = $('.gnb_area');
var gnbClose = $('.gnb_close_btn');

gnbArea.css({width: winW, height: winH, maxWidth:'320px'});


gnbBtn.on('click',function(e){
	e.preventDefault();
	gnbArea.show();
});
gnbClose.on('click',function(e){
	e.preventDefault();
	gnbArea.hide();
});



// ==================
//각각 offset 파악
var iconLiArr = [];
for(var i = 0; i < 3; i++){
	iconLiArr[i] = iconLi.eq(i).offset().top;
}
win.on('scroll',function(){
	myScroll = win.scrollTop();
	if( myScroll + (winH/6*5) > iconLiArr[0]){
		iconLi.eq(0).addClass('active');
		iconLi.eq(1).addClass('active');
		iconLi.eq(2).addClass('active');
	}
	
//scroll 종료태그
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

//슬라이드배너====================================
var viewBox = $('#viewBox');
var slideWrap = $('.slide_wrap');
var slideLi = slideWrap.find('li');
var lastLi = slideLi.eq(-1).clone(true);
slideWrap.prepend(lastLi);
slideLi = slideWrap.find('li');
console.log(slideLi.length);

slideWrap.css({width: 400 +'%', position:'relative', left:-100+'%'});
slideLi.css({width: 25 + '%'});

var  n = 0;
var bool = true;
setInterval(
	function(){
		bool = false;
		n+=1;
		slideWrap.animate({left: -n * 100 + '%'}, 1000, function(){
			if( n >= slideLi.length-1 ){
				n = 0;
				slideWrap.css({left: -n * 100 + '%'});
			bool = true;
			}
		})
	},4000);
	viewBox.on('mouseenter',function(){
		clearInterval();
	});

	

















// jQuery 종료
})(jQuery);