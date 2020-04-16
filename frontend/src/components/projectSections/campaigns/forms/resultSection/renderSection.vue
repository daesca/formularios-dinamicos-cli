<template>
    <div id="renderResult-container" class="container">
        <h3 class="text-center">{{ $languages.resultSectionTitle }}</h3>
        <form >

            <template v-for="(value, key, index) in $store.getters.configMutableDefaultForm">
                <component v-if="value.deleted == '0'" @changeSpecial="changeValue" :is="value.typeField" :configurations="value.configurations" :key="index" :keyarray="index" :idField="value.idField"></component>
            </template>

            <template v-for="(value, key, index) in $store.getters.configForm">
                <component v-if="value.deleted == '0'" @changeSpecial="changeValue" :is="value.typeField" :configurations="value.configurations" :key="index" :keyarray="index" :idField="value.idField"></component>
            </template>

            <div class="text-right mt-2">
                <button class="btn btn-success" @click.prevent="sendAnswers">Enviar</button>
            </div>

        </form>

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
                documentAspirant: '123456789'

            }
        },
        created(){

            // this.resetForms();

            this.$http.get('campaign/render/' + this.idcampaign).then(response => {

                // console.log(response);

                // this.$store.commit('setAnswersAspirant', JSON.parse(response.body.configDefaultForm));
                //this.$store.commit('setAnswersAspirant', JSON.parse(response.body.configForm));

                this.setAnswersAspirant(JSON.parse(response.body.configDefaultForm));

                this.setAnswersAspirant(JSON.parse(response.body.configForm));

                this.$store.commit('setConfigForm', JSON.parse(response.body.configForm));

                this.$store.commit('setConfigMutableDefaultForm', JSON.parse(response.body.configDefaultForm));



            }, response =>{

            alert("Algo ha fallado. Contacte con el administrador");
            return console.log('Too mal', response);

            });
            

        },
        methods:{

            setAnswersAspirant(JSONForm) {

                // console.log("Desde Answers:", JSONForm);

                if(JSONForm != undefined){

                    for (let i = 0; i < JSONForm.length; i++) {

                        // console.log("Indice:", JSONForm[i].idField);

                        let newIndex = JSONForm[i].idField;

                        // console.log('El indes', newIndex);

                        let initialValue = '';

                        if(JSONForm[i].typeField === 'checkField'){

                            initialValue = [];

                        }

                        this.answersAspirant[newIndex] = { answer: initialValue };

                        // this.$set(this.answersAspirant[newIndex], 'answer', ' ');

                    }

                }

            },
            changeValue(options){

                // console.log('Asignando Valor');

                return this.answersAspirant[options.idField].answer = options.value;

            },
            sendAnswers(){

                console.log("Hola desde el metodo de envio");

                this.$http.post('inscription/save',{idcampaign: this.idcampaign, documentAspirant: this.documentAspirant, answers: this.answersAspirant}).then(response => {

                    console.log();

                }, response =>{

                alert("Algo ha fallado. Contacte con el administrador");
                return console.log('Too mal', response);

                });

            }

        }

    }
</script>
<style scoped>

</style>