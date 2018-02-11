import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
    bgColor:'red',
    topTitle:''
}



const mutations = {
    change(state,bgColor){
      state.bgColor=bgColor
     },
    changes(state,topTitle){
      state.topTitle=topTitle
    }
}

export default new Vuex.Store({
    state,
    mutations
})
