import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    newsLetterCheck:false
  },
  mutations: {
    CHECK_NEWS_LETTER(state){
      console.log("Checking newsletter")
      state.newsLetterCheck = true
    }
  },
  actions: {
  },
  getters:{
    getNewsLetterCheck:state=>state.newsLetterCheck,
  },
  modules: {

  },
});
