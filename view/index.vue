<template>
  <h3>
    <router-link to="/account/index">store-demo</router-link>
  </h3>
  <h3>
    <router-link to="/account/edit">表单-编辑</router-link>
  </h3>

  <vform ref="vvf">
    <div class="form-group">
      <label for="exampleInputEmail1">Email address</label>
      <vinput type="text" class="form-control" v-model="formdata.seek" />
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Password</label>
      <vinput type="password" class="form-control" v-model="formdata.seek22" />
    </div>
    <div class="form-group">
      <label for="exampleInputFile">File input</label>
      <input type="file" id="exampleInputFile" />
      <p class="help-block">Example block-level help text here.</p>
    </div>
    <div class="checkbox">
      <label>
        <input type="checkbox" /> Check me out
      </label>
    </div>
    <div class="form-group">
      <button type="button" class="btn btn-primary" v-on:click="setformdata">设置一个新的formdata值</button>
    </div>

    <div class="form-group">
      <button type="button" class="btn btn-primary" v-on:click="submitform">校验并提交</button>
    </div>
  </vform>
</template>

<script setup>
import { ref, reactive } from "vue";
import vinput from "../component/vinput.vue";
import vform from "../component/vform.vue";

let vvf = ref(null);
let formdata = ref({});
let submitform = () => {
  vvf.value.validata(function() {
    alert(JSON.stringify(formdata.value));
  });
};
let setformdata = () => {
  formdata.value = { seek: "we", seek22: "123456" };
};
</script>



<style>
.greeting {
  color: red;
  font-weight: bold;
}
.form-group {
  position: relative;
}
</style>