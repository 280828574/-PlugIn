<template>
  <div id="app">
    <button type="button" name="button" @click="change">按钮</button>


    <div class="box">
      <span>我是一个普通的div</span>
    </div>

  </div>
</template>
<script>
  import $ from 'jquery';//引入jq
  export default {
    name: 'test',
    data () {
      return {
        msg: 'Welcome to vue',
        show: true
      }
    },
    methods: {
      change(){
        this.msg = 'div背景色变红了'
        $('.box').css('background-color','blue');
      },

    }
  }
</script>

<style scoped>

</style>
