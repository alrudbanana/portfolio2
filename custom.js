
$(function(){
    // gnb
    const gnb_title = $('.gnb li');
    const bar = $('.visualWrap .bar');
    gnb_title.hover(function(){
        $(bar).stop().slideDown();
        $(this).children('.sub').stop().slideDown();
    }, 
    function(){ 
        $(bar).stop().slideUp();
        $(this).children('.sub').stop().slideUp();
    })
    // news content
    // tab menu click
    $('.content1 .news-type p').on('click',function(){
        let index = $('.content1 .news-type p').index(this);
        $('.content1 .news-type p').removeClass('on');
        $('.content1 .news-type p:eq('+ index +')').addClass('on');
        $('.content1 .news-contentWrap .news-content').removeClass('on');
        $('.content1 .news-contentWrap .news-content:eq('+ index +')').addClass('on');
    })

    //파트너스 슬라이드
    var wid = $('.sponsor > li').outerWidth();
    var num = $('.sponsor > li').length;
    const con5Box = $('.content5 .sponsorWrap .sponsor');
    var totalWid = wid * num;
        con5Box.width(totalWid);
    var mleft = 0; 
    var moveTimer = setInterval(move,20);

    $('.sponsorWrap').on('mouseenter',function(){
        clearInterval(moveTimer);
    })
    $('.sponsorWrap').on('mouseleave',function(){
        moveTimer = setInterval(move,20);
    })

    function move(){
        mleft -= 2;
        if(mleft < -wid){
            $('.sponsor > li').first().appendTo(con5Box);
            mleft = 0;
        }
        con5Box.css({"left":mleft});
    }


    //mobile - calendar
    $('.mobile-content3 .calendar span').on('click',function(){
        let index = $('.mobile-content3 .calendar span').index(this);
        $('.mobile-content3 .calendar span').removeClass('on');
        $('.mobile-content3 .calendar span:eq('+ index +')').addClass('on');
        $('.mobile-content3 .schedule-detail div').removeClass('on');
        $('.mobile-content3 .schedule-detail div:eq('+ index +')').addClass('on');
    })

    //mobile - news content tab
    $('.mobile-content4 > div ul li').on('click',function(){
        let index = $('.mobile-content4 > div ul li').index(this);
        $('.mobile-content4 > div ul li').removeClass('on');
        $('.mobile-content4 > div ul li:eq('+ index +')').addClass('on');
        $('.mobile-content4 .notice-detail').removeClass('on');
        $('.mobile-content4 .notice-detail:eq('+ index +')').addClass('on');
    })

    //monile - ham menu
    const sideNav = $('.side-nav-container')
    $('.ham-menu').click(function(){
        sideNav.addClass('on')
    })
    $('.close-icon').click(function(){
        sideNav.removeClass('on')
    })
    // 메뉴 탭 버튼 
    var gnb_li = $('.side-nav > li');
    gnb_li.on('click', function(){
        var isOn = $(this).children('a').hasClass('on');
        if(isOn){
            //다시 누르면 닫힘
            $(this).children('a').removeClass('on');
            $(this).children('.sub').stop().slideUp();
        }else{
            //이미 열린탭을 닫음 
            gnb_li.children('a').removeClass('on');
            gnb_li.children('.sub').stop().slideUp();
            //누른 자식들에게 창을 열기 
            $(this).children('a').addClass('on');
            $(this).children('.sub').stop().slideDown();
        }
    })
    
})
