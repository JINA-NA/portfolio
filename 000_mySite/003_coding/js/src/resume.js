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
ctx.fillStyle = '#fff';
ctx.lineWidth = 10;
ctx.font = 'bold 1.5rem sans-serif';
ctx.textAlign = 'center';
ctx.lineCap = 'round';

//본격적으로 도형 만들기
//html
ctx.beginPath();
ctx.strokeStyle = '#ddf';
ctx.arc(75, 75, 60, Math.PI*1.5, Math.PI*5.5, true);
ctx.fillText('HTML', 75, 75+100);
ctx.stroke();
ctx.beginPath();
ctx.strokeStyle = keyColor;
ctx.arc(75, 75, 60, Math.PI*1.5, Math.PI*4.3, true);
ctx.fillText('HTML', 75, 75+100);
ctx.stroke();

//css
ctx.beginPath();
ctx.arc(250, 75, 60, Math.PI*1.5, Math.PI*4.3, true);
ctx.fillText('CSS', 250, 75+100);
ctx.stroke();

//jQuery
ctx.beginPath();
ctx.arc(425, 75, 60, Math.PI*1.5, Math.PI*4.4, true);
ctx.fillText('jQuery', 425, 75+100);
ctx.stroke();

//sass
ctx.beginPath();
ctx.arc(600, 75, 60, Math.PI*1.5, Math.PI*4.5, true);
ctx.fillText('SASS', 600, 75+100);
ctx.stroke();


// ctx.font = 'bold 1rem sans-serif';

//illust
ctx.beginPath();
ctx.arc(75, 300, 60, Math.PI*1.5, Math.PI*3.7, true);
ctx.fillText('Illustrator', 75, 300+100);
ctx.stroke();

//photoshop
ctx.beginPath();
ctx.arc(250, 300, 60, Math.PI*1.5, Math.PI*3.9, true);
ctx.fillText('Photoshop', 250, 300+100);
ctx.stroke();

//indesign
ctx.beginPath();
ctx.arc(425, 300, 60, Math.PI*1.5, Math.PI*3.7, true);
ctx.fillText('Indesign', 425, 300+100);
ctx.stroke();













// jQuery 종료
})(jQuery);