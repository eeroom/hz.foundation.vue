<script>
import BllAccount from '../../bll/BllAccount'

let bllAccount = new BllAccount();
export default {
  props:["mybanji"],//如果要自定义属性，必须这里声明，否则引用方传值不报错，但组件内取不到值
  methods:{
    clikcme(){
      console.log("clikcme",this.$store.state);
      bllAccount.setState({count:(this.data.count||0)+1})
    }
  },
  computed: {
    data(){
      console.log("computed-data",this.$store);
      return this.$store.state[bllAccount.namespace]||{}}
  }

}
</script>

<template>
  <p>班级：{{mybanji}}</p>
  <p class="greeting">{{ data.count||0 }}</p>
  <button v-on:click="clikcme">点我一下</button>
</template>

<style>
.greeting {
  color: red;
  font-weight: bold;
}
</style>