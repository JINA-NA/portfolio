// main.js
// 화성행궁 야간개장 사이트
// 메인페이지

(function($){
// jQuery 시작

//페이지 공통적인 변수
var win = $(window);
var winH = win.outerHeight();
var myScroll;

//viewBox 스크롤시에 애니메이트
var headBox = $('.headBox');

var viewBox = $('#viewBox');
var viewImg = viewBox.find('div');
var imageMoveStart;


win.on('scroll',function(e){
	e.preventDefault();

	myScroll = win.scrollTop();

	var myoffset = (myScroll / winH) / 3 * 2;
	var winTop = myoffset + winH;
	// console.log(myoffset);
	console.log(myScroll);
	// console.log(winTop);
	// viewBox.css({top:myScroll});
	//안개 걷히는
	viewImg.eq(3).css({opacity: 1-myoffset, left: myoffset * 100 + '%'});
	viewImg.eq(4).css({opacity: 1-myoffset, left: -myoffset * 100 + '%'});
	//사람 투명도
	viewImg.eq(2).css({opacity: myoffset});
	viewImg.eq(1).css({bottom: -myoffset * 100 + '%'});

	// if( myScroll > 1300 && myScroll < 2000){
		if(myScroll > 1300 ){
			viewImg.eq(1).css({backgroundSize: myoffset * 110 + '%'},function(){
				if(myoffset * 110 > 100){ viewImg.eq(1).css({backgroundSize: '100% auto'}); }
			});
			viewImg.eq(2).css({opacity: 2-myoffset});
	} 

	if ( myScroll > 1600 && myoffset < 2){
		viewImg.eq(1).css({opacity:2 - myoffset});
		viewImg.eq(5).css({top: 0});

		// console.log(imageMoveStart)
		imageMoveStart = win.scrollTop();
	}
	
	if( myoffset > 2){
		// console.log(myoffset);
		viewBox.css({top: imageMoveStart - myScroll})
	}else{
		viewBox.css({top:0})
	}


	//end-scroll 기능
});










// jQuery 종료
})(jQuery);