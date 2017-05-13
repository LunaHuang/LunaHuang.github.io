(function($){

	//Got to top
    // When to show the scroll link
    // higher number = scroll link appears further down the page    
    upperLimit = 500; 
        
    // Our scroll link element
    scrollElem = $("#totop");
    
    // Scroll to top speed
    scrollSpeed = 500;

    // Show and hide the scroll to top link based on scroll position    
	//scrollElem.hide();
    $(window).scroll(function () {             
        var scrollTop = $(window).scrollTop();        
        if ( scrollTop > upperLimit ) {
			$("#totop").stop().animate({right:"5px"});
            //$("#totop").fadeTo(200, 1);  // fade back in            
        }else{ 
			$("#totop").stop().animate({right:"-50px"});
            //$("#totop").fadeTo(200, 0);  // fade out
        }
    });

    // Scroll to top animation on click
    $("#totop").click(function(){ 
        $('body,html').animate({scrollTop:0}, 500); 
		return false; 
    });

})(jQuery);
