<template>
  <form>
    <slot></slot>
  </form>
</template>
<script>
import { provide, ref } from "vue";
export default {
  setup(props, { emit, slots, attrs }) {
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

    return {
      validata,
    };
  },
};
</script>