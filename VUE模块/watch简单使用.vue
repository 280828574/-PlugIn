<template>
  <div id="watch">
    <input type="text" v-model:value="childrens.name" />
    <input type="text" v-model:value="lastName" />
  </div>

</template>

<script>
  export default {
    name:'hello',
    data(){
          return{
            childrens: {
              name: '小强',
              age: 20,
              sex: '男'
            },
            tdArray:["1","2"],
            lastName:"张三"
          }
        },
    watch:{
      childrens:{
        handler:function(val,oldval){
          console.log(oldval.name)
          console.log(val.name)
        },
        deep:true//对象内部的属性监听，也叫深度监听
      },
      // 'childrens.name':function(val,oldval){
      //   console.log(val)
      // },//键路径必须加上引号

      lastName:function(val,oldval){
        console.log(this.lastName)
      }
    },//以V-model绑定数据时使用的数据变化监测
  };
</script>

<style scoped>

</style>
