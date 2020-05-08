<template>
  <div id="app">
    <router-view name="loginView"></router-view>
    <router-view name="main"></router-view>
    <div id="preload">
      <div class="dots-container">
        <div class="spinner-grow text-primary" role="status">
          <span class="sr-only">Loading...</span>
        </div>
        <div class="spinner-grow text-primary" role="status">
          <span class="sr-only">Loading...</span>
        </div>
        <div class="spinner-grow text-primary" role="status">
          <span class="sr-only">Loading...</span>
        </div>
        <div class="spinner-grow text-primary" role="status">
          <span class="sr-only">Loading...</span>
        </div>
        <div class="spinner-grow text-primary" role="status">
          <span class="sr-only">Loading...</span>
        </div>
        <div class="spinner-grow text-primary" role="status">
          <span class="sr-only">Loading...</span>
        </div>
        <div class="spinner-grow text-primary" role="status">
          <span class="sr-only">Loading...</span>
        </div>
        <div class="spinner-grow text-primary" role="status">
          <span class="sr-only">Loading...</span>
        </div>
        
      </div>
      <div class="text-preload">Procesando...</div>
    </div>
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

  /* General Styles */

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

  #preload{

    background-color: rgba(220, 213, 213, 0.5);
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1000;
    display: none;
    flex-wrap: wrap;
    justify-content: center;
    flex-direction:column;
    visibility: hidden;
    opacity: 0;
    transition: visibility .1s, opacity 1s ease;
    transition-delay: .8s;

  }
  #preload.show{

    display: flex !important;
    visibility: visible;
    /* transition: opacity 1s ease; */
    opacity: 1;

  }
  #preload .dots-container{

    display: flex;
    justify-content: center;


  }
  #preload .text-preload{

    text-align: center;
    font-size: 1.5rem;
    font-weight: bold;
    width: 100%;

  }
  
  button:focus{

    outline: none;

  }

  /* End General Styles */

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

  .ovalButton:hover{

    text-decoration:none;
    color: #fff;

  }

  .backPrimaryColor{

    background-color: #007DF6;

  }

  .textPrimaryColor{

    color: #007DF6;

  }

  .default-color-text{

    color: #02243C;

  }

  .error-color-text{

    color: #ff0000;

  }



</style>
