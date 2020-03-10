<template>
  <div id="textBoxConfig-container">
    <div class="form-group">
      <label for="title">Ingrese un titulo o encabezado</label>
      <input
        type="text"
        class="form-control"
        name="title"
        v-model="options.titulo"
      />
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
        titulo: "",
        // placeholder: "",
        peso: 0
      }
    };
  },
  watch: {
    activateSaveOption: function(val) {
      console.log("El watcher esta funcionando", val);

      if (val) {
        let configElement = {
          type: this.type,
          options: this.options
        };

        return this.$emit("send-option", configElement);
      }
      // configForm.push(configElement);
    }
  }
};
</script>

<style scoped></style>
