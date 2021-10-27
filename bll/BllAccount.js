import Bll from "./Bll";

export default class BllAccount extends Bll{
    constructor(){
        super();
        this.namespace=BllAccount.name;
    }

    add(parameter){
        let{count}=parameter;
        this.setState({count})
    }
}