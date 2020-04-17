<template>
  <div id="multipleField-create-container" class="default-box">
    <div class="form-group">
      <label for="title">{{ $languages.titleLabelForm }}</label><br />
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
      <input type="number" class="form-control" name="weight" v-model="configurations.weight" min="0" max="100"/>
      <div id="error-weight" class="error-block"></div>
    </div>

    <div class="form-group">
      <label for="typeField">{{ $languages.typeLabelForm }}</label>
      <select class="form-control" name="typeField" v-model="configurations.type">
        <option value="text">{{ $languages.text }}</option>
        <option value="number">{{ $languages.number }}</option>
        <option value="file">{{ $languages.file }}</option>
        <option value="date">{{ $languages.date}}</option>
      </select>
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

    <div v-if="configurations.type != 'file'">
      <div class="form-group">
        <label for="defaultValue">{{ $languages.defaultValueLabelForm }}</label>
        <input :type="configurations.type" class="form-control" name="defaultValue" v-model="configurations.defaultValue" min="0" max="100"/>
        <div id="error-defaultValue" class="error-block"></div>
      </div>

      <div class="form-group">
        <label for="minLimit">{{ $languages.minLabelForm }}</label>
        <input :type="configurations.type" class="form-control" name="minLimit" v-model="configurations.min" min="0" max="100"/>
        <div id="error-min" class="error-block"></div>
      </div>

      <div class="form-group">
        <label for="maxLimit">{{ $languages.maxLabelForm }}</label>
        <input :type="configurations.type" class="form-control" name="maxLimit" v-model="configurations.max" min="0" max="100"/>
        <div id="error-max" class="error-block"></div>
      </div>
    </div>

  </div>
</template>
<script>

import globalFunctions from '../../../../../../utilities/globalFunctions';

let props = globalFunctions.propsCreateCustomFormElements();

export default {
  props: props,
  data() {
    return {
      typeField: "multipleField",
      deleted: '0',
      configurations: {
        title: null,
        weight: 0,
        defaultValue: '',
        type: 'text',
        name:'',
        cssClass: '',
        min: '',
        max: '',
        required: '1',
      },
    };
  },
  mounted(){

    let nameField = Math.floor(Math.random() * 10);
    return this.configurations.name = 'campaign-'+ this.codecampaign +'-custom-' + Math.floor(Math.random() * 99);

  },
  methods:{

    validateFields(){

      let stateValidation = true;

      let emptyFieldsValidationExclude = '';
      let negativeFieldsValidationExclude = '';
      let onlyNumbersFieldsValidationExclude = '';

      if(this.configurations.type == 'date' || this.configurations.type == 'number'){

        emptyFieldsValidationExclude = this.$globalFunctions.excludeFieldsValidation(this.configurations, ["defaultValue", "cssClass", "name", "min", "max"]);
        negativeFieldsValidationExclude = this.$globalFunctions.excludeFieldsValidation(this.configurations, ["title", "defaultValue","cssClass", "name", "type"]);
        onlyNumbersFieldsValidationExclude = this.$globalFunctions.excludeFieldsValidation(this.configurations, ["title", "defaultValue","cssClass", "name", "type"]);

      }else{

        emptyFieldsValidationExclude = this.$globalFunctions.excludeFieldsValidation(this.configurations, ["defaultValue", "cssClass", "name", "min", "max"]);
        negativeFieldsValidationExclude = this.$globalFunctions.excludeFieldsValidation(this.configurations, ["title", "defaultValue","cssClass", "name", "type", "min", "max"]);
        onlyNumbersFieldsValidationExclude = this.$globalFunctions.excludeFieldsValidation(this.configurations, ["title", "defaultValue","cssClass", "name", "type", "min", "max"]);

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

      if(emptyFieldsValidate.state != true || negativeNumbersValidate.state != true || onlyNumbersValidate.state != true){

        stateValidation = false;

      }

      // console.log('Estado de la validacion', stateValidation);
      return stateValidation;

    }
  
  },
  watch: {
    activateSaveOption: function(val) {
      
      if (val) {
        if (this.validateFields()){
          // console.log("Funciona el guardado");
          let configElement = {
            typeField: this.typeField,
            deleted: this.deleted,
            configurations: this.configurations
          };

          return this.$emit("send-option", configElement);
        }else{
          return this.$emit("send-option", false);

        }
      }
      // configForm.push(configElement);
    }
  }
};
</script>
<style></style>
