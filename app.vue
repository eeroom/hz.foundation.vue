<script>
export default {
  methods: {

  },
  data() {
    return {
      selectedmenu:{},
      lstmenu: [
        {
          opened:false,
          text: "伊利丹",
          url: "/"
        },
        {
          opened:false,
          text: "卡拉赞",
          url: "",
          children: [
            {
                opened:false,
              text: "午夜",
              url: "/account/index"
            },
            {
                opened:false,
              text: "埃兰",
              url: "/account/myinfo"
            },
          ],
        },
        {
            opened:false,
          text: "卡拉赞2",
          url: "",
          children: [
            {
                opened:false,
              text: "午夜2",
              url: "/account/index"
            },
            {
                opened:false,
              text: "埃兰2",
              url: "/account/myinfo"
            },
          ],
        }
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
      <div class="sidebar col-xs-3">
        <ul
          v-for="(item, index) in lstmenu"
          v-bind:key="index"
          class="nav nav-sidebar"
        >
          <li :class="(item==selectedmenu ? 'active ' : ' ') + (!item.children || item.children.length < 0?'menu-l1':'')">
            <router-link  v-if="!item.children || item.children.length < 0" 
             :to="item.url" @click="selectedmenu=item"><span>{{ item.text }}</span></router-link>
            <a
              v-if="item.children && item.children.length > 0"
              style="cursor: pointer"
              @click="item.opened=!item.opened"
            >
              <span>{{ item.text }}</span>
              <span class="pull-right" v-if="!item.opened">
                <span class="glyphicon glyphicon-chevron-right"></span>
              </span>
              <span class="pull-right" v-if="item.opened">
                <span class="glyphicon glyphicon-chevron-down"></span>
              </span>
            </a>
          </li>
          <li>
            <ul :class="item.opened?'nav on nav-sub':'nav collapse nav-sub'">
              <li
                :class="subitem==selectedmenu ? 'active' : ''"
                v-for="(subitem, index) in item.children"
                v-bind:key="index"
              >
               <router-link :to="subitem.url" @click="selectedmenu=subitem"><span>{{ subitem.text }}</span></router-link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="col-xs-21 col-xs-offset-3 main">
        <router-view></router-view>
      </div>
    </div>
  </div>

  <div class="col-md-offset-3 navbar-fixed-bottom">
    <p class="text-center" style="margin: 0 0">
      <small>版权所有&copy;丢了光影 2016-2020</small>
    </p>
  </div>
</template>

<style>
/*
 * Base structure
 */

/* Move down content because we have a fixed navbar that is 50px tall */
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

.navbar-toggle{
float: none;
position: absolute;
right: 0;
}

/*
 * Sidebar
 */

/* Hide for mobile, show later */
.sidebar {
  display: none;
}
@media (min-width: 768px) {
  .container-fluid .sidebar {
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

.sidebar .nav-sidebar {
  margin-right: -21px; /* 20px padding + 1px border */
  margin-left: -20px;
}
.sidebar .nav-sidebar > li > a {
  padding-right: 20px;
  padding-left: 20px;
  font-weight: 700;
}
.sidebar .nav-sidebar .nav-sub > li > a > span {
  padding-left: 15px;
}

.sidebar .active > a {
  color: #fff;
  background-color: #428bca;
}

.sidebar .nav-sub> li > a:hover,
.nav > .menu-l1 > a:hover{
  color: rgb(8, 8, 8) ;
  background-color: #b5b5b6;
  transition: 0.2s;
}

.sidebar .nav-sub> .active > a:hover,.sidebar .nav-sub> .active > a:focus,
.nav > .active > a:hover,.nav > .active > a:focus{
  color: #fff;
  background-color: #428bca;
}

.sidebar .nav-sub> li > a:hover::after,
.nav > .menu-l1 > a:hover::after{
  content: '';
  position:absolute;
  top: 12px;
  right: -8px;
  width: 15px;
  height: 15px;
  background-color: rgb(24, 23, 23);
  transform: rotate(45deg);
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
</style>