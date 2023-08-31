console.log("模块执行",this)
let my={
    name:'张三',
    age:11
}

function seek(params) {
    console.log("seek")
}

export {my,seek}