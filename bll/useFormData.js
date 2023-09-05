import { computed, ref, onMounted,reactive } from "vue";

let formdata=ref({})

function init4View() {
    formdata.value={
        name:'小Y',
        address:'雷霆崖'
    }
    return formdata
}

function init4Edit() {
    formdata.value={
        name:'',
        address:null
    }
    return formdata
}

export {formdata,init4Edit,init4View}