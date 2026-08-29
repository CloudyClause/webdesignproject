$(function(){
    $(".gnb").mouseenter(function(){
        $(".depth2, .gnbbg").stop().slideDown()
    })
    $(".gnb").mouseleave(function(){
        $(".depth2, .gnbbg").stop().slideUp()
    })


    setInterval(function(){
        $(".slide ul").animate({top: '-=+300'}, 'slow', function(){
            $(".slide ul li").first().appendTo(".slide ul")
            $(".slide ul").css('top',0)
        })
    },3000)

    $(".first").click(function(){
        $(".popup").show()
    })
    $(".popup button").click(function(){
        $(".popup").hide()
    })

    $(".familylist button").click(function(){
        $(".familylist .familysite").fadeToggle()
    })


})