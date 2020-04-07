<template>
    <div id="editSectionComponent-container">
        <h3 class="text-center">{{ $languages.editSectionTitle}}</h3>
        <div class="accordion" id="accordionExample">
            <div class="card">
                <div class="card-header" id="headingOneEdit">
                <h2 class="mb-0">
                    <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOneEdit" aria-expanded="true" aria-controls="collapseOneEdit">
                        {{ $languages.baseForm }}
                    </button>
                </h2>
                </div>

                <div id="collapseOneEdit" class="collapse show" aria-labelledby="headingOneEdit" data-parent="#accordionExample">
                <div class="card-body">
                    <ul>
                        <li v-for="(value, key) in $store.getters.configMutableDefaultForm" :key="key" >
                            <strong>Index del elemento: {{ key }} </strong>
                            <edit-single-component :configurations="value.configurations" :typeField="value.typeField" :keyarray="key" :noEdit="true"></edit-single-component>

                        </li>
                    </ul>
                </div>
                </div>
            </div>
            <div class="card">
                <div class="card-header" id="headingTwoEdit">
                <h2 class="mb-0">
                    <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwoEdit" aria-expanded="false" aria-controls="collapseTwoEdit">
                        {{ $languages.aditions }}
                    </button>
                </h2>
                </div>
                <div id="collapseTwoEdit" class="collapse" aria-labelledby="headingTwoEdit" data-parent="#accordionExample">
                <div class="card-body">
                    <ul>
                        <li v-for="(value, key) in $store.getters.configForm" :key="key" >
                            <strong>Index del elemento: {{ key }} </strong>
                            <edit-single-component :configurations="value.configurations" :typeField="value.typeField" :keyarray="key" :noEdit="false"></edit-single-component>

                        </li>
                    </ul>
                </div>
                </div>
            </div>
        </div>

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