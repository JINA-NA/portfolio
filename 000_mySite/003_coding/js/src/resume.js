// resume.js
// 개인 포트폴리오 사이트
// 소개 페이지

(function($){
// jQuery 시작

var win = $(window);

//스크롤 시 기능 ===============================
var contentBox = $('#contentBox');
var contentArea = contentBox.find('.content_area');
var infoDiv = contentArea.children('div');

var myScroll;
var infoDivOff = [];
for(var i = 0 ; i < infoDiv.length ; i++){
	infoDiv = contentArea.children('div');
	infoDivOff[i] = infoDiv.eq(i).offset().top;
	console.log(infoDivOff)
}

win.on('scroll',function(e){
	myScroll = win.scrollTop();
	
	for(var i = 0 ; i < infoDiv.length ; i++){
		if( myScroll+500 >= infoDivOff[i] ){
			infoDiv.eq(i).find('span').addClass('active');
		}
	}
});
// ===============================

// 그래프===============================
var canvas = document.getElementsByClassName('skill_graph')[0];
var ctx = canvas.getContext('2d');

//꾸미는 속성
var keyColor = '#fa3';
ctx.strokeStyle = keyColor;
ctx.fillStyle = keyColor;
ctx.lineWidth = 30;
ctx.font = 'bold 1.5rem sans-serif';
ctx.textAlign = 'center';

//본격적으로 도형 만들기
ctx.beginPath();

ctx.arc(75, 75, 60, Math.PI*2, false);
ctx.fillText('HTML',75,75+10);



ctx.stroke();
















// jQuery 종료
})(jQuery);