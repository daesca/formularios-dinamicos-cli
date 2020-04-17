<template>
    <div id="creationSectionComponent-container">

        <h3 class="text-center">{{ $languages.creationSectionTitle }}</h3>

        Selected: {{ selected }}

        <br>

        <select v-model="selected">
                
            <option disabled value="">{{ $languages.defaultSelect }}</option>
            <option v-for="(value, key, index) in $store.getters.avalibleFormElemets" :key="index" :value="key">{{ value }}</option>

        </select>

        <br>

        <hr>

        <defaulted v-show="selected == ''"></defaulted>
        
        <div v-if="selected != ''">

            <component :is="selected" :activateSaveOption="saveOption" @send-option="saveElement" :codecampaign="codecampaign"></component>

                <!-- <component :is="selected" :activateSaveOption ="saveOption"></component> -->

        </div>

        <div v-show="selected != ''" class="text-right">

            <button @click="saveOption = true" class="btn btn-primary mr-1">{{ $languages.saveButtonText }}</button>
            <button @click="selected = ''" class="btn btn-secondary">{{ $languages.cancelButtonText }}</button>

        </div>

        <br>

    </div>

</template>
<script>
    import defaulted from './default';
    import * as configComponents from '../../../../../importGroups/campaigns/forms/createSection/createElementsImports';
    // import textBox from './customFormElements/textBox';
    // import textField from './customFormElements/textField';

    export default {
        props:["codecampaign"],
        components:{
            defaulted,
            'textBox': configComponents.textBox,
            'multipleField': configComponents.multipleField,
            'selectField': configComponents.selectField,
            'checkField': configComponents.checkField,
            'radioField': configComponents.radioField,
            'countriesField': configComponents.countriesField,
            'departmentsField': configComponents.departmentsField,
            'townsField': configComponents.townsField,
            'neighborhoodField': configComponents.neighborhoodField,
        },
        data(){
            return{

                selected: '',
                saveOption: false,

            }
        },
        methods:{

            saveElement(val) {

                if(val != false){

                    // console.log("Esta entrando en el metodo", val);

                    this.$store.commit('addElementForm', val);
                      
                    this.selected = '';

                }

                this.saveOption = false;
                


                // configForm.push(configElement);

            },
            // cancelCreation(){

            //     this.selected = '';

            // }

        }
    }
</script>
<style scoped>

</style>