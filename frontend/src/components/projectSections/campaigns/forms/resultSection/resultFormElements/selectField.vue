<template>
    <div :class="configurations.cssClass">
        <label :for="configurations.name"><strong>{{ configurations.title }}</strong></label>
        <select :name="configurations.name + '['+keyarray+'][]'" class="form-control" :data-weight="configurations.weight" :required="configurations.required == '1' ? true:false" v-model="answerAspirant">
            <option default>{{ $languages.selectDefaultOptionText }}</option>
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

            answerAspirant:'',


        }

    },
    beforeMount(){

        if(this.idField != undefined){

            return this.$store.commit('attachSpecificAnswer', {index: this.idField, reactValue: this.answerAspirant});
            //return this.answerAspirant = this.$store.getters.attachSpecificAnswer({index:this.idField, reactValue: this.answerAspirant});
        }

    }
    

    
}
</script>