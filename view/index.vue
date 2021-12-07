<script>
import { ref, reactive } from "vue";
import vinput from "../component/vinput.vue";
import vform from "../component/vform.vue";
export default {
  components: { vinput, vform },
  setup() {
    let vvf = ref(null);
    let formdata = ref({ });
    let submitform = () => {
      vvf.value.validata(function () {
        alert(JSON.stringify(formdata.value));
      });
    };
      let setformdata = () => {
        formdata.value={seek:'we',seek22:'123456'}
    };
    return {
      submitform,
      setformdata,
      formdata,
      vvf,
    };
  },
};
</script>

<template>
  <h3><router-link to="/">首页22</router-link></h3>
  <h3><router-link to="/account/myinfo">我的信息</router-link></h3>

  <vform ref="vvf">
    <div class="form-group">
      <label for="exampleInputEmail1">Email address</label>
      <vinput type="text" class="form-control" v-model="formdata.seek" />
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Password</label>
      <vinput
        type="password"
        class="form-control"
        v-model="formdata.seek22"
      />
    </div>
    <div class="form-group">
      <label for="exampleInputFile">File input</label>
      <input type="file" id="exampleInputFile" />
      <p class="help-block">Example block-level help text here.</p>
    </div>
    <div class="checkbox">
      <label> <input type="checkbox" /> Check me out </label>
    </div>
    <div class="form-group"> <button  class="btn btn-primary" v-on:click="setformdata">设置一个新的formdata值</button></div>

    <div class="form-group"><button  class="btn btn-primary" v-on:click="submitform">校验并提交</button></div>
    
   
  </vform>
</template>

<style>
.greeting {
  color: red;
  font-weight: bold;
}
.form-group {
  position: relative;
}
</style>