<template>
    <div :id="configurations.name" :class="configurations.cssClass" :data-filter="idField">
        <label for=""><strong>{{ configurations.title }}</strong></label>
        <br>
        <div v-for="(valueConfig, index) in configurations.options" :key="index" class="form-check">
            <input v-model="answerAspirant" class="form-check-input" type="checkbox" :name="configurations.name" :value="valueConfig.htmlValue"/>
            <label class="form-check-label" :for="configurations.name">{{ valueConfig.optionTitle }}</label>
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

            answerAspirant: [],

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

    //        return this.answerAspirant = this.$store.getters.attachSpecificAnswer({index:this.idField, reactValue: this.answerAspirant});
    //     }

    // }
    
}
</script>