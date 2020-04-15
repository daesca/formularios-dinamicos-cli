<template>
    <div id="renderResult-container" class="container">
        <h3 class="text-center">{{ $languages.resultSectionTitle }}</h3>
        <form>

            <template v-for="(value, key, index) in $store.getters.configMutableDefaultForm">
                <component v-if="value.deleted == '0'" :is="value.typeField" :configurations="value.configurations" :key="index" :keyarray="index" :idField="typeof(value.idField) === undefined ? '': value.idField"></component>
            </template>

            <template v-for="(value, key, index) in $store.getters.configForm">
                <component v-if="value.deleted == '0'" :is="value.typeField" :configurations="value.configurations" :key="index" :keyarray="index" :idField="value.idField"></component>
            </template>

            <button class="btn btn-success">Enviar</button>

        </form>
        <div class="text-right mt-2">
            <button class="btn btn-secondary mr-1" @click="cancelOption">{{ $languages.cancelButtonText }}</button>
            <button class="btn btn-info mr-1" @click="saveConfiguration">{{ $languages.saveButtonText }}</button>
        </div>
    </div>

</template>
<script>

    import * as configComponents from '../../../../../importGroups/campaigns/forms/resultSection/resultElementsImports'

    export default {
        props:['idcampaign'],
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

                answersAspirant: {},

            }
        },
        created(){

            // this.resetForms();

            this.$http.get('campaign/render/' + this.idcampaign).then(response => {

                // console.log(response);

                // console.log("Tiene render");

                // this.$store.commit('setAnswersAspirant', JSON.parse(response.body.configDefaultForm));
                //this.$store.commit('setAnswersAspirant', JSON.parse(response.body.configForm));

                this.setAnswersAspirant(JSON.parse(response.body.configDefaultForm));

                this.$store.commit('setConfigForm', JSON.parse(response.body.configForm));

                this.$store.commit('setConfigMutableDefaultForm', JSON.parse(response.body.configDefaultForm));



            }, response =>{

            alert("Algo ha fallado. Contacte con el administrador");
            return console.log('Too mal', response);

            });
            

        },
        methods:{
            // validateFields(){

            //     let resultValidate = this.$globalFunctions.emptyFields(this.options);

            //     this.$globalFunctions.showErrors(resultValidate.emptyFields, this.$languages.errorFieldEmptyMessage);

            //     // console.log('Estado de la validacion', resultValidate.state);
            //     return resultValidate.state;

            // },
            saveConfiguration(){

                this.$emit('save-option');

            },
            cancelOption(){

                this.$emit('cancel-option');

            },
            setAnswersAspirant(JSONForm) {

                console.log("Desde Answers:", JSONForm);

                for (let i = 0; i < JSONForm.length; i++) {

                    //Vue.set(state.answersAspirant[i], 'idField', state.configMutableDefaultForm[i].idField);
                    console.log("Indice:", JSONForm[i].idField);

                    let newIndex = JSONForm[i].idField;

                    this.answersAspirant[newIndex] = { answer: '' };


                }

            }

        }

    }
</script>
<style scoped>

</style>