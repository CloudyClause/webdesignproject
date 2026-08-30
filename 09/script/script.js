$(function(){
    $(".gnb>li").mouseenter(function(){
        $(this).find(".depth2").stop().fadeIn()
    })
    $(".gnb>li").mouseleave(function(){
        $(this).find(".depth2").stop().fadeOut()
    })

    setInterval(function(){
        $(".slide ul").animate({left:"-=800"},'slow', function(){
            $(".slide ul li").first().appendTo(".slide ul")
            $(".slide ul").css('left',0)
        })
    },3000)

    $(".first").click(function(){
        $(".popup").show()
    })
    $(".popup button").click(function(){
        $(".popup").hide()
    })

    $(".family button").click(function(){
        $(".list").fadeToggle()
    })
})
