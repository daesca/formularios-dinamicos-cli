<template>
    <div id="resultSectionComponent-container">
        <h3 class="text-center">{{ $languages.resultSectionTitle }}</h3>
        <form>
            <div class="accordion" id="accordionExample">
                <div class="card">
                    <div class="card-header" id="headingOne">
                    <h2 class="mb-0">
                        <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOneResult" aria-expanded="true" aria-controls="collapseOneResult">
                        {{ $languages.baseForm }}
                        </button>
                    </h2>
                    </div>

                    <div id="collapseOneResult" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                    <div class="card-body">
                        <component v-for="(value, key, index) in $store.getters.configMutableDefaultForm" :is="value.typeField" :configurations="value.configurations" :key="index" :keyarray="index"></component>
                    </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header" id="headingTwoResult">
                    <h2 class="mb-0">
                        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwoResult" aria-expanded="false" aria-controls="collapseTwoResult">
                        {{ $languages.aditions }}
                        </button>
                    </h2>
                    </div>
                    <div id="collapseTwoResult" class="collapse" aria-labelledby="headingTwoResult" data-parent="#accordionExample">
                    <div class="card-body">
                        <component v-for="(value, key, index) in $store.getters.configForm" :is="value.typeField" :configurations="value.configurations" :key="index" :keyarray="index"></component>
                    </div>
                    </div>
                </div>
            </div>
        </form>
        <div class="text-right">
            <button class="btn btn-info mr-1" @click="saveConfiguration">{{ $languages.saveButtonText }}</button>
        </div>
    </div>

</template>
<script>

    import * as configComponents from '../../../../../importGroups/campaigns/forms/resultSection/resultElementsImports'

    export default {

        components:{
            'textBox': configComponents.textBox,
            'multipleField': configComponents.multipleField,
            'selectField': configComponents.selectField,
            'checkField': configComponents.checkField,
            'radioField': configComponents.radioField,
            'countriesField': configComponents.countriesField,
            'departmentsField': configComponents.departmentsField,
            'townsField': configComponents.townsField,
            'neighborhoodField': configComponents.neighborhoodField,
        },
        data(){
            return{
                titleForm:'',
            }
        },
        methods:{
            validateFields(){

                let resultValidate = this.$globalFunctions.emptyFields(this.options);

                this.$globalFunctions.showErrors(resultValidate.emptyFields, this.$languages.errorFieldEmptyMessage);

                // console.log('Estado de la validacion', resultValidate.state);
                return resultValidate.state;

            },
            saveConfiguration(){

                this.$emit('save-option');

            }

        }

    }
</script>
<style scoped>

</style>