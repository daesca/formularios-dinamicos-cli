<template>
  <div id="textFieldConfig-container" class="default-box">
    <div class="form-group">
      <label for="title">{{ $languages.titleLabelForm }}</label><br />
      <input type="text" class="form-control" name="title" v-model="options.titulo" required/>
      <div id="error-titulo" class="error-block"></div>
    </div>

    <div class="form-group">

      <label for="valueElement">{{ $languages.valueLabelForm }}</label>
      <input
        type="number"
        class="form-control"
        name="valueElement"
        v-model="options.peso"
        min="0"
        max="100"
      />
      <div id="error-peso" class="error-block"></div>
    </div>

  </div>
</template>
<script>
export default {
  props: ["activateSaveOption"],
  data() {
    return {
      type: "textField",
      options: {
        titulo: null,
        peso: '0'
      },

    };
  },
  methods:{

    validateFields(){

      let resultValidate = this.$globalFunctions.emptyFields(this.options);

      this.$globalFunctions.showErrors(resultValidate.emptyFields, this.$languages.errorFieldEmptyMessage);

      // console.log('Estado de la validacion', resultValidate.state);
      return resultValidate.state;

    }
    

  },
  watch: {
    activateSaveOption: function(val) {
      
      if (val) {
        if (this.validateFields()){
          let configElement = {
            type: this.type,
            options: this.options
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
