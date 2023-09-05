<template>
  <form>
    <slot></slot>
  </form>
</template>
<script setup>
import { provide, ref } from "vue";

let lstValidat = [];
provide("lstValidat", lstValidat);
let validata = (callback) => {
  let rts = [];
  lstValidat.forEach((x) => {
    if (!x.flag) return;
    rts.push(x.handler());
  });
  let vrt = !rts.filter((x) => x).length > 0;
  callback("校验完成", vrt);
};

defineExpose({validata})

</script>