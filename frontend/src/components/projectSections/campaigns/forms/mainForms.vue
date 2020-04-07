<template>
  <div id="main-forms-container">
        <div class="container-fluid">

          <div class="row min-height-800px">

              <div id="left-side" class="col-6">
                  <div id="addConfigFormElements" class="min-height-400px">
                      <creation-section-component></creation-section-component>
                  </div>
                  <hr>
                  <div id="editFormElements" class="min-height-400px">
                    <edit-section-component></edit-section-component>
                  </div>
              </div>
              <div id="right-side" class="col-6 border-left">
                  <div id="resultForm">
                    <result-section-component @save-option="saveForm"></result-section-component>
                  </div>
              </div>

          </div>

      </div>
  </div>
</template>

<script>

import * as sectionComponents from '../../../../importGroups/campaigns/forms/mainForm';

export default {
  props:['idcampaign'],
  components: {

    'creation-section-component': sectionComponents.creationSectionComponent,
    'edit-section-component': sectionComponents.editSectionComponent,
    'result-section-component': sectionComponents.resultSectionComponent,

  },
  beforeMount(){

    this.$http.get('campaign/render/' + this.idcampaign).then(response => {

      // console.log(response);

        // console.log("Tiene render");
      if(response.body.configForm != undefined){
          
        this.$store.commit('setConfigForm', response.body.configForm);

      }
      if(response.body.configDefaultForm != undefined){ 

        this.$store.commit('setConfigMutableDefaultForm', response.body.configDefaultForm);

      }else{

        this.$store.commit('setConfigMutableDefaultForm', this.$store.getters.configDefaultForm);
        this.$store.commit('setNameToFieldOfDefaultForm', this.idcampaign);

      }

    }, response =>{

      alert("Algo ha fallado. Contacte con el administrador");
      return console.log('Too mal', response);

    });    

  },
  methods:{

    saveForm(){

      this.$http.post('field/store', { idcampaign: this.idcampaign, configForm: this.$store.getters.configForm, configDefaultForm: this.$store.getters.configMutableDefaultForm}).then(response => {

          //console.log("Too bn", response);
          
          return this.$router.go(-1);

      }, response =>{

          alert("Algo ha fallado. Contacte con el administrador");
          // return console.log('Too mal', response);

      });

    }

  }

}
</script>

