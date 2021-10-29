<script>
import BllAccount from "../../bll/BllAccount";

let bllAccount = new BllAccount();
export default {
  props: ["mybanji"], //如果要自定义属性，必须这里声明，否则引用方传值不报错，但组件内取不到值
  methods: {
    clikcme() {
      console.log("clikcme", this.$store.state);
      bllAccount.setState({ count: (this.mystate.count || 0) + 1 });
      this.myclicktimes=this.myclicktimes+1;
    },
    getNowDate() {
      return new Date();
    },
  },
  computed: {
    mystate() {
      console.log("mystate,‘第2个’执行", this.$store);
      return this.$store.state[bllAccount.namespace] || {};
    },
    wangp() {
      console.log("wangp,‘第2个’执行", this.$store);
      return new Date()?{a:"1"}:{b:"2"};
    },
  },
  mounted() {
    console.log("mounted,这个方法在组件生命周期内只执行一次，并且'第3个'执行");
    bllAccount.setState({ count: 112 });
  },
  data() {
    console.log("data，这个方法在组件生命周期内只执行一次，并且'第1个'执行");
    return {
      nowDate: this.getNowDate(),
      myclicktimes:0
    };
  },
};
</script>

<template>
<h3>  <router-link to="/" style="display:">首页</router-link></h3>
<h3>  <router-link to="/account/index">我的班班级</router-link></h3>
    
    
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