$(function(){
    // 마우스 hover시 부드럽게 보임
    $(".gnb>li").mouseenter(function(){
        $(".depth2").fadeIn()
    })
    //  마우스 영역을 벗어났을떄 부드럽게 사라짐
    $(".gnb").mouseleave(function(){
        $(".depth2").fadeOut()
    })

    // 첫번째 공지사항을 클릭하면 팝업창을 출력
    $(".first").click(function(){
        $(".popup").show()
    })
    //  닫기버튼을 클릭하면 팝업창이 숨김
    $("button").click(function(){
        $(".popup").hide()
    })
})

