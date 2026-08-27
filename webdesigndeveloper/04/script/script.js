$(function(){
    $(".gnb>li").mouseenter(function(){
        $(this).find(".depth2").fadeIn()
    })
    $(".gnb>li").mouseleave(function(){
        $(this).find(".depth2").fadeOut()
    })

    let num = 0
    setInterval(function(){
        if(num <2){
            num++
        }else{
            num=0
        }
        $(".slide li").fadeOut()
        $(".slide li").eq(num).fadeIn()
    }, 3000)
})