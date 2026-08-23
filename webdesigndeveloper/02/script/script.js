$(function(){
    $(".gnb>li").mouseenter(function(){
        $(".depth2").fadeIn()
    })

    $(".gnb").mouseleave(function(){
        $(".depth2").fadeOut()
    })

    $(".first").click(function(){
        $(".popup").show()
    })

    $("button").click(function(){
        $(".popup").hide()
    
    })

    $(".tab li").click(function(){
        let num = $(this).index()
        console.log(num)

        $(".tab li").removeClass("on")
        $(this).addClass("on")

        $(".wrap").hide()
        $(".wrap").eq(num).show()
    })

    setInterval(function(){
        $(".slide ul").animate({left:'-=' + 1200}, 'slow', function(){
            $(".slide ul li").first().appendTo(".slide ul")
            $(".slide ul").css('left', 0)
        })
    }, 3000)
})
