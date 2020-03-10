<template>
  <div id="textFieldConfig-container">
    <div class="form-group">
      <label for="title">Ingrese titulo de la seccion</label><br />
      <input type="text" class="form-control" name="title" v-model="options.titulo" required/>
    </div>

    <div class="form-group">
      <label for="placeholder">Ingrese placeholder</label><br />
      <input
        type="text"
        class="form-control"
        name="placeholder"
        v-model="options.placeholder"
        required
      />
    </div>

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
        titulo: "",
        placeholder: "",
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
