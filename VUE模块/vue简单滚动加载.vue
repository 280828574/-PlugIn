<template>
  <div>
    <ul>
      <li v-for="(item,key) in articles" :key="key">
        <h2>{{item.name}}</h2>
        <img :src="item.images" alt="">
      </li>
    </ul>
  </div>
</template>
<script>
export default{
  data () {
    return {
      articles: [],
      toggen: false
    }
  },
  mounted () {
    this.add()
    // 注册scroll事件并监听
    window.addEventListener('scroll', () => {
      let iHeight, sHeight, bHeight
      iHeight = window.innerHeight // 可视区域高度
      sHeight = window.pageYOffset // 滚动高度
      bHeight = document.body.offsetHeight // 文档高度
      // 判断是否滚动到底部
      if (iHeight + sHeight >= bHeight) {
        if (this.toggen === false) {
          this.toggen = true
          this.add()
        }
      }
    })
  },
  methods: {
    add: function () {
      for (let i = 0; i < 50; i++) {
        let aa = {name: i}
        this.articles.push(aa)
      }
      this.toggen = false
    }
  }
}
</script>
<style>
  *{
    margin:0;
    padding:0;
  }
  li{
    list-style:none;
    height: 50px;
  }
</style>
