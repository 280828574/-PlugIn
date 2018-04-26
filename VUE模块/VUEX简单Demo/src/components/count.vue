<template>
  <div>
    <h3>{{$store.state.a.count}}</h3>
    <div>
      <button @click="add(10)" >+</button>
      <button @click="reduce(10)">-</button>
      <button @click="aaa(this)">-</button>
    </div>


  </div>
</template>
<script>
  import store from '../store/store'
  import { mapState,mapMutations,mapGetters  } from 'vuex';
  export default{
    name:'count',
    data(){
      return{

      }
    },
    store,
    computed:{
      ...mapState(["count"]),
      ...mapGetters(["count"]),

    },
    methods:{
      ...mapMutations(['add','reduce',]),
      aaa:function () {
        console.log(this.$store.state.a.count);
      },
    }



  }
</script>
