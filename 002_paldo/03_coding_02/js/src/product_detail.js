//product_detail.js
//제품 상세 설명 페이지


(function($){
	// jQuery 시작 


	//공통 영역=-----------------------------
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
var myScroll;


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





// 페이지 개별 속성--------------------------------------

var contBox = $('#contBox');
var bigImg = contBox.find('.big_img');
var thumImg = contBox.find('.thum_img');
thumImg.append('<ul></ul>');

var productImg = {
	'big':['bibims_con_001.png', 'bibimmen_con_039.png', 'big3_bokkimchi_men_con_001.png'],
	'thum': ['bibims_con_001.png', 'bibimmen_con_039.png', 'big3_bokkimchi_men_con_001.png']
};
var url = '../img/product/';
for( var i = 0; i < productImg.thum.length ; i++){
	thumImg.children('ul').append('<li><a href="#"><span>사진설명</span></a></li>');
	thumImg.find('li').eq(i).children('a').css({backgroundImage:'url('+ url + productImg.thum[i] +')'});
}
var index = 0;
bigImg.css({backgroundImage:'url('+ url + productImg.big[index] +')'});

var thumImgLink = thumImg.find('li').children('a');
thumImgLink.on('click',function(e){
	e.preventDefault();
	index = $(this).parent('li').index();
	bigImg.css({backgroundImage:'url('+ url + productImg.big[index] +')'});
});










	// jQuery 종료
})(jQuery);