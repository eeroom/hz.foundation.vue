import axios from 'axios'

/**
 * 最大痛点：大量业务方法调用api后需要对数据做前置校验，如果校验不通过，后续的处理就2点，1提示用户，2停止后面代码执行，
 * 那么最佳办法就是抛一个异常，
 * 但是promise的机制里面，then里面抛的异常只能由其后面catch进行处理
 * 如果每个业务方法进行catch，然后弹提示框的话会非常不科学，代码冗余
 * 如果不抛异常，那就需要代码弹提示框，然后立即return，这个也非常不科学，代码冗余，特别地，如果有多个前置校验将导致极端的不科学
 * 解决办法：利用Proxy,把axios返回的Promise的实例的then方法替换掉,自动加上后续的catch处理逻辑，业务代码就只管抛异常，不用管catch
 */
let createThenHandler = function (params) {
    return {
        get: function (target, key, receiver) {
            let fuc = Reflect.get(target, key, receiver).bind(target);
            if (key != "then")
                return fuc;
            let wrapperThen = function (callback, originThen) {
                if (originThen)
                    return fuc(callback);
                return new Proxy(fuc(callback).catch(err => {
                    let { message, syserr = true } = err;
                    console.error("axios请求信息:", params);
                    console.error("axios回调处理异常：", err);
                    if (syserr)
                        alert("系统出错,请重试或联系系统管理员!");
                    else
                        alert(message);
                }), createThenHandler(params))
            }
            return wrapperThen;
        }
    }
}
export default class Bll {
    constructor(ns) {
        this.namespace = ns;
        this.axios = axios;
        let oldget = this.axios.get;
        this.axios.get = function () {
            return new Proxy(oldget(...arguments), createThenHandler(arguments));
        }
        let opost = this.axios.post;
        this.axios.post = function () {
            return new Proxy(opost(...arguments), createThenHandler(arguments));
        }
    }

    dispatch(parameter) {
        return Bll.dispatch(parameter);
    }

    getState() {
        return Bll.getState();
    }



    setState(data) {
        this.dispatch({ type: "hz", namespace: this.namespace, data });
    }
}