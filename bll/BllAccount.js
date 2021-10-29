import Bll from "./Bll";

export default class BllAccount extends Bll{
    constructor(ns){
        super(ns||BllAccount.name);
    }

    add(parameter){
        let{count}=parameter;
        this.setState({count})
    }
}