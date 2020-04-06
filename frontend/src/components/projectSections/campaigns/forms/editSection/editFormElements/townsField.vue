<template>
    <div id="townsField-edit-container">
        <div class="form-group">
            <label for="title">{{ $languages.titleLabelForm }}</label>
            <input type="text" class="form-control" name="title" v-model="mutableConfigurations.title"/>
            <div id="error-title" class="error-block"></div>
        </div>

        <div class="form-group">
            <label for="cssClass">{{ $languages.cssClassLabelForm }}</label><br />
            <input type="text" class="form-control" name="cssClass" v-model="mutableConfigurations.cssClass"/>
            <small class="form-text text-muted">{{ $languages.cssClassSmallForm }}</small>
            <div id="error-cssClass" class="error-block"></div>
        </div>

        <div class="form-group">
            <label for="weight">{{ $languages.valueLabelForm }}</label>
            <input type="text" class="form-control" name="weight" v-model="mutableConfigurations.weight"/>
            <div id="error-weight" class="error-block"></div>
        </div>

        <div v-if="!noEdit" class="form-group">
            <label for="requiredField">{{ $languages.requiredLabelForm }}</label>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="required" value="1" checked v-model="mutableConfigurations.required">
                <label class="form-check-label" for="required">
                {{ $languages.yesText }}
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="required" value="0" v-model="mutableConfigurations.required">
                <label class="form-check-label" for="required">
                {{ $languages.noText }}
                </label>
            </div>
            <div id="error-required" class="error-block"></div>
        </div>
    </div>            
</template>
<script>
export default {

    props:['keyarray', 'configurations', 'editsaveoption', 'canceloption', 'noEdit'],

    data(){

        return{

            mutableConfigurations: JSON.parse(JSON.stringify(this.configurations)),

        }

    },
    watch: {
        editsaveoption: function(val) {
            
            if (val) {
                if (this.validateFields()){

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

            emptyFieldsValidationExclude = this.$globalFunctions.excludeFieldsValidation(this.mutableConfigurations, ["cssClass", "name"]);
            negativeFieldsValidationExclude = this.$globalFunctions.excludeFieldsValidation(this.mutableConfigurations, ["title","cssClass", "name"]);
            onlyNumbersFieldsValidationExclude = this.$globalFunctions.excludeFieldsValidation(this.mutableConfigurations, ["title","cssClass", "name"]);

            let emptyFieldsValidate = this.$globalFunctions.emptyFields(emptyFieldsValidationExclude);

            let negativeNumbersValidate = this.$globalFunctions.negativeNumbers(negativeFieldsValidationExclude);

            let onlyNumbersValidate = this.$globalFunctions.regularExpressionEvaluate(/[A-Za-z]+/, onlyNumbersFieldsValidationExclude);

            this.$globalFunctions.clearErrors();

            this.$globalFunctions.showErrors(emptyFieldsValidate.emptyFields, this.$languages.errorFieldEmptyMessage);
            this.$globalFunctions.showErrors(negativeNumbersValidate.negativeNumbers, this.$languages.errorNegativeNumbersMessage);
            this.$globalFunctions.showErrors(onlyNumbersValidate.wrongFields, this.$languages.errorLettersMessage);

            if(emptyFieldsValidate.state != true && negativeNumbersValidate.state != true && onlyNumbersValidate.state != true){

                stateValidation = false;

            }

            // console.log('Estado de la validacion', stateValidation);
            return stateValidation;

        },  


    },

    
}
</script>