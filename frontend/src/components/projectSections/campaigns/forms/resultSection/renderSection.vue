<template>
    <div id="renderResult-container" class="container mt-4">

        <div v-show="errorCampaign != ''" class="alert alert-danger">
            <b>{{ errorCampaign }}</b>
        </div>

        <form v-show="login">
            <h3 class="text-center">Campaña {{ codecampaign }}</h3>
            <template v-for="(value, key, index) in defaultForm">
                <component v-if="value.deleted == '0'" @changeSpecial="changeValue" :is="value.typeField" :defaultValue="answersAspirant[value.idField].answer" :configurations="value.configurations" :key="index" :keyarray="index" :idField="value.idField"></component>
            </template>

            <template v-for="(value, key, index) in configForm">
                <component v-if="value.deleted == '0'" @changeSpecial="changeValue" :is="value.typeField" :defaultValue="answersAspirant[value.idField].answer" :configurations="value.configurations" :key="index" :keyarray="index" :idField="value.idField"></component>
            </template>

            <div class="text-right mt-2">
                <button class="btn btn-success" @click.prevent="sendAnswers">Enviar</button>
            </div>

        </form>

        <!-- Modal -->
        <div class="modal fade" id="loginModal" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="loginModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                <!-- <div class="modal-header">
                    <h5 class="modal-title" id="loginModalLabel">Ingreso de afiliado</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div> -->
                <div class="modal-body">
                    <component 
                        :is="typeLogin"  
                        @document-aspirant="setDocumentAspirant"
                        @type-document-aspirant="setTypeDocumentAspirant"
                        @changeLogin="setTypeLogin"
                        @loginSuccessfull="setAllData">

                    </component>
                </div>
                <!-- <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Understood</button>
                </div> -->
                </div>
            </div>
        </div>

    </div>
</template>
<script>

    import * as configComponents from '../../../../../importGroups/campaigns/forms/resultSection/resultElementsImports';
    import * as logins from '../../../../../importGroups/render/logins';

    export default {
        props:['codecampaign'],
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
            'login1': logins.login1,
            'login2': logins.login2,
            'login3': logins.login3,
        },
        data(){
            return{

                answersAspirant: {},
                documentAspirant: '123456789',
                typeDocumentAspirant: '',
                typeLogin: 'login1',
                defaultForm: [],
                configForm: [],
                login: false,
                errorCampaign: '',

            }
        },
        mounted(){

            // this.resetForms();
            this.$http.get('inscription/get/' + this.codecampaign).then(response => {
                
                if(response.body.code == '200'){
                    
                    this.showModal();

                }else{

                    console.log(response);

                    this.errorCampaign = response.body.message;

                }

                // console.log(response);

                // this.$store.commit('setAnswersAspirant', JSON.parse(response.body.configDefaultForm));
                //this.$store.commit('setAnswersAspirant', JSON.parse(response.body.configForm));

                // this.setAnswersAspirant(JSON.parse(response.body.configDefaultForm));

                // this.setAnswersAspirant(JSON.parse(response.body.configForm));

                // this.$store.commit('setConfigForm', JSON.parse(response.body.configForm));

                // this.$store.commit('setConfigMutableDefaultForm', JSON.parse(response.body.configDefaultForm));



            }, response =>{

                alert("Algo ha fallado. Contacte con el administrador");
                return console.log('Too mal', response);

            });
            

        },
        methods:{

            setTypeLogin(val){

                this.typeLogin = val;

            },
            setDocumentAspirant(val){

                this.documentAspirant = val;

            },
            setTypeDocumentAspirant(val){

                this.typeDocumentAspirant = val;

            },
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

                        if(JSONForm[i].configurations.defaultValue != undefined){

                            initialValue = JSONForm[i].configurations.defaultValue;

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

                this.$http.post('inscription/save',{codecampaign: this.codecampaign, documentAspirant: this.documentAspirant, answers: this.answersAspirant}).then(response => {

                    console.log();

                }, response =>{

                alert("Algo ha fallado. Contacte con el administrador");
                return console.log('Too mal', response);

                });

            },
            setLogin(val){
                this.login = val;
            },
            setConfigForm(val){

                this.configForm = val;

            },
            setDefaultForm(val){

                this.defaultForm = val;

            },
            setAllData(){

                this.$http.get('campaign/render/' + this.codecampaign).then(response => {

                    // console.log(response);

                    // this.$store.commit('setAnswersAspirant', JSON.parse(response.body.configDefaultForm));
                    //this.$store.commit('setAnswersAspirant', JSON.parse(response.body.configForm));

                    this.setAnswersAspirant(JSON.parse(response.body.configDefaultForm));

                    this.setAnswersAspirant(JSON.parse(response.body.configForm));

                    this.setDefaultForm(JSON.parse(response.body.configDefaultForm));

                    this.setConfigForm(JSON.parse(response.body.configForm));
                    // this.$store.commit('setConfigForm', JSON.parse(response.body.configForm));

                    // this.$store.commit('setConfigMutableDefaultForm', JSON.parse(response.body.configDefaultForm));

                    this.setLogin(true);

                    this.closeModal();

                }, response =>{

                    alert("Algo ha fallado. Contacte con el administrador");
                    return console.log('Too mal', response);

                });

            },
            showModal(){
        
                this.$JQ('#loginModal').modal('show');
                

                // document.getElementsByClassName('modal-backdrop')[0].remove();


            },    
            closeModal(){
        
                this.$JQ('#loginModal').modal('hide');

                document.getElementsByClassName('modal-backdrop')[0].remove();

            },
            

        }

    }
</script>
<style scoped>

</style>