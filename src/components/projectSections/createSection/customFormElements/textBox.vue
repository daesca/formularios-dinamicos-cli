<template>
  <div id="textBoxConfig-container" class="default-box">
    <div class="form-group">
      <label for="title">{{ $languages.titleLabelForm }}</label>
      <input
        type="text"
        class="form-control"
        name="title"
        v-model="options.titulo"
      />

        <div id="error-titulo" class="error-block"></div>

    </div>

    <div class="form-group">
      <label for="valueElement"
        >{{ $languages.valueLabelForm }}</label
      >
      <input
        type="text"
        class="form-control"
        name="valueElement"
        v-model="options.peso"
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
      type: "textBox",
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

<style scoped>
  #textBoxConfig-container{

    height: 350px;
    overflow-y: scroll;

  }
</style>
