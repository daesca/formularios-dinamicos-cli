<template>
  <div id="editSingleComponent-container">
    <div id="title">
      <strong> {{ $languages.titleLabelForm }}: </strong> {{ configurations.title }} <br />
      <strong> {{ $languages.weightLabelForm }}: </strong>{{ configurations.weight }} <br>
      <template v-if="configurations.type != null"><strong> {{ $languages.typeLabelForm }}:  </strong> {{ $languages[typeField] }} ({{ $languages[configurations.type] }})</template>
      <template v-else><strong> {{ $languages.typeLabelForm }}:  </strong> {{ $languages[typeField] }}</template>
    </div>
    <div id="" class="text-right">
      <button
        class="btn btn-info mr-1"
        data-toggle="modal"
        :data-target="'#' + setJqIdModal()"
      >
        {{ $languages.editButtonText }}

      </button>
      <button @click="deleteItem" class="btn btn-success">{{ $languages.deleteButtonText }}</button>
    </div>

    <!-- Modal -->
    <div
      class="modal fade"
      :id="setJqIdModal()"
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

              <component :is="typeField" :configurations="configurations" :keyarray="keyarray" :editsaveoption="editSaveOption" :canceloption="cancelOption" :noEdit="noEdit" @send-option="editElement" @restore-info="cancelOption = !cancelOption"></component> 
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
                    v-if="!noEdit"
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

  props: ["typeField", "configurations", "keyarray", "noEdit"],
  components:{
    'alerts': utilitiesComponents.alerts,
    'textBox': configComponents.textBox,
    'multipleField': configComponents.multipleField,
    'selectField': configComponents.selectField,
    'checkField': configComponents.checkField,
    'radioField': configComponents.radioField,
    'countriesField': configComponents.countriesField,
    'departmentsField': configComponents.departmentsField,
    'townsField': configComponents.townsField,
    'neighborhoodField': configComponents.neighborhoodField,
  },
  data(){

    return{
      jqIdModal: 'editModal' + this.keyarray,
      editSaveOption: false,
      cancelOption: false,           
      showAlertMessage: false,
      alertMsg:'',
      alertType: 1,

    }

  },
  methods: {

    setJqIdModal(){

      let idModal = "editModal-" + this.keyarray;

      if(this.noEdit){

        idModal = "editModal-default-" + this.keyarray;

      }

      return idModal;

    },

    editElement(editedInfo){

      if(editedInfo != false){

        let editConfigurations = {
          
          keyarray: this.keyarray,
          configurations: editedInfo,

        }

        // console.log('Opciones del elemento', editOptions);

        this.$store.commit('editElementForm', editConfigurations);
        this.alertMsg = this.$languages.editSuccessMessage;
        this.alertType = 1;
        this.showAlertMessage = true;
        var self = this; 
        setTimeout(function(){ 
          // console.log('SetTimeOut', self.showAlertMessage);
            self.showAlertMessage = false; 
        }, 3000);

        this.closeModal("#" + this.setJqIdModal());
              
      }
      this.editSaveOption = false;

    },        
    cancelEdition(){
            
      this.mutableConfigurations = JSON.parse(JSON.stringify(this.configurations));

      // console.log('Opciones del elemento', this.mutableConfigurations);

      this.closeModal("#" + this.jqIdModal);

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

