<template>
  <div>
    {{msg.name}}
    <input v-on:click="defend" type="button" value="发送">
  </div>
</template>
<script>
  import aaa from '../assets/EventHandler.js';
  export default {
    data(){
      return {
        msg : '',
        list:[
          {
            name:'aaa',
            age:'12'
          },
          {
            name:'bbb',
            age:'13'
          }
        ]
      }
    },
    methods : {
      defend(){
        aaa.$emit( 'a11', this.list );
      }
    },
    mounted(){
      let _this = this;
      aaa.$on( "a22", function( data ){
        _this.msg = data;
        console.log(data);
      } );
    }
  }
</script>
