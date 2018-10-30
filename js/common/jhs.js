$(function () {
	var responSize = 768;
	var headerOffset = $(".header").offset();
	/* //모바일화면일 때 버거아이콘 클릭 */
	$('.icon-menu').click(function () {
		$(this).toggleClass('active'); //아이콘에 class 추가
		$('.nav').toggleClass('down'); //메뉴에 class 추가
		return false;
	});
	$(window).resize(function () {
		var win_w = $(window).width();
		var win_h = $(window).height();

		//스크롤시 상단 고정
		$(window).scroll(function () {
			if ($(window).scrollTop() > headerOffset.top) {
				$(".wrap").addClass("fixed");
			} else{
				$(".wrap").removeClass("fixed");
			}
		}).trigger('scroll');
		
		//pc
		if (win_w > responSize - 17 ) { 
			$('body').addClass('pc').removeClass('mo');
			$('.icon-menu').removeClass('active'); //pc 화면일 때 버거아이콘 class 추가된거 초기화
			$('.nav').removeClass('down'); //pc 화면일 때 메뉴 class 추가된거 초기화
		}
		//mobile
		else {
			$('body').addClass('mo').removeClass('pc');
			$('.nav a').click(function () {
				$('.icon-menu').removeClass('active');
				$('.nav').removeClass('down');
			})
		}
	}).trigger('resize');
});