<template>
  <div>
    <div style="height:0.6rem;"></div>
    <ul class="foot">
      <li v-for="(list,index) in lists" :key="index" :class="{active:$route.matched[0].path==list.src}"><router-link :to="list.src">
          <svg class="icon foot_icon" aria-hidden="true">
            <use :xlink:href="'#icon-'+list.icon"></use>
          </svg>
          <p>{{list.name}}</p>
        </router-link></li>
    </ul>

  </div>

</template>

<script>

	export default {
		name: "myfoot",
    components: {},
    data(){
          return{
            lists:[
              {
                name:'首页',
                icon:'shouye',
                src:'/index',
              },
              {
                name:'艺人',
                icon:'yiren',
                src:'/artist',
              },
              {
                name:'项目',
                icon:'yilou-',
                src:'/project',
              },
              {
                name:'我的',
                icon:'wo',
                src:'/my',
              },
            ]
          }
        },


	}
</script>

<style scoped>
  /*底部栏*/
  .foot {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 3.75rem;
    height: 0.55rem;
    background: #ffffff;
    padding-top: 0.1rem;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    border-top: 1px solid #ebebeb;
    z-index: 100;
  }
  .foot li{
    width:25%;
    display: block;
    float: left;
    text-align: center;
  }
  .foot_icon{
    width:0.24rem;
    height:0.24rem;
    color: #999;
  }
  .foot p{
    color: #999;
    font-size:0.12rem;
  }
  .active p,.active .icon{
    color: #37c6c0;
  }

</style>
