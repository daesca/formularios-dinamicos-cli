<template>
    <div :class="configurations.cssClass">
        <label :for="configurations.name"><strong>{{ configurations.title }}</strong></label>
        <select v-model="answerAspirant" :name="configurations.name" class="form-control" :required=" configurations.required == '1' ? true:false">
            <option value=''>{{ $languages.selectDefaultOptionText }}</option>
            <option value="0">Municipio 1</option>
            <option value="1">Municipio 2</option>
            <option value="2">Municipio 3</option>
        </select>
        <hr>
    </div>
</template>
<script>

import globalFunctions from '../../../../../../utilities/globalFunctions';

let props = globalFunctions.propsResultFormElements();

export default {

    props:props,
    data(){

        return{

            answerAspirant: '',

        }

    },
    created(){

        if(this.defaultValue != undefined){

            this.answerAspirant = this.defaultValue;

        }

    },
    watch:{

        answerAspirant(val){

            this.$emit("changeSpecial",{ idField: this.idField, value: val })

        }

    }
    // beforeMount(){

    //     if(this.idField != undefined){

    //         return this.$store.commit('attachSpecificAnswer', {index: this.idField, reactValue: this.answerAspirant});
    //         //return this.answerAspirant = this.$store.getters.attachSpecificAnswer({index:this.idField, reactValue: this.answerAspirant});
    //     }

    // }

    
}
</script>