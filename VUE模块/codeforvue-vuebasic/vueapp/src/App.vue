<template>
  <div id="app">
    <!-- <test msg="这是新的属性值!"></test> -->
    <users></users>
  </div>
</template>

<script>

import Test from './components/test'
import Users from './components/users'

export default {
  name: 'app',
  components: {
    Test,Users
  }
}
</script>

<style>


</style>
