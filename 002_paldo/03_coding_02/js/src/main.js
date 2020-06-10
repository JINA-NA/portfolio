// main.js
// 팔도- 메인페이지

(function($){
// jQuery 시작

// 네비게이션
var headBox = $('#headBox');
var gnbBox = $('#gnbBox');
var gnbDt = gnbBox.find('dt')
var gnbDtLink = gnbBox.find('dt').find('a');
var gnbDd = gnbBox.find('dd')
var gnbDdLink = gnbBox.find('dd').find('a');

//mouseenter시에 dd 나타나기
gnbDtLink.on('mouseenter',function(){
	gnbDd.stop().slideDown();
	$(this).parents('li').addClass('active');
	$(this).parents('li').siblings().removeClass('active');
});
//mouseleave시에 dd 사라지기
gnbBox.on('mouseleave',function(){
	gnbDd.stop().slideUp();
	gnbBox.find('li').removeClass('active');
});
gnbDdLink.on('mouseenter',function(){
	$(this).css({color:'#333'});
	$(this).parents('li').siblings().removeClass('active');
});



// jQuery 종료
})(jQuery);