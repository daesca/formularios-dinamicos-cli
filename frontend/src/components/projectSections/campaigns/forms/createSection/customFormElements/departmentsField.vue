<template>
  <div id="textBox-create-container" class="default-box">

    <div class="alert alert-info" role="alert">
      {{ $languages.clarificationDepartmentsComponentMessage }}
    </div>

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
      <label for="weight">{{ $languages.valueLabelForm }}</label>
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

  </div>
</template>

<script>
export default {
  props: ["activateSaveOption"],
  data() {
    return {
      typeField: "departmentsField",
      configurations: {
        title: null,
        weight: 0,
        // defaultValue: '',
        name:'',
        cssClass: '',
        // min: '',
        // max: '',
        required: '1',
      },
    };
  },
  methods:{

    validateFields(){

      let stateValidation = true;

      let emptyFieldsValidationExclude = '';
      let negativeFieldsValidationExclude = '';
      let onlyNumbersFieldsValidationExclude = '';

      emptyFieldsValidationExclude = this.$globalFunctions.excludeFieldsValidation(this.configurations, ["cssClass", "name"]);
      negativeFieldsValidationExclude = this.$globalFunctions.excludeFieldsValidation(this.configurations, ["title","cssClass", "name"]);
      onlyNumbersFieldsValidationExclude = this.$globalFunctions.excludeFieldsValidation(this.configurations, ["title","cssClass", "name"]);

      let emptyFieldsValidate = this.$globalFunctions.emptyFields(emptyFieldsValidationExclude);

      let negativeNumbersValidate = this.$globalFunctions.negativeNumbers(negativeFieldsValidationExclude);

      let onlyNumbersValidate = this.$globalFunctions.regularExpressionEvaluate(/[A-Za-z]+/, onlyNumbersFieldsValidationExclude);

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

<style scoped>
  #textBoxConfig-container{

    height: 350px;
    overflow-y: scroll;

  }
</style>
