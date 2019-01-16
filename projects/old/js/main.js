var limit     = $(window).height()/11,
$backToTop = $('#arrow-up');
$(window).scroll(function () {
    if ( $(this).scrollTop() > limit ) {
        $backToTop.fadeIn();
    } else {
        $backToTop.fadeOut();
    }
});
$backToTop.click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 1500);
    return false;
});
$('.header-right .code').click(function(){
    $('html, body').animate({scrollTop:$('#three').position().top}, 2000);
});
