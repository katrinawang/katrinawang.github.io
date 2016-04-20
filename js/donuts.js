$(window).scroll(function(){ 
   		if ($(window).scrollTop()  == $(document).height()-$(window).height()){
   			console.log("bottom");
   		} else{
   			console.log("no");
   		}
   		
	});