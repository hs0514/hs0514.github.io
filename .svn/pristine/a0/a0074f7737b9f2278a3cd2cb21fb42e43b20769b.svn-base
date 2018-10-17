// header 고정
$(document).ready(function(){
	var headOffset = $(".header").offset();
	var $tnb = $('.tnb');
	var $moBtn = $('.mobile_m');
	var $memu = $('.menu');

	$(window).scroll(function(){
		if($(document).scrollTop()> headOffset.top){
			$(".header").addClass("fixed");
		} else{
			$(".header").removeClass("fixed");
		}
	});

	$('.home').on('click', function () {
		funScroll();
		return false;
	});
	$('.m_skill').on('click', function () {
		funScroll();
		return false;
	});
	$('.m_portfolio').on('click', function () {
		funScroll();
		$(".m_skill").addClass("white");
			return false;
		});

	$(window).scroll(function(){ 
	if($(this).scrollTop() > 500){ 
		$(".m_skill").addClass("white"); 
		} else {  
		$(".m_skill").removeClass("white");
		} 
	});
	$(window).scroll(function(){ 
	if($(this).scrollTop() > 1400){ 
		$(".m_portfolio").addClass("white"); 
		}else{ 
		$(".m_portfolio").removeClass("white");
		
		} 
	});

	
	if($(window).width() <= 768){
		console.log();
		$('body').addClass('mo');
		$moBtn.on('click', function(){
			$memu.slideToggle();
		})
	} else {
		$('body').removeClass('mo');
		$memu.show();
	}
});
$(window).on('resize', function(){
	if($(window).width() <= 768){
		$('body').addClass('mo');
	} else {
		$('body').removeClass('mo');
	}
}).trigger('resize');
function funScroll(){
	$('html,body').animate({
		scrollTop: 0
	}, 500);
}