//main_02_mobile.js
//제이쿼리 반영 재구성안
//laptop: 320~ 766px 

var mobile = function(){
	// jQuery 시작 

var wrap = $('#wrap');
var headBox =  $('#headBox');
var viewBox =  $('#viewBox');
var ticketBox = $('#ticketBox');
var timetableBox = $('#timetableBox');
var locationBox = $('#locationBox');

var win = $(window);

var headBoxW = headBox.innerWidth();
headBox.innerWidth(win.width());

var winHeight;
var WinHeightSet = function(){
	winHeight = win.height();
	// headBox.innerHeight( winHeight );
	viewBox.innerHeight( winHeight );
	ticketBox.innerHeight( winHeight );
};
WinHeightSet();

var wrapOffsetL;

win.on('resize',function(){
	//세로 길이 꽉차게
	WinHeightSet();

	//헤드박스 left제한
	wrapOffsetL = wrap.offset().left;
	headBox.css({'left':wrapOffsetL});
});

var headBoxBg = [];
headBoxBg[0] = 'rgba(30, 100, 80, 1)';
headBoxBg[1] = 'rgba(30, 100, 80, 0)';
// console.log(headBoxBg[0]);


//gnb ===================================
var navi = $('.navi');
navi.innerHeight(winHeight);

var menuBtn = $('.navi_menu_btn');
var exitBtn = $('.navi_exit_btn');

navi.css({'left':-100+'%'});

menuBtn.on('click',function(e){
	e.preventDefault();
	navi.show();
	navi.stop().animate( {left:0}, 500 );
});

exitBtn.on('click',function(e){
	e.preventDefault();
	navi.stop().animate({left:-100+'%'}, 500, function(){
		navi.hide();
	});
});



//스크롤시, headBox 변화 ===========================
var myScroll;
var timetableBoxList = timetableBox.find('li');
var locationBoxList = locationBox.find('li');
win.on('scroll',function(e){
	e.preventDefault();
	myScroll = win.scrollTop();
	// console.log(myScroll, winHeight);

		//라인업,시간표 애니메이션
	if( myScroll+500 > timetableBox.offset().top ){
		timetableBoxList.css({position:'relative'});
		timetableBoxList.eq(0).animate({top:'-100px'},600);
		timetableBoxList.eq(1).delay(100).animate({top:'-100px'},600);
	}
	//관람안내,행사장안내,오시는길 애니메이션
	// if( myScroll+600 > locationBox.offset().top ){
	// 	locationBoxList.css({position:'relative'});
	// 	locationBoxList.eq(0).animate({top:'-50px'},700);
	// 	locationBoxList.eq(1).delay(200).animate({top:'-50px'},600);
	// 	locationBoxList.eq(2).delay(400).animate({top:'-50px'},600);
	// }
});








//탑버튼 스크롤시 나타남 ===============================
var topBtn = $('.topBtn');
win.on('scroll',function(){
	if( winHeight < myScroll ){
		topBtn.fadeIn();
	} else {
		topBtn.fadeOut();
	}
});

//탑버튼 클릭시 최상단으로
topBtn.children('button').on('click',function(e){
	e.preventDefault();
	$('html,body').scrollTop(0);
});









// jQuery 종료
};