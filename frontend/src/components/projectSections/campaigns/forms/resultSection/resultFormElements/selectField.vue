<template>
    <div :id="configurations.name" :class="configurations.cssClass" :data-filter="idField">
        <label :for="configurations.name"><strong>{{ configurations.title }}</strong></label>
        <select v-model="answerAspirant" :name="configurations.name" class="form-control" :data-weight="configurations.weight" :required="configurations.required == '1' ? true:false" >
            <option value="">{{ $languages.selectDefaultOptionText }}</option>
            <option v-for="(value, index) in configurations.options" :key="index" :value="value.htmlValue" :data-weight="value.optionWeight">{{ value.optionTitle }}</option>
        </select>
        <hr>
    </div>
</template>
<script>

import globalFunctions from '../../../../../../utilities/globalFunctions';

let props = globalFunctions.propsResultFormElements();

export default {

    //props: Vue.Pro.$globalFunctions.propsResultFormElements(),
    props: props,
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