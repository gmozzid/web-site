
$(function(){

	liveApart.menu();

	if( $("#body_container.exercise").length ){
		liveApart.exercise();
	}


});

var liveApart = {}



/*
*	404 error
*/
liveApart.notFound = function(){
	alert('이 페이지는 현재 작업중입니다.');
	return false;
}



/*
*	menu
*/
liveApart.menu = function(){
	var $btnOpen = $("#header_container .btn_gnb");
	var $btnClose = $("#header_container .btn_close");
	var $menu = $("#header_container .header_inner");

	$btnOpen.on("click", function(){
		$menu.animate({left:0},500);
	});
	$btnClose.on("click", function(){
		$menu.animate({left:-663},500);
	});
}


