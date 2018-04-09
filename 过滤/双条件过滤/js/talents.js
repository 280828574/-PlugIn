// JavaScript Document
/*性别/工作经验显示隐藏*/
$(function(){
	$(".talents_show_toggle").click(function(){
		var index=$(this).index();
		$(".talents_show_toggle").css("color","#000");
			$(".talents_icon").text("∨");
			
			
			if($(".talents_xz_con").eq(index).is(":hidden")){
				
				$(this).find(".talents_icon").text("∧");
				$(this).css("color","red");
				$(".talents_xz_con").eq(index).show().siblings().hide();
				$(this).find(".talents_icon").eq(1).show().siblings().hide();
			}else{
				$(".talents_xz_con").hide();
				$(this).css("color","#000");
				$(this).find(".talents_icon").text("∨");
				$(this).find(".talents_icon").eq(0).show().siblings().hide();
			}
		
	});
	$(".talents_sex").each(function(){
			if($(this).text()=="男"){
				$(this).parents(".talents_con").addClass("nan")
			}else{
				$(this).parents(".talents_con").addClass("nv")
			}
		})
	$(".talents_con_jy").each(function(){
		var a=$(this).text();
		var nian=a.indexOf("年",0);
		var b=parseInt(a.substring(0,nian))
		for(i=0;i<=12;i++){
			if(b>=i){$(this).parents(".talents_con").addClass("a"+i+"")}
		}
	})
	$(".talents_xz_con li").click(function(){
		$(".talents_con").hide();
		$(".talents_xz_con").hide();
		$(".talents_icon").text("∨");
		$(".talents_show_toggle").css("color","#000")
		
		
		$(this).addClass("active").siblings().removeClass("active");
		var arr = new Array();
		$(".talents_xz_con li").each(function(){
			if($(this).is(".active")){
				var this_con=$(this).text();
				if(this_con=="男"){arr.push("nan")};
				if(this_con=="女"){arr.push("nv")};
				if(this_con.indexOf("年")!=-1){
					var wz=this_con.indexOf("年",0);
					var sz=this_con.substring(0,wz)
					var sz_class="a"+sz;
					
					arr.push(sz_class)
				};
				
			};
		});
		if(arr.length==1){
			var b=arr[0];
			$("div[class*="+b+"]").show();	
			
		}else{
			var sz1=arr[0];
			var sz2=arr[1];
			$(".talents_con").each(function(){
				if($(this).is("."+sz1+"")&&$(this).is("."+sz2+"")){$(this).show();}
			})
		}
		
	});
		
});
