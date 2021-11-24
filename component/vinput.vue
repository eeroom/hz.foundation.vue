<template>
  <input type="text" @input="inputHandler" :value="modelValue" />
  <span v-if="vfault" style="color: red">{{ vmsg }}</span>
</template>
<script>
import { ref, inject, onMounted, onUnmounted } from "vue";
export default {
  props: ["modelValue", "validate"],
  emits: ["update:modelValue"],
  setup(props, { emit, slots, attrs }) {
    let lstValidat = inject("lstValidat");
    let vfault = ref(false);
    let vmsg = ref("");
    let inputHandler = (x) => {
      emit("update:modelValue", x.target.value);
      validataf(x.target.value);
    };
    let validataf = (x) => {
      if (!x) {
        vmsg.value = "不能为空";
        vfault.value = true;
      } else if (x.length < 3) {
        vfault.value = true;
        vmsg.value = "至少包含3个字符";
      } else if (x.length > 6) {
        vfault.value = true;
        vmsg.value = "不能超过6个字符";
      } else {
        vfault.value = false;
      }
      return vfault.value;
    };
    let wp = {
      flag: true,
      handler: () => validataf(props.modelValue),
    };
    onMounted(() => {
      lstValidat.push(wp);
    });
    onUnmounted(() => {
      wp.flag = false;
    });
    return {
      inputHandler,
      vfault,
      vmsg,
    };
  },
};
</script>