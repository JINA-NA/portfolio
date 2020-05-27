// program.js
// program 페이지

(function($){
// jQuery 시작


var lineUpBox = $('#lineUpBox');
var lineUpArea = $('.lineUp_area');

var lineUpContent = [
	{artistImg: 'artist_01.jpg', artistName: '아티스트이름_01'},
	{artistImg: 'artist_02.jpg', artistName: '아티스트이름_02'},
	{artistImg: 'artist_03.jpg', artistName: '아티스트이름_03'},
	{artistImg: 'artist_04.jpg', artistName: '아티스트이름_04'},
	{artistImg: 'artist_05.jpg', artistName: '아티스트이름_05'},
	{artistImg: 'artist_06.jpg', artistName: '아티스트이름_06'},
	{artistImg: 'artist_07.jpg', artistName: '아티스트이름_07'},
	{artistImg: 'artist_08.jpg', artistName: '아티스트이름_08'},
	{artistImg: 'artist_09.jpg', artistName: '아티스트이름_09'},
	{artistImg: 'artist_10.jpg', artistName: '아티스트이름_10'},
	{artistImg: 'artist_11.jpg', artistName: '아티스트이름_11'},
	{artistImg: 'artist_12.jpg', artistName: '아티스트이름_12'},
	{artistImg: 'artist_13.jpg', artistName: '아티스트이름_13'},
	{artistImg: 'artist_14.jpg', artistName: '아티스트이름_14'},
	{artistImg: 'artist_15.jpg', artistName: '아티스트이름_15'},
	{artistImg: 'artist_16.jpg', artistName: '아티스트이름_16'}
];

var imgUrl = '../img/artist/';

lineUpBox.children('.lineUp_area').append('<ul class="clearfix"></ul>');
var artistUl = lineUpBox.find('ul');

var textEl = function(i){
	var listEl = '<li><a href="#"><div class="artist_img"></div><p class="artist_name">'+ lineUpContent[i].artistName +'</p></a></li>';
	return listEl;
};


var i = 0;
for(; i < lineUpContent.length ; i++ ){
	artistUl.append( textEl(i) );
	artistUl.children('li').eq(i).find('.artist_img').css({backgroundImage: 'url(' + imgUrl + lineUpContent[i].artistImg + ')', backgroundRepeat:'no-repeat', backgroundSize:'cover', backgroundPosition:'50% 50%'});
}



// jQuery 종료
})(jQuery);