<template>
  <div id="textFieldConfig-container">
    <label for="title">Ingrese titulo de la seccion</label><br />

    <div class="form-group">
      <input type="text" name="title" v-model="options.title" />
    </div>

    <label for="placeholder">Ingrese placeholder</label><br />
    <input
      type="text"
      name="placeholder"
      v-model="options.placeholder"
    /><br /><br />

    <label for="valueElement">Ingrese el peso para la seccion</label>
    <input
      type="number"
      name="valueElement"
      v-model="options.valueElement"
      min="1"
      max="100"
    />
  </div>
</template>
<script>
export default {
  props: ["activateSaveOption"],
  data() {
    return {
      type: "textField",
      options: {
        title: "",
        placeHolder: "",
        valueElement: 0
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
