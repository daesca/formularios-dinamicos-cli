<template>
    <div id="multipleField-edit-container">
        <div class="form-group">
            <label for="title">{{ $languages.titleLabelForm }}</label><br />
            <input type="text" class="form-control" name="title" v-model="mutableConfigurations.title"/>
            <div id="error-title" class="error-block"></div>
        </div>

        <div class="form-group">
            <label for="cssClass">{{ $languages.cssClassLabelForm }}</label><br />
            <input type="text" class="form-control" name="cssClass" v-model="mutableConfigurations.cssClass" :disabled="noEdit"/>
            <small class="form-text text-muted">{{ $languages.cssClassSmallForm }}</small>
            <div id="error-cssClass" class="error-block"></div>
        </div>

        <div class="form-group">
            <label for="weight">{{ $languages.weightLabelForm }}</label>
            <input type="number" class="form-control" name="weight" v-model="mutableConfigurations.weight" min="0" max="100"/>
            <div id="error-weight" class="error-block"></div>
        </div>

        <div class="form-group">
            <label for="typeField">{{ $languages.typeLabelForm }}</label>
            <select class="form-control" name="typeField" v-model="mutableConfigurations.type" :disabled="noEdit">
                <option value="text">{{ $languages.text }}</option>
                <option value="number">{{ $languages.number }}</option>
                <option value="file">{{ $languages.file }}</option>
                <option value="date">{{ $languages.date}}</option>
            </select>
        </div>

        <div v-if="!noEdit" class="form-group">
            <label for="requiredField">{{ $languages.requiredLabelForm }}</label>
            <div class="form-check">
                <input class="form-check-input" type="radio" :name="'required-' + keyarray" value="1" checked v-model="mutableConfigurations.required">
                <label class="form-check-label" for="required">
                {{ $languages.yesText }}
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" :name="'required-' + keyarray" value="0" v-model="mutableConfigurations.required">
                <label class="form-check-label" for="required">
                {{ $languages.noText }}
                </label>
            </div>
            <div id="error-required" class="error-block"></div>
        </div>

        <div v-if="mutableConfigurations.type == 'date' || mutableConfigurations.type == 'number'">
            <div class="form-group">
                <label for="defaultValue">{{ $languages.defaultValueLabelForm }}</label>
                <input :type="mutableConfigurations.type" class="form-control" name="defaultValue" v-model="mutableConfigurations.defaultValue" min="0" max="100" :disabled="noEdit"/>
                <div id="error-defaultValue" class="error-block"></div>
            </div>

            <div class="form-group">
                <label for="minLimit">{{ $languages.minLabelForm }}</label>
                <input :type="mutableConfigurations.type" class="form-control" name="minLimit" v-model="mutableConfigurations.min" min="0" max="100" :disabled="noEdit"/>
                <div id="error-min" class="error-block"></div>
            </div>

            <div class="form-group">
                <label for="maxLimit">{{ $languages.maxLabelForm }}</label>
                <input :type="mutableConfigurations.type" class="form-control" name="maxLimit" v-model="mutableConfigurations.max" min="0" max="100" :disabled="noEdit"/>
                <div id="error-max" class="error-block"></div>
            </div>
        </div>

    </div>
</template>
<script>

import globalFunctions from '../../../../../../utilities/globalFunctions';

let props = globalFunctions.propsEditFormElements();

export default {

    props:props,

    data(){

        return{

            mutableConfigurations: JSON.parse(JSON.stringify(this.configurations)),

        }

    },
    watch: {
        editsaveoption: function(val) {
            
            if (val) {
                if (this.validateFields()){
                    // let configElement = {
                    // typeField: 'checkField',
                    // configurations: this.mutableConfigurations
                    // };
                    //console.log("Enviando", this.mutableConfigurations);
                    return this.$emit("send-option", this.mutableConfigurations);
                }else{

                    return this.$emit("send-option", false);

                }

            }

        },
        canceloption: function(val){

            this.$globalFunctions.clearErrors();

            if(val){

                this.mutableConfigurations = JSON.parse(JSON.stringify(this.configurations));
                return this.$emit("restore-info");

            }

        },
    },
    methods:{
                
        validateFields(){

            let stateValidation = true;

            let emptyFieldsValidationExclude = '';
            let negativeFieldsValidationExclude = '';
            let onlyNumbersFieldsValidationExclude = '';

            if(this.mutableConfigurations.type == 'date' || this.mutableConfigurations.type == 'number'){

                emptyFieldsValidationExclude = this.$globalFunctions.excludeFieldsValidation(this.mutableConfigurations, ["defaultValue", "cssClass", "name"]);
                negativeFieldsValidationExclude = this.$globalFunctions.excludeFieldsValidation(this.mutableConfigurations, ["title", "defaultValue","cssClass", "name", "type"]);
                onlyNumbersFieldsValidationExclude = this.$globalFunctions.excludeFieldsValidation(this.mutableConfigurations, ["title", "defaultValue","cssClass", "name", "type"]);

            }else{

                emptyFieldsValidationExclude = this.$globalFunctions.excludeFieldsValidation(this.mutableConfigurations, ["defaultValue", "cssClass", "name", "min", "max"]);
                negativeFieldsValidationExclude = this.$globalFunctions.excludeFieldsValidation(this.mutableConfigurations, ["title", "defaultValue","cssClass", "name", "type", "min", "max"]);
                onlyNumbersFieldsValidationExclude = this.$globalFunctions.excludeFieldsValidation(this.mutableConfigurations, ["title", "defaultValue","cssClass", "name", "type", "min", "max"]);

            }


            //console.log("Evaluando exclutor de campos negativos: ", negativeFieldsValidationExclude);

            let emptyFieldsValidate = this.$globalFunctions.emptyFields(emptyFieldsValidationExclude);

            let negativeNumbersValidate = this.$globalFunctions.negativeNumbers(negativeFieldsValidationExclude);

            let onlyNumbersValidate = this.$globalFunctions.regularExpressionEvaluate(/[A-Za-z]+/, onlyNumbersFieldsValidationExclude);

            // console.log("Validacion campos vacios", emptyFieldsValidate);
            // console.log("Validacion numeros negativos", negativeNumbersValidate);
            // console.log("Validacion solo numeros", onlyNumbersValidate);

            this.$globalFunctions.clearErrors();

            this.$globalFunctions.showErrors(emptyFieldsValidate.emptyFields, this.$languages.errorFieldEmptyMessage);
            this.$globalFunctions.showErrors(negativeNumbersValidate.negativeNumbers, this.$languages.errorNegativeNumbersMessage);
            this.$globalFunctions.showErrors(onlyNumbersValidate.wrongFields, this.$languages.errorLettersMessage);

            if(emptyFieldsValidate.state != true && negativeNumbersValidate.state != true && onlyNumbersValidate.state != true){

                stateValidation = false;

            }

            // console.log('Estado de la validacion', stateValidation);
            return stateValidation;

        }

    }
    
}
</script>
