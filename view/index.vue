<script>
import BllAccount from "../bll/BllAccount";

let bllAccount = new BllAccount();
export default {
  props: ["mybanji"], //如果要自定义属性，必须这里声明，否则引用方传值不报错，但组件内取不到值
  methods: {
    clikcme() {
      console.log("clikcme", this.$store.state);
      bllAccount.setState({ count: (this.mystate.count || 0) + 1 });
      this.myclicktimes = this.myclicktimes + 1;
    },
    getNowDate() {
      return new Date();
    },
    onselectmenu(menu) {
      console.log("menu", menu);
      return false;
    },
  },
  computed: {
    mystate() {
      console.log("mystate,‘第2个’执行", this.$store);
      return this.$store.state[bllAccount.namespace] || {};
    },
    wangp() {
      console.log("wangp,‘第2个’执行", this.$store);
      return new Date() ? { a: "1" } : { b: "2" };
    },
  },
  mounted() {
    console.log("mounted,这个方法在组件生命周期内只执行一次，并且'第3个'执行");
    bllAccount.setState({ count: 112 });
  },
  data() {
    console.log("data，这个方法在组件生命周期内只执行一次，并且'第1个'执行");
    return {
      nowDate: this.getNowDate(),
      myclicktimes: 0,
      lstmenu: [
        {
          text: "伊利丹",
          url: "/home/yilidan",
          selected: false,
          zhankai: false,
        },
        {
          text: "卡拉赞",
          url: "/home/yilidan",
          selected: false,
          zhankai: false,
          children: [
            {
              text: "午夜",
              url: "/home/yilidan",
              selected: false,
              zhankai: false,
            },
            {
              text: "埃兰",
              url: "/home/yilidan",
              selected: false,
              zhankai: false,
            },
          ],
        },
      ],
    };
  },
};
</script>

<template>
  <nav class="navbar navbar-inverse navbar-fixed-top">
    <div class="container-fluid">
      <div class="navbar-header">
        <button
          type="button"
          class="navbar-toggle collapsed"
          data-toggle="collapse"
          data-target="#navbar"
          aria-expanded="false"
          aria-controls="navbar"
        >
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="#">千针石林</a>
      </div>
      <div id="navbar" class="navbar-collapse collapse">
        <ul class="nav navbar-nav navbar-left">
          <li class="active"><a href="#">dashboard</a></li>
          <li><a href="#">逆变器</a></li>
          <li><a href="#">镇流器</a></li>
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <li><a href="#">设置</a></li>
          <li><a href="#">帮助</a></li>
          <li><a href="#">eeroom</a></li>
        </ul>
      </div>
    </div>
  </nav>

  <div class="container-fluid">
    <div class="row">
      <div class="col-md-3 sidebar">
        <ul
          v-for="(item, index) in lstmenu"
          v-bind:key="index"
          class="nav nav-sidebar"
        >
          <li :class="item.selected ? 'active' : ''">
            <a :href="item.url" v-if="!item.children ||item.children.length<1">
              <span>{{ item.text }}</span>
              <span
                class="pull-right"
                v-if="!item.zhankai && (item.children || []).length > 0"
              >
                <span class="glyphicon glyphicon-chevron-right"></span>
              </span>
              <span
                class="pull-right"
                v-if="item.zhankai && (item.children || []).length > 0"
              >
                <span class="glyphicon glyphicon-chevron-down"></span>
              </span>
            </a>
             <a style="cursor:pointer" v-if="item.children && item.children.length>0">
              <span>{{ item.text }}</span>
              <span
                class="pull-right"
                v-if="!item.zhankai"
              >
                <span class="glyphicon glyphicon-chevron-right"></span>
              </span>
              <span
                class="pull-right"
                v-if="item.zhankai"
              >
                <span class="glyphicon glyphicon-chevron-down"></span>
              </span>
            </a>
          </li>
          <li v-if="item.children&&item.children.length>0">
            <ul class="nav collapse nav-sub">
              <li
                v-for="(subitem, index) in item.children"
                v-bind:key="index"
              >
                <a :href="subitem.url"
                  ><span>{{ subitem.text }}</span></a
                >
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="col-md-21 col-md-offset-3 main">body</div>
    </div>
  </div>

  <div class="col-md-offset-3 navbar-fixed-bottom">
    <p class="text-center" style="margin: 0 0">
      <small>版权所有&copy;丢了光影 2016-2020</small>
    </p>
  </div>
</template>

<style>
body {
  padding-top: 50px;
}

/*
 * Global add-ons
 */

.sub-header {
  padding-bottom: 10px;
  border-bottom: 1px solid #eee;
}

/*
 * Top navigation
 * Hide default border to remove 1px line.
 */
.navbar-fixed-top {
  border: 0;
}

/*
 * Sidebar
 */

/* Hide for mobile, show later */
.sidebar {
  display: none;
}
@media (min-width: 768px) {
  .sidebar {
    position: fixed;
    top: 51px;
    bottom: 0;
    left: 0;
    z-index: 1000;
    display: block;
    padding: 20px;
    overflow-x: hidden;
    overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */
    background-color: #f5f5f5;
    border-right: 1px solid #eee;
  }
}

/* Sidebar navigation */
.nav-sidebar {
  margin-right: -21px; /* 20px padding + 1px border */
  margin-bottom: 20px;
  margin-left: -20px;
}
.nav-sidebar > li > a {
  padding-right: 20px;
  padding-left: 20px;
}
.nav-sidebar > .active > a,
.nav-sidebar > .active > a:hover,
.nav-sidebar > .active > a:focus {
  color: #fff;
  background-color: #428bca;
}

/*
 * Main content
 */

.main {
  padding: 20px;
}
@media (min-width: 768px) {
  .main {
    padding-right: 40px;
    padding-left: 40px;
  }
}
.main .page-header {
  margin-top: 0;
}

/*
 * Placeholder dashboard ideas
 */

.placeholders {
  margin-bottom: 30px;
  text-align: center;
}
.placeholders h4 {
  margin-bottom: 0;
}
.placeholder {
  margin-bottom: 20px;
}
.placeholder img {
  display: inline-block;
  border-radius: 50%;
}
.nav-sidebar {
  margin-bottom: 0;
}
.nav-sidebar > li > a {
  font-weight: 700;
}
.nav-sub > li > a > span {
  padding-left: 15px;
}
.nav-sub > li > a:hover {
  color: #fff;
  background-color: #428bca;
}
.active > a {
  color: #fff;
  background-color: #428bca;
}
.navbar-nav > li > a:hover {
  border-bottom: 2px solid #ff0000;
}
.navbar-nav > .active > a {
  border-bottom: 2px solid #ff0000;
}
</style>