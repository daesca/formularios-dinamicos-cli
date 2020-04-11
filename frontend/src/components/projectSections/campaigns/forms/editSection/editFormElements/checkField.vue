<template>
    <div id="checkField-edit-container">
        <div class="form-group">
            <label for="title">{{ $languages.titleLabelForm }}</label>
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
            <input type="text" class="form-control" name="weight" v-model="mutableConfigurations.weight"/>
            <div id="error-weight" class="error-block"></div>
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

        <div class="form-group">
            <label for="">{{ $languages.elementsLabelForm }}</label>
            <div id="elements-container" class="default-box">
                <div v-for="(value, index) in mutableConfigurations.options" :key="index" class="d-flex justify-content-between">
                    <div class="form-group">
                        <label for="element-text">{{ $languages.textElementLabelForm }}</label>
                        <input type="text" name="element-text" class="form-control" v-model="value.optionTitle">
                        <div :id="'error-option-' + index + '-optionTitle'" class="error-block">

                        </div>
                    </div>
                    <div class="form-group">
                        <label for="element-value">{{ $languages.htmlValueLabelForm }}</label>
                        <input type="text" name="element-value" class="form-control" v-model="value.htmlValue" :disabled="noEdit"/>
                        <div :id="'error-option-' + index + '-htmlValue'" class="error-block">

                        </div>
                    </div>
                    <div class="form-group">
                        <label for="element-value">{{ $languages.weightLabelForm }}</label>
                        <input type="text" name="element-value" class="form-control" v-model="value.optionWeight">
                        <div :id="'error-option-' + index + '-optionWeight'" class="error-block"></div>
                    </div>
                    <div v-if="!noEdit" class="d-flex align-items-center">
                        <button class="btn btn-danger" @click="deleteOption(index)">{{ $languages.deleteButtonText }}</button>
                    </div>
                </div>
                <div v-if="!noEdit" id="elements-container__addButtons">
                    <button class="btn btn-success" @click="addOption">{{ $languages.addButtonText }}</button>
                </div>
            </div>
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

            let basicInfo = {
                title: this.mutableConfigurations.title,
                weight: this.mutableConfigurations.weight,
                required: this.mutableConfigurations.required,
            }

            let options = JSON.parse(JSON.stringify(this.mutableConfigurations.options));

            let errorMessages = {

                empty: this.$languages.errorFieldEmptyMessage,
                negativeNumbers: this.$languages.errorNegativeNumbersMessage,
                onlyNumbers: this.$languages.errorLettersMessage,

            }

            return this.$globalFunctions.validationFiltersWithOptions(basicInfo, options, errorMessages);

        },

        addOption(){
            
            let newOption = this.$globalFunctions.newOption();

            return this.mutableConfigurations.options.push(newOption);

        },
        deleteOption(index){
            
            this.mutableConfigurations.options.splice(index, 1);

        },

    },
}
</script>