<template>
  <form>
    <div class="form-group">
      <label for="exampleInputEmail1">名称</label>
      <input type="text" class="form-control" v-model="formdata.name" />
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">地址</label>
      <input type="text" class="form-control" v-model="formdata.address" />
    </div>
    <div class="form-group">
      <button type="button" class="btn btn-primary" v-on:click="submitform">
        校验并提交
      </button>
    </div>
  </form>
</template>
<script setup>
import { toRefs } from "vue";
import {formdata} from '../bll/useFormData'
defineProps(['formdata'])
let submitform=()=>{
    alert(JSON.stringify(formdata.value))
}
</script>