<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->

        <div class="container-fluid">

          <div class="row min-height-800px">
            <!-- <button @click="checkPlugin" >Probar plugin</button> -->
              <div id="left-side" class="col-6">
                  <div id="addConfigFormElements" class="min-height-400px">
                      <creation-section-component></creation-section-component>
                      <!-- <fruity></fruity> -->
                      <!-- <fruits-f></fruits-f> -->
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
// import HelloWorld from './components/HelloWorld.vue';

import creationSectionComponent from './components/projectSections/createSection/creationSectionComponent';
import editSectionComponent from './components/projectSections/editSection/editSectionComponent'
import resultSectionComponent from './components/projectSections/resultSection/resultSectionComponent';

export default {
  name: 'App',
  components: {
    // HelloWorld,
    'creation-section-component': creationSectionComponent,
    'result-section-component': resultSectionComponent,
    'edit-section-component': editSectionComponent
  },
  // methods:{

  //   checkPlugin(){

  //     this.$globalFunctions.testCode();

  //   }

  // }
}
</script>

<style>
  /* #addConfigFormElements{

    overflow-y: scroll;

  }

  #editFormElements{

    overflow-y: scroll;

  } */

  .error-block{

    display:none;
    color: red;

  }

  .show{

    display:block !important;

  }
  .text-error{

    color:red;
    font-weight: bold;

  }

  .default-box{

    height: 350px;
    overflow-y: auto;
    padding-left: 15px;
    padding-right: 15px;

  }

  .min-height-800px{

    min-height: 800px;

  }
  .border-left{

    border-left: 1px solid #ccc;

  }
  .min-height-400px{

    min-height: 400px;

  }

  .slide-fade-enter-active {
  transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }

</style>
