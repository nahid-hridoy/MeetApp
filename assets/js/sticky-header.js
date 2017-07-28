$(document).on('scroll', function(){
    if($(this).scrollTop() > 1){
        $('.header-area').addClass('stickyheader');
    } else{
        $('.header-area').removeClass('stickyheader');
    }
});