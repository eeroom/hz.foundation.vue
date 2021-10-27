import { createApp } from 'vue'
import { createStore } from 'vuex'
import app from './view/app.vue'
import Bll from './bll/Bll';
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

createApp(app)
  .use(store)
  .mount('#root');