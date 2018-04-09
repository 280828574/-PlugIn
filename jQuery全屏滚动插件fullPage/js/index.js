// JavaScript Document
$(function(){
	var index=0;
	$(".xixian li").length//得到细线的个数		
	$(".leftpiao li").eq(0).show();
	$(".xixian li").eq(0).addClass("bor");
	$(".xixian li").mouseover(function(){
		index=$(this).index();
		$(this).addClass("bor").siblings().removeClass("bor");
		$(".leftpiao li").eq(index).stop(false,true).fadeIn(500).siblings().stop(false,true).fadeOut(800);
		})
	$(".shangbanbu").mouseover(function(){
		$(".mov").css("display","none")
		$(".yiyi").css("display","block")
		})
	$(".shangbanbu").mouseout(function(){
		$(".mov").css("display","block")
		$(".yiyi").css("display","none")
		})
	
	sWith=$("#youce").width()	
	$(".zuoxi").hover(function(){
		$(".zuoxiahezi").animate({"left":0},200)
		$(".game").css("display","none")
		},function(){
		$(".zuoxiahezi").stop(true,false).animate({"left":628},100)
		$(".game").css("display","block")
		
			})
	$(".youxi").hover(function(){
		$(".youxiahezi").animate({"left":0},200)
		$(".game1").css("display","none")
		},function(){
		$(".youxiahezi").stop(true,false).animate({"left":628},50)
		$(".game1").css("display","block")	
			})
	$(".yixi").hover(function(){
		$(".youxiahezi1").animate({"left":0},200)
		$(".game5").css("display","none")
		},function(){
		$(".youxiahezi1").stop(true,false).animate({"left":628},50)
		$(".game5").css("display","block")	
			})
	
		$(".third_left").hover(function(){
		$(".youxiahezi2").animate({"left":0},200)
		$(".game6").css("display","none")
		},function(){
		$(".youxiahezi2").stop(true,false).animate({"left":635},50)
		$(".game6").css("display","block")	
			})
			
		var sb=$(".third_righttop").width()
		$(".third_righttop").hover(function(){
		$(".yiyi1").animate({"left":0},200)
		$(".mov1").css("display","none")
		},function(){
		$(".yiyi1").stop(true,false).animate({"left":sb},50)
		$(".mov1").css("display","block")	
			})
			
		$(".third_rightbottom").hover(function(){
		$(".yiyi2").animate({"left":0},200)
		$(".name7").css("display","none")
		},function(){
		$(".yiyi2").stop(true,false).animate({"left":638},50)
		$(".name7").css("display","block")	
			})
																
		$(".third_rightbottom1").hover(function(){
		$(".yiyi3").animate({"left":0},200)
		$(".name8").css("display","none")
		},function(){
		$(".yiyi3").stop(true,false).animate({"left":638},50)
		//if(!$(".zuoxiahezi").is(":animated"))
		//{$(".zuoxiahezi").animate({"left":628},500)}
		$(".name8").css("display","block")	
			})
		var indd=0
		$(".yuandian1 li").eq(0).addClass("heheda")	
		$(".yuandian1 li").length//获取道圆点的个数
		$(".yuandian1 li").mouseover(function(){
			$(this).addClass("heheda").siblings().removeClass("heheda")
			 indd=$(this).index()
			//document.body.scrollTop=indd*1080
			//document.documentElement.scrollTop=indd*1080
			//$(window).animate({"scrollTop":indd*1080},500)
			window.scroll(0,indd*1080);	
			})
		var a=0
		var b=0
		var scr=0
		 $(window).scroll(function(){
			 	b=a;
			 	a++;
				var s=a-b;
				//alert(s);
		 });																									
})