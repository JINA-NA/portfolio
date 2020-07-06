// main.js
// 개인 포트폴리오 사이트
// 메인페이지

(function($){
// jQuery 시작

var win = $('window');

var contentBox = $('#contentBox');
var greeting_area = $('.greeting_area');
var greetingText = $('.greeting_text');

var gText = greetingText.text();
// console.log(gText);
// greetingText.empty();
var gArr = gText.split('');
// console.log(gArr);

// (function(){
// 	var i = 0;
// 	var textGo;
// 	var StartText = function(){
// 		textGo = setInterval(
// 		function(){
// 			//한글자씩 나타나게
// 			if( i < gArr.length ){
// 				gText.append( gArr[i] );
// 				i+=1;
								
// 			} else {
// 				clearInterval(textGo);
// 			}
// 		},300);
// 	};
// 	StartText();
// })();




var categoryArea = $('.category_area');
var cateLi = categoryArea.find('li');

// cateLi.eq(0).addClass('active');
// cateLi.eq(1).delay(100).addClass('active');



// jQuery 종료
})(jQuery);