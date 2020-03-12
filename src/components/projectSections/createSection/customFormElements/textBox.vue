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
      <transition name="slide-fade">
        <div v-if="errors.state != true && errors.titulo">
          <small v-show="errors.titulo.showError" class="text-error">{{ errors.titulo.msg }}</small>
        </div>
      </transition>
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
      type: "textBox",
      options: {
        titulo: null,
        peso: 0
      },
      errors:{
        state: true
        // titulo:{
          
        //   msg: "Este campo no puede estar vacío",
        //   showError: false

        // },
        // peso:{
        //   msg: "Este campo no puede estar vacío",
        //   showError: false

        // }

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

<style scoped>
  #textBoxConfig-container{

    height: 350px;
    overflow-y: scroll;

  }
</style>
