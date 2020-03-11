<template>
  <div id="textFieldConfig-container" class="default-box">
    <div class="form-group">
      <label for="title">Ingrese titulo de la seccion</label><br />
      <input type="text" class="form-control" name="title" v-model="options.titulo" required/>
    </div>

    <!-- <div class="form-group">
      <label for="placeholder">Ingrese placeholder</label><br />
      <input
        type="text"
        class="form-control"
        name="placeholder"
        v-model="options.placeholder"
        required
      />
    </div> -->

    <div class="form-group">

      <label for="valueElement">Ingrese el peso para la seccion</label>
      <input
        type="number"
        class="form-control"
        name="valueElement"
        v-model="options.peso"
        min="0"
        max="100"
      />
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
        peso: 0
      },
      errors:{
        titulo:{
          
          msg: "Este campo no puede estar vacío",
          showError: false

        },
        peso:{
          msg: "Este campo no puede estar vacío",
          showError: false

        }

      }
    };
  },
  methods:{

    fieldsEmpty(){

      let allClear = true;

      if(!this.options.titulo){
        console.log('Error en titulo');
        this.errors.titulo.showError = true;
        allClear = false;

      }

      if(!this.options.peso){
        console.log('Error en peso');
        this.errors.peso.showError = true;
        allClear = false;

      }

      return allClear;

    }

  },
  watch: {
    activateSaveOption: function(val) {
      
      if (val) {
      console.log("El watcher esta funcionando", val);
        if (this.fieldsEmpty()){
          console.log("Entra al if");
          let configElement = {
            type: this.type,
            options: this.options
          };

          return this.$emit("send-option", configElement);
        }else{
          console.log("Entra al else");
          return this.$emit("send-option", false);

        }
      }
      // configForm.push(configElement);
    }
  }
};
</script>
<style></style>
