//product_noodle.js
//제품 소개 > 면 제품


(function($){
	// jQuery 시작 
	var win = $(window);
	var winH = win.outerHeight();
	var myScroll;

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
gnbBox.on('mouseleave blur',function(){
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


//페이지 개별 속성 ------------------------------

// 제품(면) 리스트 ===============================
var contBox = $('#contBox');
var proUl = contBox.find('ul');
var noodleArr =  [
	{name:'비빔면', img:'bibims_con_001.png'},
	{name:'비빔면 매운맛', img:'bibimmen_con_039.png'},
	{name:'왕뚜껑', img:'lidking_con_002.png'},
	{name:'남자라면', img:'lunch_con_001.png'},
	{name:'일품 해물라면', img:'tab_0001_txt05.png'},
	{name:'일품 짜장면', img:'tab_0001_txt01.png'},
	{name:'팔도 짜장면', img:'tab_paldo_jjajangmen_txt01.png'}
];
var beverageArr = [
	{name:'식혜1', img:'bibims_con_001.png'},
	{name:'식혜2', img:'bibims_con_001.png'},
	{name:'식혜3', img:'bibims_con_001.png'},
	{name:'식혜4', img:'bibims_con_001.png'},
	{name:'식혜5', img:'bibims_con_001.png'},
	{name:'식혜6', img:'bibims_con_001.png'},
	{name:'식혜7', img:'bibims_con_001.png'},
	{name:'식혜8', img:'bibims_con_001.png'},
	{name:'식혜9', img:'bibims_con_001.png'},
	{name:'식혜10', img:'bibims_con_001.png'},
	{name:'식혜11', img:'bibims_con_001.png'}
];
var hrmArr = [
	{name:'간편식1', img:'bibims_con_001.png'},
	{name:'간편식2', img:'bibims_con_001.png'},
	{name:'간편식3', img:'bibims_con_001.png'},
	{name:'간편식4', img:'bibims_con_001.png'},
	{name:'간편식5', img:'bibims_con_001.png'},
	{name:'간편식6', img:'bibims_con_001.png'},
	{name:'간편식7', img:'bibims_con_001.png'},
	{name:'간편식8', img:'bibims_con_001.png'},
	{name:'간편식9', img:'bibims_con_001.png'},
	{name:'간편식10', img:'bibims_con_001.png'},
	{name:'간편식11', img:'bibims_con_001.png'},
	{name:'간편식12', img:'bibims_con_001.png'},
	{name:'간편식13', img:'bibims_con_001.png'}
];
var prType = [noodleArr, beverageArr, hrmArr];
var imgUrl = '../img/product/';
var hrefUrl = './product_detail.html';
var proLi;

var productTypeSelect = function(n){
	var selectType = prType[n];
	for(var i = 0; i < selectType.length; i++){
		proUl.append('<li><a href="' + hrefUrl + '"><div class="product_img"></div> <p class="product_name">' + selectType[i].name +'</p></a></li>');
		proLi = proUl.children('li');
		proLi.eq(i).find('.product_img').css({backgroundImage:'url(' + imgUrl + selectType[i].img +')', 	backgroundRepeat: 'no-repeat',
		backgroundPosition: '50% 50%',
		backgroundSize: 'cover' });
	};

	//scroll 시 제품 한줄씩 스르륵 나타나기

	var liOffArr = [];
	for(var i = 0; i < selectType.length; i++){
		liOffArr[i] = proLi.eq(i).offset().top;
		// console.log(liOffArr);
	}
	//스크롤 안해도 첫줄은 보이게
	proLi.eq(0).addClass('active');
	proLi.eq(1).addClass('active');
	proLi.eq(2).addClass('active');
	

	win.on('scroll',function(){
		myScroll = win.scrollTop();
		for(var j = 0; j < selectType.length; j++){
			if( myScroll + (winH/6*5) > liOffArr[j] ){
				proLi.eq(j).addClass('active');
			}
		}
	});
};
productTypeSelect(0);

var categoryBox = $('#categoryBox');
var cateLink = categoryBox.find('a');

// 면,음료,간편식 버튼 누르면 제품 내용 변경되게 하기
cateLink.on('click',function(e){
	e.preventDefault();

	proUl.empty();
	var thisParent = $(this).parent('li').index();
	
	productTypeSelect(thisParent);
});





//mouseenter 시에
var proLiLink = proLi.find('a');
proLiLink.on('mouseenter focus',function(){
	$(this).children('div').addClass('active');
	$(this).parent('li').siblings().find('div').removeClass('active');
});
proLiLink.on('mouseleave blur',function(){
	$(this).children('div').removeClass('active');
});






	// jQuery 종료
})(jQuery);