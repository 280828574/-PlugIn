<template>
  <div id="app">
    <Brother1></Brother1>
    <Brother2></Brother2>
  </div>
</template>

<script>

  import Brother1 from './components/Brother1.vue'
  import Brother2 from './components/Brother2.vue'
export default {

  name: 'app',
  components: {
    Brother1,
    Brother2
  }
}
</script>

<style>

</style>
