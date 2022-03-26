import Bll from "./Bll";

export default class BllAccount extends Bll {
    constructor(ns) {
        super(ns || BllAccount.name);
    }

    add(parameter) {
        let { count } = parameter;
        this.setState({ count })
    }

    getInfo() {
        this.axios.get("http://www.baidu.com").then(x => {
            /**
             * 最大痛点：大量业务方法调用api后需要对数据做前置校验，如果校验不通过，后续的处理就2点，1提示用户，2停止后面代码执行，
             * 那么最佳办法就是抛一个异常，
             * 但是promise的机制里面，then里面抛的异常只能由其后面catch进行处理
             * 如果每个业务方法进行catch，然后弹提示框的话会非常不科学，代码冗余
             * 如果不抛异常，那就需要代码弹提示框，然后立即return，这个也非常不科学，代码冗余，特别地，如果有多个前置校验将导致极端的不科学
             * 解决办法：利用Proxy,把axios返回的Promise的实例的then方法替换掉,自动加上后续的catch处理逻辑，业务代码就只管抛异常，不用管catch
             * 代码请参照父类BLL
             */
            //前置数据校验
            if (x.data.length < 1)
                throw new Error("没有获取到指定人员的信息");
            //todo  正常的业务逻辑
        })
    }
}