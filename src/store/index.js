import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    private:true
  },
  mutations: {
    ACCEPT_PRIVACY_POLICY(state){
      console.log("accepting privacy Policy")
      state.private = false
    }
  },
  actions: {
  },
  getters:{
    getPrivate:state=>state.private,
  },
  modules: {

  },
});
