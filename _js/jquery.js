// JavaScript Document



$(function(){
	
    
    ////////////////////     파일첨부     ////////////////////
    
    var fileTarget = $('.filebox .upload-hidden'); fileTarget.on('change', function(){ // 값이 변경되면 
        if(window.FileReader){ // modern browser 
            var filename = $(this)[0].files[0].name; 
        } else { // old IE 
                var filename = $(this).val().split('/').pop().split('\\').pop(); // 파일명만 추출 
            } // 추출한 파일명 삽입 
        $(this).siblings('.upload-name').val(filename); 
    });
    
    
    ////////////////////     스크롤이벤트     ////////////////////
    
    $(window).scroll(function(){
        
        var st = $(window).scrollTop();
        if(st > 0){
            $("header").addClass("on");
        }else{
            $("header").removeClass("on");
        }
        //console.log(st);
        
    })

	
	////////////////////     링크 스크롤     ////////////////////
	
	
	$(document).on("click","header h1 a",function(){
		
		$("body, html").animate({"scrollTop":0},1000,"easeInOutExpo");
		return false;
		
	});
	
	$(document).on("click",".m1",function(){
		
        var tt = $(".c1").offset().top;
        
		$("body, html").animate({"scrollTop":tt},1000,"easeInOutExpo");
		return false;
		
	});
    
    $(document).on("click",".m2",function(){
		
        var tt = $(".c2").offset().top;
        
		$("body, html").animate({"scrollTop":tt},1000,"easeInOutExpo");
		return false;
		
	});
    
    $(document).on("click",".m3",function(){
		
        var tt = $(".c3").offset().top;
        
		$("body, html").animate({"scrollTop":tt},1000,"easeInOutExpo");
		return false;
		
	});
    
    
    ////////////////////     메뉴     ////////////////////
    
    
    var menu = false;
    
    $(document).on("click",".mobile-menu",function(){
		
        if( menu == false){
            $(".menu-wrap").slideDown(500,"easeInOutExpo");
            $(this).addClass("on");
            menu = true;
        }else{
            $(".menu-wrap").slideUp(500,"easeInOutExpo");
            $(this).removeClass("on");
            menu = false;
        }
        return false;
		
	});
	
	
});



















