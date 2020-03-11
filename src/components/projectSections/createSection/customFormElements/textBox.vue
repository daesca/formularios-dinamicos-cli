<template>
  <div id="textBoxConfig-container" class="default-box">
    <div class="form-group">
      <label for="title">Ingrese un titulo o encabezado</label>
      <input
        type="text"
        class="form-control"
        name="title"
        v-model="options.titulo"
      />
      <transition name="slide-fade">
      
        <small v-show="errors.titulo.showError" class="text-error">{{ errors.titulo.msg }}</small>

      </transition>
    </div>

    <!-- <div class="form-group">
      <label for="placeHolder">Agregue un placeholder a la caja de texto</label>
      <input
        type="text"
        class="form-control"
        name="placeHolder"
        v-model="options.placeHolder"
      />
    </div> -->

    <div class="form-group">
      <label for="valueElement"
        >Ingrese un valor para este elemento de encuesta</label
      >
      <input
        type="text"
        class="form-control"
        name="valueElement"
        v-model="options.peso"
      />
      <transition name="slide-fade">
      
        <small v-show="errors.peso.showError" class="text-error">{{ errors.peso.msg }}</small>

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

<style scoped>
  #textBoxConfig-container{

    height: 350px;
    overflow-y: scroll;

  }
</style>
