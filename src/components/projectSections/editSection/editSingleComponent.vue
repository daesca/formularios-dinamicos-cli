<template>
  <div id="editSingleComponent-container">
    <div id="title">
      <strong>Titulo:</strong> {{ options.titulo }} <br />
      <strong>Tipo: </strong>{{ $languages[type]}} <br>
      <strong>Peso: </strong> {{ options.peso }}
    </div>
    <div id="edit-buttons" class="text-right">
      <button
        class="btn btn-info mr-1"
        data-toggle="modal"
        :data-target="'#modalElement' + keyarray"
      >
        Editar
      </button>
      <button @click="deleteItem" class="btn btn-success">Eliminar</button>
    </div>

    <!-- Modal -->
    <div
      class="modal fade"
      :id="'modalElement' + keyarray"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <component :is="type" :options="options" :keyarray="keyarray"></component>
      <!-- <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Editar elemento</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div v-show="showAlertMessage" class="alert alert-success" role="alert">
              Elemento editado exitosamente
            </div>
            <component :is="type" :activateSaveOption="activateSaveOption" :options="options" @send-options="editElement"></component>   
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              class="btn btn-primary"
              @click="activateSaveOption = true"
            >
              Guardar
            </button>
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>
<script>

// import textBox from './editFormElements/textBox';
// import textField from './editFormElements/textField';

import { textBox, textField } from '../../../importGroups/editSection/editElementsImports'

export default {

  props: ["type", "options", "keyarray"],
  components:{
    textBox,
    textField
  },
  // data(){

  //   return{


  //   }

  // },
  methods: {

    deleteItem() {
      this.$store.commit("deleteElementForm", this.keyarray);
    }
  }
};
</script>
<style scoped></style>
