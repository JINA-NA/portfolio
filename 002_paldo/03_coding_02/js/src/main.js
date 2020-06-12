// main.js
// 팔도- 메인페이지

(function($){
// jQuery 시작


//headBox 영역 제어 =========================
// 네비게이션
var headBox = $('#headBox');
var gnbBox = $('#gnbBox');
var gnbDt = gnbBox.find('dt')
var gnbDtLink = gnbBox.find('dt').find('a');
var gnbDd = gnbBox.find('dd')
var gnbDdLink = gnbBox.find('dd').find('a');

//mouseenter시에 dd 나타나기
gnbDtLink.on('mouseenter focus',function(){
	gnbDd.stop().slideDown();
	$(this).parents('li').addClass('active');
	$(this).parents('li').siblings().removeClass('active');

	gnbBox.addClass('active');
});

//mouseleave시에 dd 사라지기
gnbBox.on('mouseleave',function(){
	gnbDd.stop().slideUp();
	gnbBox.find('li').removeClass('active');

	gnbBox.removeClass('active');
});

//blur시에 dd 사라지기
gnbDdLink.eq(-1).on('blur',function(){
	gnbDd.stop().slideUp();
	gnbBox.removeClass('active');
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
var myScroll;

var productBox = $('#productBox');
var iconLi = productBox.find('li');


// win.on('scroll',function(e){
// console.log(myScroll)
// 	myScroll = win.scrollTop();
// 	if( myScroll >= 200 ){
// 		headBox.stop().animate({backgroundColor:'rgba(255,255,255,0.8)'});
// 	} else {
// 		headBox.stop().animate({backgroundColor:'rgba(255,255,255,0)'});
// 	}

// 		//제품군 샤샤샥 올라오기
// 	if( myScroll > 1300){
// 		iconLi.eq(0).css({transform: 'translateY(100)'});
// 		iconLi.eq(1).delay(200).addClass('active');
// 		iconLi.eq(2).delay(300).addClass('active');
// 	}
// //scroll 종료태그
// });

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

// jQuery 종료
})(jQuery);