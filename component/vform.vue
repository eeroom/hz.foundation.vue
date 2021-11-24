<template>
    <form>
        <slot></slot>
    </form>
</template>
<script>
import {provide} from 'vue'
export default {
    setup(){
        let dictValidat={};
        provide("dictValidat",dictValidat);
        let validata=callback=>{
            let rts=[];
            for (const key in dictValidat) {
                if (Object.hasOwnProperty.call(dictValidat, key)) {
                    const element = dictValidat[key];
                    if(!element.flag)
                        break
                    let rt= element.handler();
                    rts.push(rt);
                }
            }
            let vrt=!rts.filter(x=>x).length>0
            callback("校验完成",vrt);
        }

        return{
            validata
        }
    }
}
</script>