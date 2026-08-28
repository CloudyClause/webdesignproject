$(function(){
    $(".gnb").mouseenter(function(){
        $(".depth2,.gnbbg").slideDown()
    })
    $(".gnb").mouseleave(function(){
        $(".depth2,.gnbbg").slideUp()
    })

    // family 버튼을 한번 보이고/숨김
    $("button").click(function(){
        $(".list").fadeToggle();
    })





})


