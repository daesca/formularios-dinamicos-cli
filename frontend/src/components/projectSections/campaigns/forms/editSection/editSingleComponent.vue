<template>
  <div id="editSingleComponent-container">
    <div id="title">
      <strong> {{ $languages.titleLabelForm }}: </strong> {{ options.titulo }} <br />
      <strong> {{ $languages.valueLabelForm }}: </strong>{{ options.peso }} <br>
      <strong> {{ $languages.typeLabelForm }}:  </strong> {{ $languages[type] }}
    </div>
    <div id="edit-buttons" class="text-right">
      <button
        class="btn btn-info mr-1"
        data-toggle="modal"
        :data-target="'#editModal' + keyarray"
      >
        {{ $languages.editButtonText }}

      </button>
      <button @click="deleteItem" class="btn btn-success">{{ $languages.deleteButtonText }}</button>
    </div>

    <!-- Modal -->
    <div
      class="modal fade"
      :id="'editModal' + keyarray"
      data-backdrop="static" 
      tabindex="-1" 
      role="dialog" 
      aria-labelledby="staticBackdropLabel" 
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">{{ $languages.editModalTitle }}</h5>
            </div>
            <div class="modal-body">

              <component :is="type" :options="options" :keyarray="keyarray" :editsaveoption="editSaveOption" :canceloption="cancelOption" @send-option="editElement" @restore-info="cancelOption = !cancelOption"></component> 
                <!-- Alert Component -->
                <!-- <alerts :msg="alertMsg" :type="alertType" :showAlert="showAlertMessage"></alerts> -->

            </div>
            <div class="modal-footer">
                <button
                    type="button"
                    class="btn btn-secondary"
                    data-dismiss="modal"
                    @click="cancelOption = !cancelOption"
                >
                    {{ $languages.cancelButtonText }}
                </button>

                <button
                    type="button"
                    class="btn btn-primary"
                    @click="editSaveOption = !editSaveOption"
                >
                    {{ $languages.saveButtonText }}
                </button>
            </div>
        </div>
      </div> 
      
    </div>
    <!-- <div id="alert-toast" class="toast" role="alert" aria-live="assertive" aria-atomic="true" data-delay="3000">
      <div class="toast-header">
        <img src="" class="rounded mr-2" alt="...">
        <strong class="mr-auto">Bootstrap</strong>
        <small class="text-muted">just now</small>
        <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="toast-body">
        See? Just like this.
      </div>
    </div> -->
  </div>
</template>
<script>

import * as configComponents from '../../../../../importGroups/campaigns/forms/editSection/editElementsImports'
import * as utilitiesComponents from '../../../../../importGroups/utilities/index';

export default {

  props: ["type", "options", "keyarray"],
  components:{
    'alerts': utilitiesComponents.alerts,
    'textBox': configComponents.textBox,
    'textField': configComponents.textField,
    'selectField': configComponents.selectField,
    'checkField': configComponents.checkField,
    'radioField': configComponents.radioField,
  },
  data(){

    return{

      editSaveOption: false,
      cancelOption: false,           
      showAlertMessage: false,
      alertMsg:'',
      alertType: 1,

    }

  },
  methods: {

    editElement(editedInfo){

      if(editedInfo != false){

        let editOptions = {
          
          keyarray: this.keyarray,
          options: editedInfo,

        }

        // console.log('Opciones del elemento', editOptions);

        this.$store.commit('editElementForm', editOptions);
        this.alertMsg = this.$languages.editSuccessMessage;
        this.alertType = 1;
        this.showAlertMessage = true;
        var self = this; 
        setTimeout(function(){ 
          // console.log('SetTimeOut', self.showAlertMessage);
            self.showAlertMessage = false; 
        }, 3000);

        this.closeModal("#editModal" + this.keyarray);
              
      }
      this.editSaveOption = false;

    },        
    cancelEdition(){
            
      this.mutableOptions = JSON.parse(JSON.stringify(this.options));

      // console.log('Opciones del elemento', this.mutableOptions);

      // this.$store.commit('editElementForm', editOptions);

      // let jqIdModal = "#" + this.idmodal;

      this.$JQ(this.jqIdModal).modal('hide');

      document.getElementsByClassName('modal-backdrop')[0].remove();

    },

    deleteItem() {
      this.$store.commit("deleteElementForm", this.keyarray);
    },
    closeModal(idModal){
        
        this.$JQ(idModal).modal('hide');

        document.getElementsByClassName('modal-backdrop')[0].remove();

    }

  }
};
</script>

