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
                    <result-section-component></result-section-component>
                  </div>
              </div>

          </div>

      </div>
  </div>
</template>

<script>

import * as sectionComponents from '../../../../importGroups/campaigns/forms/mainForm';

export default {
  components: {

    'creation-section-component': sectionComponents.creationSectionComponent,
    'edit-section-component': sectionComponents.editSectionComponent,
    'result-section-component': sectionComponents.resultSectionComponent,

  },

}
</script>

