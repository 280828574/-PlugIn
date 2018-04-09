$(document).ready(function(){
 $(".triangle1,.triangle3,.triangle5,.triangle7").animate({marginTop:0, opacity:'show'},{ duration: 1500 });
 $(".triangle2,.triangle4,.triangle6").animate({marginTop:0, opacity:'show'},{ duration: 1500 });
 });
 

$(".fl04_contentall li").hover(function(){ 
    $(this).find(".fl04_li_bgw").fadeIn(500);
  },function(){ 
    $(this).find(".fl04_li_bgw").fadeOut(500); 
  }); 
  