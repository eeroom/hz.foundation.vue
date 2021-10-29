import {createRouter,createWebHashHistory} from 'vue-router'
import { createApp, h } from 'vue'
function createMyRouter(app) {
    let lstview = require.context('./view', true, /.*\.vue/);
    console.log("lstviewkeys", lstview.keys());
    lstview.keys().forEach(key => {
        let tmp = lstview(key).default;
        let name = key.replace("./", "").replace(".vue", "").replace("/", "-");
        app.component(name, tmp);
    })
    let lstMatchConfig = [
        {
            path: "/:controller/:action",
            name: "l2",
            component: {
                render:function(proxyToUse, renderCache, props, setupState, data, ctx) {
                    console.log("routes-l2", `${this.$route.params.controller}-${this.$route.params.action}`);
                    return h(app.component(`${this.$route.params.controller}-${this.$route.params.action}`),props);
                }
            }
        }, {
            path: "/:action",
            name: "l1",
            component: {
                render:function(proxyToUse, renderCache, props, setupState, data, ctx) {
                    console.log("routes-l1", this.$route.params.action);
                    return h(app.component(this.$route.params.action),props);
                }
            }
        }, {
            path:'/:pathMatch(.*)*',
            name: "index",
            component: {
                render:function(proxyToUse, renderCache, props, setupState, data, ctx) {
                    console.log("routes-default");
                    return h(app.component("index"),props);
                }
            }
        }
    ];
    let router = createRouter({ routes: lstMatchConfig, history: createWebHashHistory() });
    return router;
}

export default createMyRouter;