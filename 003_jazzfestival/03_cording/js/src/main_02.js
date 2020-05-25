//main_02.js
//제이쿼리 반영 재구성안


(function($){
	// jQuery 시작 

var wrap = $('#wrap');
var headBox =  $('#headBox');
var viewBox =  $('#viewBox');
var ticketBox = $('#ticketBox');
var timetableBox = $('#timetableBox');
var locationBox = $('#locationBox');

var headBoxW = headBox.innerWidth();
var win = $(window);
var winHeight;
var WinHeightSet = function(){
	winHeight = win.height();
	headBox.innerHeight( winHeight );
	viewBox.innerHeight( winHeight );
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


//스크롤시, headBox 변화
var myScroll;
var timetableBoxList = timetableBox.find('li');
var locationBoxList = locationBox.find('li');
win.on('scroll',function(e){
	e.preventDefault();
	myScroll = win.scrollTop();
  // console.log(myScroll, winHeight);
	
	//헤드박스 배경색상 변경
	if( myScroll+300 <  winHeight ){
		headBox.stop().animate({'backgroundColor':headBoxBg[0]});
	} else {
		headBox.stop().animate({'backgroundColor':headBoxBg[1]});
	}

	if( myScroll+500 > timetableBox.offset().top ){
		timetableBoxList.css({position:'relative'});
		timetableBoxList.eq(0).animate({top:'-100px'},600);
		timetableBoxList.eq(1).delay(100).animate({top:'-100px'},600);
	}

	if( myScroll+600 > locationBox.offset().top ){
		locationBoxList.css({position:'relative'});
		locationBoxList.eq(0).animate({top:'-50px'},700);
		locationBoxList.eq(1).delay(200).animate({top:'-50px'},600);
		locationBoxList.eq(2).delay(400).animate({top:'-50px'},600);
	}
});






//탑버튼 클릭시 최상단으로
var topBtn = $('.topBtn');
topBtn.children('button').on('click',function(e){
	e.preventDefault();
	$('html,body').scrollTop(0);
});









	// jQuery 종료
	})(jQuery);