<script>
import BllAccount from '../bll/BllAccount'

let bllAccount = new BllAccount();
export default {
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
  <p class="greeting">{{ data.count||0 }}</p>
  <button v-on:click="clikcme">点我一下</button>
</template>

<style>
.greeting {
  color: red;
  font-weight: bold;
}
</style>