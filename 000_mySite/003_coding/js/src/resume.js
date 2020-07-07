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

infoDiv.eq(0).find('span').addClass('active');

win.on('scroll',function(e){
	myScroll = win.scrollTop();
	
	for(var i = 0 ; i < infoDiv.length ; i++){
		if( myScroll+700 >= infoDivOff[i] ){
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
//html
ctx.beginPath();
ctx.arc(75, 75, 60, Math.PI*2, false);
ctx.fillText('HTML', 75, 75+10);
ctx.stroke();

//css
ctx.beginPath();
ctx.arc(250, 75, 60, Math.PI*2, false);
ctx.fillText('CSS', 250, 75+10);
ctx.stroke();

//jQuery
ctx.beginPath();
ctx.arc(425, 75, 60, Math.PI*2, false);
ctx.fillText('jQuery', 425, 75+10);
ctx.stroke();

//sass
ctx.beginPath();
ctx.arc(600, 75, 60, Math.PI*2, false);
ctx.fillText('sass', 600, 75+10);
ctx.stroke();


ctx.font = 'bold 1rem sans-serif';

//illust
ctx.beginPath();
ctx.arc(75, 250, 60, Math.PI*2, false);
ctx.fillText('illust', 75, 250+5);
ctx.stroke();

//photoshop
ctx.beginPath();
ctx.arc(250, 250, 60, Math.PI*2, false);
ctx.fillText('photoshop', 250, 250+5);
ctx.stroke();

//indesign
ctx.beginPath();
ctx.arc(425, 250, 60, Math.PI*2, false);
ctx.fillText('indesign', 425, 250+5);
ctx.stroke();













// jQuery 종료
})(jQuery);