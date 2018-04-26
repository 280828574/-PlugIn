<template>
  <div>
    <input v-on:click="send" type="button" value="发送">
    <p>{{msg}}</p>
  </div>
</template>
<script>
  import aaa from '../assets/EventHandler.js';
  export default {
    data(){
      return {
        msg : '',
        list:{
            name:'aaa',
            age:'18'
        }
      }
    },
    methods : {
      send(){
        aaa.$emit( 'a22',this.list );
      }
    },
    mounted (){
      let _this = this;
      aaa.$on( "a11", function( data ){
        _this.msg = data;
        console.log(data);
      } );
    }
  }
</script>


