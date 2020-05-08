<template>
  <div id="main-forms-container">
        <div class="container-fluid">

          <div class="row min-height-800px">

              <div id="left-side" class="col-6">
                  <div id="addConfigFormElements" class="min-height-400px">
                      <creation-section-component :codecampaign="codecampaign"></creation-section-component>
                  </div>
                  <hr>
                  <div id="editFormElements" class="min-height-400px">
                    <edit-section-component></edit-section-component>
                  </div>
              </div>
              <div id="right-side" class="col-6 border-left">
                  <div id="resultForm">
                    <result-section-component @save-option="saveForm" @cancel-option="cancelForm"></result-section-component>
                  </div>
              </div>

          </div>

      </div>
  </div>
</template>

<script>

import * as sectionComponents from '../../../../importGroups/campaigns/forms/mainForm';

export default {
  props:['codecampaign'],
  components: {

    'creation-section-component': sectionComponents.creationSectionComponent,
    'edit-section-component': sectionComponents.editSectionComponent,
    'result-section-component': sectionComponents.resultSectionComponent,

  },
  beforeMount(){

    this.resetForms();

    this.$http.get('campaign/render/' + this.codecampaign).then(response => {

      // console.log(response);

        // console.log("Tiene render");
      if(response.body.configForm != "null" && response.body.configForm != null){
          
        this.$store.commit('setConfigForm', JSON.parse(response.body.configForm));

      }
      if(response.body.configDefaultForm != "null" && response.body.configDefaultForm != null){

        this.$store.commit('setConfigMutableDefaultForm', JSON.parse(response.body.configDefaultForm));

      }else{

        this.$store.commit('setConfigMutableDefaultForm', this.$store.getters.configDefaultForm);
        // this.$store.commit('setNameToFieldOfDefaultForm', this.codecampaign);
        this.$store.commit('setDeletedAttributeToFieldOfDefaultForm');

      }

    }, response =>{

      alert("Algo ha fallado. Contacte con el administrador");
      return console.log('Too mal', response);

    });    

  },
  methods:{

    saveForm(){

      document.getElementById("preload").classList.add("show");

      this.$http.post('field/store', { codecampaign: this.codecampaign, configForm: this.$store.getters.configForm, configDefaultForm: this.$store.getters.configMutableDefaultForm}).then(response => {

          // console.log("Too bn", response);

          if(response.body.code == 200){
            
            alert("Formulario guardado exitosamente");
            
            return this.$router.go(-1);

          }else{
            
            alert("Error al guardar. Contacte al administrador");

          }

      }, response =>{
        
        alert("Algo ha fallado. Contacte con el administrador");
          // return console.log('Too mal', response);

      });
        
        document.getElementById("preload").classList.remove("show");

    },
    cancelForm(){

      return this.$router.go(-1);

    },
    resetForms(){

      this.$store.commit('resetConfigForm');
      this.$store.commit('resetConfigMutableDefaultForm');

    }

  }

}
</script>

