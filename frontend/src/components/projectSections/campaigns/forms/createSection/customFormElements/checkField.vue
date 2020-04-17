<template>
    <div id="checkField-create-section">
        <div class="form-group">
            <label for="title">{{ $languages.titleLabelForm }}</label>
            <input type="text" class="form-control" name="title" v-model="configurations.title"/>

            <div id="error-title" class="error-block"></div>
        </div>
        <div class="form-group">
            <label for="cssClass">{{ $languages.cssClassLabelForm }}</label><br />
            <input type="text" class="form-control" name="cssClass" v-model="configurations.cssClass"/>
            <small class="form-text text-muted">{{ $languages.cssClassSmallForm }}</small>
            <div id="error-cssClass" class="error-block"></div>
        </div>

        <div class="form-group">
            <label for="weight">{{ $languages.weightLabelForm }}</label>
            <input type="text" class="form-control" name="weight" v-model="configurations.weight"/>
            <div id="error-weight" class="error-block"></div>
        </div>

        <div class="form-group">
            <label for="requiredField">{{ $languages.requiredLabelForm }}</label>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="required" value="1" checked v-model="configurations.required">
                <label class="form-check-label" for="required">
                {{ $languages.yesText }}
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="required" value="0" v-model="configurations.required">
                <label class="form-check-label" for="required">
                {{ $languages.noText }}
                </label>
            </div>
            <div id="error-required" class="error-block"></div>
        </div>

        <div class="form-group">
            <label for="">{{ $languages.elementsLabelForm }}</label>
            <div id="elements-container" class="default-box">
                <div v-for="(value, index) in configurations.options" :key="index" class="d-flex justify-content-between">
                    <div class="form-group">
                        <label for="element-text">{{ $languages.textElementLabelForm }}</label>
                        <input type="text" name="element-text" class="form-control" v-model="value.optionTitle">
                        <div :id="'error-option-' + index + '-optionTitle'" class="error-block">

                        </div>
                    </div>
                    <div class="form-group">
                        <label for="element-value">{{ $languages.htmlValueLabelForm }}</label>
                        <input type="text" name="element-value" class="form-control" v-model="value.htmlValue">
                        <div :id="'error-option-' + index + '-htmlValue'" class="error-block">

                        </div>
                    </div>
                    <div class="form-group">
                        <label for="element-value">{{ $languages.weightLabelForm }}</label>
                        <input type="text" name="element-value" class="form-control" v-model="value.optionWeight">
                        <div :id="'error-option-' + index + '-optionWeight'" class="error-block"></div>
                    </div>
                    <div class="d-flex align-items-center">
                        <button class="btn btn-danger" @click="deleteOption(index)">{{ $languages.deleteButtonText }}</button>
                    </div>
                </div>
                <div id="elements-container__addButtons">
                    <button class="btn btn-success" @click="addOption">{{ $languages.addButtonText }}</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

import globalFunctions from '../../../../../../utilities/globalFunctions';

let props = globalFunctions.propsCreateCustomFormElements();

export default {
    
    props: props,
    data(){

        return{

            typeField: 'checkField',
            deleted: '0',
            configurations:{
                title: '',
                weight:'0',
                name:'' ,
                cssClass:'',
                required:'1',
                options:[
                    {
                        optionTitle:'',
                        htmlValue: '',
                        optionWeight: 0,
                    }
                ]
            }

        }

    },
    mounted(){

        let nameField = Math.floor(Math.random() * 10);
        return this.configurations.name = 'campaign-'+ this.codecampaign +'-custom-' + Math.floor(Math.random() * 99);

    },
    methods:{
        addOption(){

            let newOption = this.$globalFunctions.newOption();

            return this.configurations.options.push(newOption);

        },
        deleteOption(index){
            
            return this.configurations.options.splice(index, 1);

        },
        validateFields(){

            let basicInfo = {
                title: this.configurations.title,
                weight: this.configurations.weight,
                required: this.configurations.required,
            }

            let options = JSON.parse(JSON.stringify(this.configurations.options));

            let errorMessages = {

                empty: this.$languages.errorFieldEmptyMessage,
                negativeNumbers: this.$languages.errorNegativeNumbersMessage,
                onlyNumbers: this.$languages.errorLettersMessage,

            }
            //console.log("Resultado de la validacion:", this.$globalFunctions.validationFiltersWithOptions(basicInfo, options, errorMessages));
            return this.$globalFunctions.validationFiltersWithOptions(basicInfo, options, errorMessages);

        }

    },
    watch: {
        activateSaveOption: function(val) {
        
            if (val) {
                if (this.validateFields()){
                let configElement = {
                    typeField: this.typeField,
                    deleted: this.deleted,
                    configurations: this.configurations
                };
                // console.log("ConfigElement Select", configElement);
                return this.$emit("send-option", configElement);

                }else{

                    return this.$emit("send-option", false);

                }
            }

        }
  }

}
</script>