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

</style>
