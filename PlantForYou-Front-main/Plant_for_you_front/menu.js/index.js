

/*gnb메뉴*/
$(function(){
    $('.innerHeader .util ul').on('click', function(){
        $('.may').toggleClass('on');
    });
    $('.main').on('click', function(){
        $('.may').removeClass('on');
    });
});