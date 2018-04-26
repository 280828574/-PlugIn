import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);


const moduleA={
  state:{
    count:1,
  },
  mutations:{
    add(state,n){
      state.count+=n;
    },
    reduce(state,n){
      state.count-=n;
    }
  },
  getters:{
    count:state=>{
      return state.count +=100;
    }
  }
}
export default new Vuex.Store({
  modules:{
    a:moduleA,
  },

});
