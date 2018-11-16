



// 쟈뎅

// 비쥬얼영역 스와이퍼 슬라이드
new Swiper('.swiper-container', {
    direction: 'horizontal',
    slidesPerView : 1,
    spaceBetween : 0,
    autoplayDisableOnInteraction: true,
    speed : 1000,
    autoplay : { // 자동 재생
        delay : 2000, // autoplay: 3초 마다 자동 슬라이드
    },
    loop : true,
    effect : 'slide',
    pagination : { 
        el : '.swiper-pagination',
        clickable : true, 
        type: 'bullets',
    },
});
// 리사이즈 됐을 때,모바일 메뉴 토글시 메뉴 이미지 바뀌는것,dep1 클릭시 dep2 열리기
$(document).ready(function(){
    $(window).on('load resize', function(){
        var win_w = $(window).width();
        if(win_w >= 999) {
            $('body').addClass('pc').removeClass('mo');
            pcHover();
        } else {
            $('body').addClass('mo').removeClass('pc');
            moClick();
        }
    }).trigger('load resize');

    $(".m_menu").click( function() {
        $(this).toggleClass('active');
        $(".tnb").toggleClass("active");
        if( $(".m_menu").hasClass("active") ){
            $(this).find('>a>img').attr('src','images/btn_m_close.gif');
        } else {
            $(this).find('>a>img').attr('src','images/btn_msnb.gif');
        }
    });
    
    var dep1 = $('.dep1')
    $('.tnb').each(function () {
        dep1.on('click', function () {
            $(this).find('.dep2').addClass('on')
            dep1.not($(this)).find('.dep2').removeClass('on')
            return false;
        })
    })
});
// pc화면&모바일 top nav hover
function pcHover(){
    $('.dep1').hover(function(){
        $(this).addClass('hover');
        $('.dep1 > a').addClass('hover');
        $('.dim').addClass('hover');
    },
    function(){
        $('.dep1').removeClass('hover');
        $('.dep1 > a').removeClass('hover');
        $('.dim').removeClass('hover');
    })
    $('.dep2-6').hover(function(){
        $('.dim').removeClass('hover');
    })
}
function moClick(){
    $('.dep1').hover(function(){
        $(this).removeClass('hover');
        $('.dep1 > a').removeClass('hover');
        $('.dim').removeClass('hover');
    })
}
/* // 포트폴리오
$(function () {
	var responSize = 768;
	var headerOffset = $(".header").offset();
	//모바일화면일 때 버거아이콘 클릭
	$('.icon-menu').click(function () {
		$(this).toggleClass('active'); //아이콘에 class 추가
		$('.nav').toggleClass('down'); //메뉴에 class 추가
		return false;
	});
	$(window).resize(function () {
		var win_w = $(window).w idth();
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
		if (win_w > 751) { 
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
*/

/* // 현대백화점 채용 faq 탭메뉴
function faqTabMenu(){
    //tab
    var $faqTab = $('.faq dt');
    var $faqLst = $('.faq dd');
    // $faqLst.hide();
    // $faqTab.addClass('qon');
    $faqLst.eq(0).addClass('aon').show();
    
    $faqTab.on('click', function(){
        // $(this).addClass('qon').siblings('dt').removeClass('qon');
        // $(this).next().addClass('aon').siblings('dd').removeClass('aon');

        // $(this).addClass('qon').siblings('dt').removeClass('qon');
        // $(this).next().addClass('aon').slideDown().siblings('dd').removeClass('aon').slideUp();
        
        $(this).toggleClass('qon').next().toggleClass('aon').slideToggle();
        if($(this).hasClass('qon')){
            $(this).find('a > img').attr('src','images/faq_open_on.gif')
            $(this).find('a > img').attr('alt','접기')
        }
        else{
            $(this).find('a > img').attr('src','images/faq_open.gif')
            $(this).find('a > img').attr('alt','열기')
        }
        return false;
    });
} */