$(function(){
    $(".gnb>li>a").mouseenter(function(){
        $(this).next().stop().slideDown()
    })
    $(".gnb>li").mouseleave(function(){
        $(this).find(".depth2").stop().slideUp()
    })

    setInterval(function(){
        $(".slide li").animate({top: }})
    })
})