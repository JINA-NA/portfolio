// resume.js
// 개인 포트폴리오 사이트
// 소개 페이지

(function($){
// jQuery 시작

var win = $(window);

var contentBox = $('#contentBox');
var contentArea = contentBox.find('.content_area');
var infoDiv = contentArea.children('div');

var myScroll;
var infoDivOff = [];
win.on('scroll',function(e){
	myScroll = win.scrollTop();
	
	
	for(var i = 0 ; i < infoDiv.length ; i++){
		infoDivOff = infoDiv.eq(i).offset().top;
	}
 console.log(infoDivOff)

});






// jQuery 종료
})(jQuery);