<template>
  <div class="components-container">
    <div class="info">需要使用编辑器时，调用UE公共组件即可。
      可设置填充内容defaultMsg，
      配置信息config(宽度和高度等)，
      可调用组件中获取内容的方法。
      支持页面内多次调用。
    </div>
    <button @click="getUEContent()">获取内容</button>
    <button @click="getUEContentTxt()">获取无文本内容</button>
    <div class="editor-container">
      <UE :defaultMsg=defaultMsg :config=config :id=ue1 ref="ue"></UE>
    </div>
  </div>
</template>
<style>
  .info{
    border-radius: 10px;
    line-height: 20px;
    padding: 10px;
    margin: 10px;
    background-color: #ffffff;
  }
</style>
<script>
import UE from './ue.vue'
export default {
  components: {UE},
  data () {
    return {
      defaultMsg: '<span style="font-size: 22px;">111</span>',
      config: {
        initialFrameWidth: null,
        initialFrameHeight: 350
      },
      ue1: 'ue1' // 不同编辑器必须不同的id
    }
  },
  methods: {
    getUEContent () {
      let content = this.$refs.ue.getUEContent() // 调用子组件方法
      console.log(content)
    },
    getUEContentTxt () {
      let content = this.$refs.ue.getUEContentTxt() // 调用子组件方法
      console.log(content)
    }
  }
}
</script>
