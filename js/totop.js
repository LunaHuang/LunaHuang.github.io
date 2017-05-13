(function($) {
 $(window).scroll(function(){
     if ($(window).scrollTop() > 200){
         $("#totop").stop().animate({right:"5px"});
     }else{
         $("#totop").stop().animate({right:"-50px"});
     }
 });
 $("#totop").click(function(){
     $('body,html').animate({
         scrollTop:0
     },300);
     return false;
 });
})(jQuery);
