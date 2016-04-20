$(window).scroll(function(){ 
   		if ($(window).scrollTop()  == $(document).height()-$(window).height()){
   			$(".js-arrow").hide();
   		} else{
   			$(".js-arrow").show();
   		}
	});