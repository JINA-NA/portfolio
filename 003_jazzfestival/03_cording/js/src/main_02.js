//main_02.js
//제이쿼리 반영 재구성안


(function($){
	// jQuery 시작 

var wrap = $('#wrap');
var headBox =  $('#headBox');
var viewBox =  $('#viewBox');
var ticketBox = $('#ticketBox');

var headBoxW = headBox.innerWidth();
var winHeight;
var WinHeightSet = function(){
	winHeight = $(window).height();
	headBox.innerHeight( winHeight );
	viewBox.innerHeight( winHeight );
};
WinHeightSet();

var wrapOffsetL;

$(window).on('resize',function(){
	//세로 길이 꽉차게
	WinHeightSet();

	//헤드박스 left제한
	wrapOffsetL = wrap.offset().left;
	headBox.css({'left':wrapOffsetL});
});

var headBoxBg = [];
headBoxBg[0] = 'rgba(0, 127, 118, 1)';
headBoxBg[1] = 'rgba(255,255,255,0.3)';
console.log(headBoxBg[0]);


//스크롤시, headBox 변화
var myScroll;
$(window).on('scroll',function(e){
	e.preventDefault();
	myScroll = $(window).scrollTop();
  console.log(myScroll, winHeight);
	if( myScroll <  winHeight ){
		console.log('!!!!!');
		headBox.css({'backgroundColor':headBoxBg[0]});
	} else {
		console.log('????');
		headBox.css({'backgroundColor':headBoxBg[1]});
	}
});





	// jQuery 종료
	})(jQuery);