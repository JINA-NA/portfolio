//incoming modal 창
var incomingModal = $('.incoming_modal');
var modalCloseBtn = incomingModal.find('.close_btn').children('button');

gnbUl.children('li').eq(1).nextAll().find('a').on('click',function(e){
	e.preventDefault();
	incomingModal.fadeIn();
});

modalCloseBtn.on('click',function(e){
	e.preventDefault();
	incomingModal.fadeOut();
});