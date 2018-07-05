<template>
  <EasyScrollbar :barOption="myBarOption" style="width: 50%;margin: 0 auto">
    <div style="height: 300px;">
      <div  style="height: 500px;background-color: greenyellow;text-align: center;">
      </div>
    </div>
  </EasyScrollbar>
</template>

<script>
  export default {
    name: 'index',
    data(){
      return{
        myBarOption:{
          barColor:"red",   //滚动条颜色
          barWidth:11,           //滚动条宽度
          railColor:"#ccc",     //导轨颜色
          barMarginRight:0,     //垂直滚动条距离整个容器右侧距离单位（px）
          barMaginBottom:0,     //水平滚动条距离底部距离单位（px)
          barOpacityMin:0.3,      //滚动条非激活状态下的透明度
          zIndex:"auto",        //滚动条z-Index
          autohidemode:true,     //自动隐藏模式
          horizrailenabled:true,//是否显示水平滚动条
        }
      }
    },

  }
</script>

在Vue项目中使用easyScroll滚动条插件
