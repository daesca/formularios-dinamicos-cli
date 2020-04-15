<template>
    <div :class="configurations.cssClass">
        <label for=""><strong>{{ configurations.title }}</strong></label>
        <br>
        <div v-for="(value, index) in configurations.options" :key="index" class="form-check">
            <input class="form-check-input" type="checkbox" :name="configurations.name" :value="value.htmlValue" :required=" configurations.required == '1' ? true:false" v-model="answerAspirant"/>
            <label class="form-check-label" :for="configurations.name">{{ value.optionTitle }}</label>
        </div>
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
    beforeMount(){

        if(this.idField != undefined){

           return this.answerAspirant = this.$store.getters.attachSpecificAnswer({index:this.idField, reactValue: this.answerAspirant});
        }

    }
    
}
</script>