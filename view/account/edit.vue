<script setup>
import { computed, ref, onMounted,reactive } from "vue";
import mybizform from "../../component/mybizform.vue";
import {init4Edit} from '../../bll/useFormData'

let formdata=init4Edit()
onMounted(()=>{
  setTimeout(() => {
    console.log("setTimeout")
    formdata.value={name:"张三",address:"中国"};
  }, 1000);
})
</script>

<template>
  <h3><router-link to="/" style="display: ">首页</router-link></h3>
  <h3><router-link to="/account/index">store-demo</router-link></h3>
  <mybizform :formdata="formdata"></mybizform>
</template>

<style>
.greeting {
  color: red;
  font-weight: bold;
}
</style>