<template>
  <div id="textBoxConfig-container">
    <label for="title">Ingrese un titulo o encabezado</label><br />
    <input type="text" name="title" v-model="options.title" /> <br /><br />

    <label for="placeHolder">Agregue un placeholder a la caja de texto</label
    ><br />
    <input type="text" name="placeHolder" v-model="options.placeHolder" />
    <br /><br />

    <label for="keyWords"
      >Ingrese palabras claves separadas por comas y sin espacios</label
    ><br />
    <input type="text" name="keyWors" v-model="options.keyWordsText" />
    <br /><br />

    <label for="valueElement"
      >Ingrese un valor para este elemento de encuesta</label
    ><br />
    <input type="text" name="valueElement" v-model="options.valueElement" />
    <br /><br />
  </div>
</template>

<script>
export default {
  props: ["activateSaveOption"],
  data() {
    return {
      type: "textBox",
      options: {
        title: "",
        placeHolder: "",
        keyWordsText: "",
        arrayKeyWors: [],
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
