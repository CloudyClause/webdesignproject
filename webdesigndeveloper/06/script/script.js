$(function(){
    $(".gnb>li").mouseenter(function(){
        $(".depth2").addClass("on")
    })
    $(".gnb").mouseleave(function(){
        $(".depth2").removeClass("on")
    })

    $(".tab li").click(function(){
        let num = $(this).index()
        console.log(num)

        $(".tab li").removeClass("on")
        $(this).addClass("on")

        $(".boardwrap").hide()
        $(".boardwrap").eq(num).show()
    })

})