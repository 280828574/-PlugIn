<template>
  <!--首页-->

  <div class="index_box">

  首页
    <div>
      <myfoot></myfoot>
    </div>

  </div>

</template>

<script>
  //index
  import myfoot from "../foot/myfoot.vue"
	export default {
		name: "index",
    components: {
      myfoot,
    },
	}
</script>

<style scoped>

</style>
