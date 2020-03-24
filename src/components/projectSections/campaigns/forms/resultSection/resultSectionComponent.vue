<template>
    <div id="resultSectionComponent-container">
        <h3 class="text-center">{{ $languages.resultSectionTitle }}</h3>
        <form>
            <component v-for="(value, key, index) in $store.getters.configForm" :is="value.type" :options="value.options" :key="index" :keyarray="index"></component>

                <!-- <component :is="value.type" :options="value.options"></component> -->
        </form>
        <div v-if="$store.getters.configForm.length > 0" class="text-right">
            <button class="btn btn-info mr-1" >{{ $languages.saveButtonText }}</button>
        </div>
        <div
            class="modal fade"
            id="saveFormModal"
            data-backdrop="static" 
            tabindex="-1" 
            role="dialog" 
            aria-labelledby="staticBackdropLabel" 
            aria-hidden="true"
        >
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">{{ $languages.editModalTitle }}</h5>
                    </div>
                    <div class="modal-body">

                        <div class="form-group">
                                
                            <label for="titleForm">{{ $languages.saveModalTitleForm }}</label>
                            <input type="text" name="titleForm" v-model="titleForm">
                            <div id="error-titleForm" class="error-block"></div>
                        </div>

                    </div>
                    <div class="modal-footer">
                        <button
                            type="button"
                            class="btn btn-secondary"
                            data-dismiss="modal"
                            @click="titleForm = ''"
                        >
                            {{ $languages.cancelButtonText }}
                        </button>

                        <button
                            type="button"
                            class="btn btn-primary"
                            @click="saveForm"
                        >
                            {{ $languages.saveButtonText }}
                        </button>
                    </div>
                </div>
            </div> 
        
        </div>
    </div>

</template>
<script>

    import * as resultComponents from '../../../../../importGroups/campaigns/forms/resultSection/resultElementsImports'

    export default {

        components:{
            'textBox': resultComponents.textBox,
            'textField': resultComponents.textField,
            'selectField': resultComponents.selectField,
            'checkField': resultComponents.checkField,
            'radioField': resultComponents.radioField,
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
            saveForm(){

                console.log("Entrando al metodo");

                this.$JQ("#saveFormModal").modal('show');

                if(this.titleForm != ''){

                    this.$store.commit('addForms', this.titleForm);
                    return this.$router.go('main/campaigns');

                }else{

                    let error = ["titleForm"]
                    this.$globalFunctions.showErrors(error, this.$languages.errorFieldEmptyMessage);
                    return false;

                }
            }

        }

    }
</script>
<style scoped>

</style>