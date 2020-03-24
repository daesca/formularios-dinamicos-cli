<template>
    <div id="editSectionComponent-container">
        <h3 class="text-center">{{ $languages.editSectionTitle}}</h3>
        <ul>
            <li v-for="(value, key) in $store.getters.configFormLast" :key="key" :value="key" >
                <strong>Index del elemento: {{ key }} </strong>
                <edit-single-component :options="value.options" :type="value.type" :keyarray="key"></edit-single-component>

            </li>
        </ul>

    </div>
</template>

<script>

import editSingleComponent from './editSingleComponent';

export default {
   
   components:{

       'edit-single-component': editSingleComponent

   },
   data(){

       return{

           datos: this.$store.getters.configFormLast
       }
   }
    
}
</script>