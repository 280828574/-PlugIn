<template>
  <!--我的-->
  <div>我的
    <!--底部栏-->
    <myfoot></myfoot>
  </div>
</template>

<script>

  import myfoot from "../foot/myfoot.vue"

  export default {
    name: "my",
    components:{
      myfoot
    },

  }
</script>

<style scoped>

</style>
