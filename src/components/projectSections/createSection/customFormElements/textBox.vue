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
        <!-- <div v-show="errors.titulo.showError">
              Se muestra el error
              <small v-show="errors.titulo.showError" class="text-error">{{ errors.titulo.msg }}</small>

        </div> -->

          <div id="tituloMensajesError">
              Se muestra el error
              <!-- <small v-show="errors.titulo.showError" class="text-error">{{ errors.titulo.msg }}</small> -->

        </div>
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
      <!-- <div v-show="errors.peso.showError">
            se muestra el error
            <small class="text-error">{{ errors.peso.msg }}</small>
      </div> -->

      <div v-if="errors.peso">
              Se muestra el error
              <!-- <small v-show="errors.titulo.showError" class="text-error">{{ errors.titulo.msg }}</small> -->

        </div>
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
      errors:{
        // state: true,
        titulo:{
          
          msg: "t",
          showError: false

        },
        // peso:{
        //   msg: "",
        //   showError: false

        // },

      }
    };
  },
  methods:{

    validateFields(){
      
      // let resultValidate = this.$globalFunctions.fieldsEmpty(this.options);
      let resultValidate = this.$globalFunctions.fieldsEmpty(this.options);
      // console.log(resultValidate);
      document.getElementById("tituloMensajesError").innerHTML = "";
      for (let key in resultValidate) {
        
        //this.errors[key] = 
        document.getElementById(key+"MensajesError").innerHTML = resultValidate[key].msg
        
      }
      this.errors.state = resultValidate.state;
      console.log('Estado de la validacion', resultValidate.state);
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
