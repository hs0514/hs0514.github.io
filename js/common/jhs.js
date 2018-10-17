$(document).ready(function(){
    var menu = $(".header").offset();
    $(window).scroll(function(){
        if($(document).scrollTop()> menu.top){
            $(".header").addClass("fixed");
        } else{
            $(".header").removeClass("fixed");
        }
    });
    
    

    $('.home').on('click', function () {
        $('html,body').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
    $('.m_skill').on('click', function () {
        $('html,body').animate({
            scrollTop: 600
        }, 500);
        
        return false;
    });
    $('.m_portfolio').on('click', function () {
        $('html,body').animate({
            scrollTop: 1500
        }, 500);
        return false;
    });
    $(window).scroll(function(){ 
    if($(this).scrollTop() > 500){ 
        $(".m_skill").addClass("white"); 
        }else{  
        $(".m_skill").removeClass("white"); 
        } 
    })
    $(window).scroll(function(){ 
    if($(this).scrollTop() > 1400){ 
        $(".m_portfolio").addClass("white"); 
        }else{ 
        $(".m_portfolio").removeClass("white"); 
        } 
    });

    /* 모바일 버튼시 동작되는 메뉴 */
    if($(window).width() <= 768){
        $('.mobile_m').on('click', function(){
            mobileButton();
        })
    }
});
$(window).on('resize', function(){
    // mobileButton();
}).trigger('resize');

function mobileButton(){
    $('.menu').slideToggle();
}