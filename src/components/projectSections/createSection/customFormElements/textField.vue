<template>
  <div id="textFieldConfig-container" class="default-box">
    <div class="form-group">
      <label for="title">{{ $languages.titleLabelForm }}</label><br />
      <input type="text" class="form-control" name="title" v-model="options.titulo" required/>
            <transition name="slide-fade">
        <div v-if="errors.state != true && errors.titulo">
          <small v-show="errors.titulo.showError" class="text-error">{{ errors.titulo.msg }}</small>
        </div>
      </transition>
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
      <transition name="slide-fade">
        <div v-if="errors.state != true && errors.peso">
          <small v-show="errors.peso.showError" class="text-error">{{ errors.peso.msg }}</small>
        </div>
      </transition>
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
      errors:{
        // state: true,
        titulo:{
          
          msg: "",
          showError: false,

        },
        peso:{
          msg: "",
          showError: false,

        }

      }
    };
  },
  methods:{

    validateFields(){

      // let resultValidate = this.$globalFunctions.fieldsEmpty(this.options);
      let resultValidate = this.$globalFunctions.fieldsEmpty(this.options);
      console.log(resultValidate);

      for (let key in resultValidate) {
       
        this.errors[key] = resultValidate[key];
        
      }
      this.errors.state = resultValidate.state;
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
