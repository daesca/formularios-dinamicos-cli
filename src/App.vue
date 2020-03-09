<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->

        <div class="container-fluid">

          <div class="row">

              <div id="left-side" class="col-6">
                  <div id="addConfigElementsForm">
                      <creation-section-component></creation-section-component>
                      <!-- <fruity></fruity> -->
                      <!-- <fruits-f></fruits-f> -->
                  </div>
                  <div id="resultElementsForm">

                  </div>
              </div>
              <div id="right-side" class="col-6">
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
import creationSectionComponent from './components/containerComponents/creationSectionComponent';
import resultSectionComponent from './components/containerComponents/resultSectionComponent';

export default {
  name: 'App',
  components: {
    // HelloWorld,
    'creation-section-component': creationSectionComponent,
    'result-section-component': resultSectionComponent
  }
}
</script>

<style>

</style>
