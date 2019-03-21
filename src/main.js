// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'

Vue.use(Vuex)
Vue.config.productionTip = false
var store = new Vuex.Store({
    state:{
      datas:[],
      num:0
    },
    mutations:{
      push(state,v){
        if(state.datas.find(v1=>v1.id===v.id)){
          let idx= state.datas.findIndex(v1=>v1.id===v.id)
          state.datas[idx].num++
        }else{
          state.datas.unshift(v)

        }
        
      },
      allchange(state,all){
        state.datas.forEach(v => {
          v.check =!all
        });
      },
      done(state){
          state.datas=[]
      },
      del(state,id){
       let idx = state.datas.findIndex(v=>v.id ===id)
        state.datas.splice(idx,1)
      },
   

    },
    getters:{
      comnum(state){
        let sum =0
         state.datas.forEach(v=>sum +=v.num)
         return  sum
      }
    }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})
