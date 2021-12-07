<script>
import BllAccount from "../../bll/BllAccount";
import { useStore } from "vuex";
import { computed, ref, onMounted } from "vue";
let bllAccount = new BllAccount();
export default {
  props: ["mybanji"], //如果要自定义属性，必须这里声明，否则引用方传值不报错，但组件内取不到值
   setup(props) {
    let store = useStore();
    let mystate = computed(() => store.state[bllAccount.namespace] || {});
    let myclicktimes = ref(0);
    let clikcme = () => {
      bllAccount.setState({ count: (mystate.value.count || 0) + 1 });
      myclicktimes.value += 1;
    };
    let wangp = computed(() => (new Date() ? { a: "1" } : { b: "2" }));
    let nowDate = new Date();
    onMounted(() => {
      setTimeout(() => {
        //bllAccount.setState({ count: 112 });
      }, 3000);
    });
    return {
      mystate,
      myclicktimes,
      wangp,
      nowDate,
      clikcme,
      bllAccount,
    };
  },
};
</script>

<template>
<h3>  <router-link to="/" style="display:">首页</router-link></h3>
<h3>  <router-link to="/account/index">store-demo</router-link></h3>
    
    
  <p>myinfo:{{ mybanji }}{{ this.nowDate }}{{wangp}}</p>
  <p class="greeting">mystate:{{ mystate.count || 0 }}</p>
  <p >data:{{ myclicktimes }}</p>
  <button v-on:click="clikcme">点我一下</button>
</template>

<style>
.greeting {
  color: red;
  font-weight: bold;
}
</style>