<template>
  <div id="app">
    <router-view name="loginView"></router-view>
    <router-view name="main"></router-view>
  </div>
</template>

<script>


export default {

  name: 'App',
  components: {

  },

}
</script>

<style>

  @font-face {
    font-family: "Roboto";
    src: url('./assets/fonts/Roboto-Light.ttf') format('ttf'),
    url('./assets/fonts/Roboto-Regular.ttf') format('ttf'),
    url('./assets/fonts/Roboto-Bold.ttf') format('ttf');
  }

  body{

    font-family: "Roboto", sans-serif !important;
    font-weight: normal !important;
    color: #02243C !important;

  }

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

    height: 400px;
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

  .ovalButton{

    border: 1px solid #fff;
    padding: .3em 2em;
    border-radius: 50px;
    font-weight: bold;
    color: #fff;
      
  }

  .backPrimaryColor{

    background-color: #007DF6;

  }

  .textPrimaryColor{

    color: #007DF6;

  }

</style>
