// JavaScript Document
$(function(){
    $('#fullpage').fullpage({
		verticalCentered:false,//是否垂直居中
		resize:true,//字体缩放
		 sectionsColor: ['#f55','#f66', '#e4e4e4', 'rgba(27, 78, 223, 0.2)', '#f77'],//每一个屏的背景颜色
		  scrollingSpeed: 500,//屏幕滚动的事件
		  navigation: true,//是否显示导航点
		navigationTooltips:['page1', 'page2', 'page3', 'page4', 'page5', 'page6'],//导航栏提示
		slidesNavigation:false,//分屏导航点
		loopHorizontal: false,//左右块滑动循环
		 controlArrowColor:'#16BA9D',//左右颜色
		 continuousVertical:true,//可以循环滚动
		 navigationPosition:"right",//导航点的左右位置
		  
		});
});