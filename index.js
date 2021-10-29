import {createApp} from 'vue'
import { createStore } from 'vuex'
import app from './app.vue'
import Bll from './bll/Bll';
import createMyRouter from './router';

const store = createStore({
  state:()=>{},
  mutations:{
    hz(state, payload){//hz是这里和Bll中dispath的时候的互相约定
      if (payload.namespace) {
        state[payload.namespace]= { ...state[payload.namespace], ...payload.data }
      }
    }
  },
  actions:{////hz是这里和Bll中dispath的时候的互相约定
    hz({commit},payload){
      commit(payload);
    }
  }
});
Bll.dispatch=store.dispatch;
Bll.getState=()=>store.state;

let myapp= createApp(app);
myapp.use(store);
let router=createMyRouter(myapp);
myapp.use(router);
myapp.mount("#root");