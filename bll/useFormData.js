import { computed, ref, onMounted,reactive } from "vue";

let formData=ref({})

function init4View() {
    formData.value={
        name:'小Y',
        address:'雷霆崖'
    }
    return formData
}

function init4Edit() {
    formData.value={
        name:'',
        address:null
    }
    return formData
}

export {formData,init4Edit,init4View}