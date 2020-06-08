//history_tablet.js
//제이쿼리 반영 재구성안
//laptop: 767~ 939px 

var tablet = function(){
	// jQuery 시작 

var wrap = $('#wrap');
var headBox =  $('#headBox');
var viewBox =  $('#viewBox');
var ticketBox = $('#ticketBox');
var timetableBox = $('#timetableBox');
var locationBox = $('#locationBox');

var headBoxW = headBox.innerWidth();
var win = $(window);
var winHeight;
var WinHeightSet = function(){
	winHeight = win.height();
	// headBox.innerHeight( winHeight );
	viewBox.innerHeight( winHeight );
};
WinHeightSet();

var wrapOffsetL;

win.on('resize',function(){
	//세로 길이 꽉차게
	WinHeightSet();

	//헤드박스 left제한
	wrapOffsetL = wrap.offset().left;
	headBox.css({'left':wrapOffsetL});
});

var headBoxBg = [];
headBoxBg[0] = 'rgba(30, 100, 80, 1)';
headBoxBg[1] = 'rgba(30, 100, 80, 0)';
// console.log(headBoxBg[0]);


//스크롤시, headBox 변화 ===========================
var myScroll;
var timetableBoxList = timetableBox.find('li');
var locationBoxList = locationBox.find('li');
win.on('scroll',function(e){
	e.preventDefault();
	myScroll = win.scrollTop();

});


//gnb ===================================
var navi = $('.navi');
var menuBtn = $('.navi_menu_btn');
var exitBtn = $('.navi_exit_btn');
navi.css({'left':-100+'%'});

menuBtn.on('click',function(e){
	e.preventDefault();
	navi.show();
	navi.stop().animate( {left:0}, 500 );
});

exitBtn.on('click',function(e){
	e.preventDefault();
	navi.stop().animate({left:-100+'%'}, 500, function(){
		navi.hide();
	});
});







//탑버튼 스크롤시 나타남 ===============================
var topBtn = $('.topBtn');
win.on('scroll',function(){
	if( winHeight < myScroll ){
		topBtn.fadeIn();
	} else {
		topBtn.fadeOut();
	}
});

//탑버튼 클릭시 최상단으로
topBtn.children('button').on('click',function(e){
	e.preventDefault();
	$('html,body').scrollTop(0);
});




//개별적인 페이지 속성 ====================
var textArr = [];
textArr[0] = 'Wynton Marsalis (윈튼 마살리스) / Brad Mehldau Trio (브레드 멜다우 트리오) / Pink Martini (핑크 마티니) / Tommy Emmanuel (토미 엠마뉴엘)/ Andy McKee (앤디 맥키)/ Rudimental Live Set (루디멘탈 라이브셋) / Fitz and the Tantrums (피츠 앤드 더 탠트럼스) / 크러쉬 (Crush) / Lauv (라우브) / Leon Bridges (리온 브릿지스) / 정재형 AVEC PIANO (Jung Jaeyung AVEC PIANO) / 선우정아 (sunwoojunga) / Julia Michaels (줄리아 마이클스) / Nick Hakim (닉 하킴) / 이하이 (LEEHI) / 정승환 (Jung Seung Hwan) / 이진아 트리오 (Lee Jin Ah Trio) / 최고은 (GONNE CHOI) / 고상지 밴드 (SANGJI KOH BAND) / 정세운 (Jeong Sewoon) / 하성운 (HA SUNGWOON) / Bulow (뷜로우) / 황소윤 (So!YoOn!) / 황호규 쿼텟 (Hogyu Hwang Quartet)';
textArr[1] = 'Wynton Marsalis (윈튼 마살리스) / Brad Mehldau Trio (브레드 멜다우 트리오) / Pink Martini (핑크 마티니) / Tommy Emmanuel (토미 엠마뉴엘)/ Andy McKee (앤디 맥키)/ Rudimental Live Set (루디멘탈 라이브셋) / Fitz and the Tantrums (피츠 앤드 더 탠트럼스) / 크러쉬 (Crush) / Lauv (라우브) / Leon Bridges (리온 브릿지스) / 정재형 AVEC PIANO (Jung Jaeyung AVEC PIANO) / 선우정아 (sunwoojunga) / Julia Michaels (줄리아 마이클스) / Nick Hakim (닉 하킴) / 이하이 (LEEHI) / 정승환 (Jung Seung Hwan) / 이진아 트리오 (Lee Jin Ah Trio) / 최고은 (GONNE CHOI) / 고상지 밴드 (SANGJI KOH BAND) / 정세운 (Jeong Sewoon) / 하성운 (HA SUNGWOON) / Bulow (뷜로우) / 황소윤 (So!YoOn!) / 황호규 쿼텟 (Hogyu Hwang Quartet)';
textArr[2] = 'Wynton Marsalis (윈튼 마살리스) / Brad Mehldau Trio (브레드 멜다우 트리오) / Pink Martini (핑크 마티니) / Tommy Emmanuel (토미 엠마뉴엘)/ Andy McKee (앤디 맥키)/ Rudimental Live Set (루디멘탈 라이브셋) / Fitz and the Tantrums (피츠 앤드 더 탠트럼스) / 크러쉬 (Crush) / Lauv (라우브) / Leon Bridges (리온 브릿지스) / 정재형 AVEC PIANO (Jung Jaeyung AVEC PIANO) / 선우정아 (sunwoojunga) / Julia Michaels (줄리아 마이클스) / Nick Hakim (닉 하킴) / 이하이 (LEEHI) / 정승환 (Jung Seung Hwan) / 이진아 트리오 (Lee Jin Ah Trio) / 최고은 (GONNE CHOI) / 고상지 밴드 (SANGJI KOH BAND) / 정세운 (Jeong Sewoon) / 하성운 (HA SUNGWOON) / Bulow (뷜로우) / 황소윤 (So!YoOn!) / 황호규 쿼텟 (Hogyu Hwang Quartet)';



var historyArr = [
	{year:'2019', count: '13th', img: '2019.jpg', text: textArr[9] },
	{year:'2018', count: '12th', img: '2018.jpg', text: textArr[8] },
	{year:'2017', count: '11th', img: '2017.jpg', text: textArr[7] },
	{year:'2016', count: '10th', img: '2016.jpg', text: textArr[6] },
	{year:'2015', count: '9th', img: '2015.jpg', text: textArr[5] },
	{year:'2014', count: '8th', img: '2014.jpg', text: textArr[4] },
	{year:'2013', count: '7th', img: '2013.jpg', text: textArr[3] },
	{year:'2012', count: '6th', img: '2012.jpg', text: textArr[2] },
	{year:'2011', count: '5th', img: '2011.jpg', text: textArr[1] },
	{year:'2010', count: '4th', img: '2010.jpg', text: textArr[0] }
];
var imgUrl = '../img/poster/';


var contBox = $('#contBox');
contBox.append('<ul class="history_list"></ul>');

var historyUl = contBox.find('.history_list');
var i=0;
for(; i < historyArr.length ; i++ ){
	historyUl.append('<li><div class="year_count"></div> <div class="img_poster"></div> <div class="cont_text"></div></li>');
	historyUl.find('.year_count').eq(i).html('<h3><span class="year">' + historyArr[i].year + '</span> <span class="count">' + historyArr[i].count + '</span></h3>');
	historyUl.find('li').find('.img_poster').eq(i).css({backgroundImage:'url(' + imgUrl+ historyArr[i].img + ')'});
	historyUl.find('li').find('.cont_text').eq(i).html('<p>' + historyArr[i].text + '</p>');
}

var historyLi = historyUl.find('li');
var historyLiOffset = historyLi.offset().top;


// ====스크롤 시 위로 두둥실
win.on('scroll',function(e){
	historyLi.eq(0).css({opacity:1,top:'50px'},800);
	historyLi.eq(1).css({opacity:1,top:'50px'},800);

});





// jQuery 종료
};