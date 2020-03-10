<template>
    <div id="editSectionComponent-container">
        <h3 class="text-center">Editor de elementos</h3>
        <ul>
            <li v-for="(value, key) in $store.getters.configForm" :key="key" :value="key" >
                <strong>Index del elemento: {{ key }} </strong>
            
                <edit-single-component :options="value.options" :keyarray="key"></edit-single-component>

            </li>
        </ul>

    </div>
</template>

<script>

import editSingleComponent from './editSingleComponent';

export default {
   
   components:{

       'edit-single-component': editSingleComponent

   }
    
}
</script>

<style scoped>

</style>