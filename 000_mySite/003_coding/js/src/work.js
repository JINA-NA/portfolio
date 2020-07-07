//work.js
//포트폴리오 페이지


(function($){
	// jQuery 시작 

	//앞으로 자동으로 목록 생성



	//애니메이션
	var win = $(window);
	
	var contentBox = $('#contentBox');
	var profoUl = contentBox.find('ul');
	var pofolLi = profoUl.children('li');
	// console.log(pofolLi.length);
	
	//배열에 offset값 담기
	var myScroll;
	var liOffset = [];
	var i = 0;
	for(; i < pofolLi.length ; i++){
		pofolLi = contentBox.find('li');
		liOffset[i] = pofolLi.eq(i).offset().top;
		console.log(liOffset);
	}

	//하나씩 나타나기
	pofolLi.eq(0).addClass('active');

	win.on('scroll',function(e){
		myScroll = win.scrollTop();
		console.log('myScroll:'+myScroll);
		
		for(var i = 0; i < pofolLi.length ; i++){
			if( myScroll+400 >= liOffset[i] ){
				pofolLi.eq(i).addClass('active');
			}
		} 
	});





	// jQuery 종료
})(jQuery);