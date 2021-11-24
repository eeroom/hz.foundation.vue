<script>
import BllAccount from "../bll/BllAccount";
import { useStore } from "vuex";
import { computed, ref, onMounted, reactive } from "vue";
import vinput from "../component/vinput.vue";
import vform from "../component/vform.vue";
let bllAccount = new BllAccount();
export default {
  components: { vinput, vform },
  props: ["mybanji"], //如果要自定义属性，必须这里声明，否则引用方传值不报错，但组件内取不到值
  setup(props) {
    let vvf = ref(null);
    let store = useStore();
    let mystate = computed(() => store.state[bllAccount.namespace] || {});
    let myclicktimes = ref(0);
    let formdata = reactive({ mani: {} });
    let rootdata = reactive({});
    let clikcme = () => {
      bllAccount.setState({ count: (mystate.value.count || 0) + 1 });
      myclicktimes.value += 1;
      console.log("formdata", JSON.stringify(formdata));
      vvf.value.validata(function () {
        console.log(arguments);
      });
    };
    let wangp = computed(() => (new Date() ? { a: "1" } : { b: "2" }));
    let nowDate = new Date();
    let showform = ref(true);
    onMounted(() => {
      setTimeout(() => {
        //bllAccount.setState({ count: 112 });
        rootdata.docTitle = "helco dddddddddddddddddddddddddd";
      }, 3000);
    });

    return {
      mystate,
      myclicktimes,
      wangp,
      nowDate,
      clikcme,
      bllAccount,
      formdata,
      rootdata,
      vvf,
      showform,
    };
  },
};
</script>

<template>
  <h3><router-link to="/">首页22</router-link></h3>
  <h3><router-link to="/account/myinfo">我的信息</router-link></h3>
  <p>班级：{{ mybanji }}{{ this.nowDate }}{{ wangp }}</p>
  <input
    type="text"
    :value="mystate.count"
    v-on:input="
      (x) => bllAccount.setState({ count: Number.parseInt(x.target.value) })
    "
  />
  <input type="text" v-model="mystate.count" />
  <p class="greeting">mystate:{{ mystate.count || 0 }}</p>
  <p>data:{{ myclicktimes }}</p>
  <button v-on:click="clikcme">点我一下</button>
  <input type="text" v-model="formdata.mani.seek" />
  <span ref="vme"></span>
  {{ formdata.mani.seek }}
  {{ rootdata.docTitle }}
  <div>1111111111111111</div>
  <vform ref="vvf">
     <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <vinput type="text" class="form-control" v-model="formdata.mani.seek" v-if="showform" />
    </div>
    <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <vinput type="password" class="form-control" v-model="formdata.mani.seek22" />
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
    <button type="submit" class="btn btn-primary">确定</button>
  
  </vform>
  <input type="button" value="切换一下" @click="showform = !showform" />
</template>

<style>
.greeting {
  color: red;
  font-weight: bold;
}
.form-group{
  position: relative;
}
</style>