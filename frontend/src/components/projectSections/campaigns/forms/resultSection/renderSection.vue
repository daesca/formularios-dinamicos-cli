<template>
    <div id="renderResult-container" class="container mt-4">

        <div v-if="errorCampaign != ''" class="alert alert-danger">
            <b>{{ errorCampaign }}</b>
        </div>

        <div class="row" v-if="!login && errorCampaign == ''">

            <div class="col-12 col-sm-12 col-md-6 col-lg-6 mr-auto ml-auto">

                <div class="loginBox">
                    <component 
                        :is="typeLogin"
                        :document="documentAspirant"
                        :email="emailAspirant"
                        @document-aspirant="setDocumentAspirant"
                        @email-aspirant="setEmailAspirant"
                        @changeLogin="setTypeLogin"
                        @alternativeValidation="showModal"
                        @loginSuccessfull="setAllData">

                    </component>

                </div>
            

            </div>

        </div>

        <form v-show="login" @submit.prevent="sendAnswers">
            <h3 class="text-center">Campaña {{ codecampaign }}</h3>

                <component 
                    v-for="(value, key, index) in renderForm"
                    :is="value.typeField" 
                    :key="index" 
                    :defaultValue="answersAspirant[value.idField].answer" 
                    :configurations="value.configurations" 
                    :keyarray="index" 
                    :idField="value.idField"
                    @changeSpecial="changeValue" 
                >
                </component>

            <div class="text-right mt-2">
                <button class="btn btn-success">Enviar</button>
            </div>

        </form>

        <!-- Modal -->
        <div class="modal fade" id="loginModal" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="loginModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">

                <div class="modal-body">

                    <login3 
                        v-show="!showResultSaveAnswers"
                        :document="documentAspirant"  
                        @loginSuccessfull="setAllData"
                    >

                    </login3>

                    <div v-show="showResultSaveAnswers">

                        <h2>{{ titleResultSaveAnswers }}</h2>

                        {{ bodyResultSaveAnswers }}

                        <div class="text-center">
                            
                            <button class="btn btn-success" @click="closeModal">Aceptar</button>

                        </div>


                    </div>

                </div>

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
                documentAspirant: '',
                emailAspirant: '',
                typeLogin: 'login1',
                defaultForm: [],
                configForm: [],
                renderForm:[],
                login: false,
                errorCampaign: '',
                titleResultSaveAnswers: '',
                bodyResultSaveAnswers: '',
                showResultSaveAnswers: false,
                nextIndex: 0,

            }

        },
        beforeMount(){

            // this.resetForms();
            this.$http.get('inscription/get/' + this.codecampaign).then(response => {
                
                if(response.body.code != '200'){
                    
                    this.errorCampaign = response.body.message;

                }

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
            setEmailAspirant(val){

                this.emailAspirant = val;

            },
            setAnswersAspirant(JSONForm, precharge = 0) {

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

                        if(JSONForm[i].configurations.defaultValue != undefined && JSONForm[i].configurations.defaultValue != ''){

                            initialValue = JSONForm[i].configurations.defaultValue;

                        }

                        if(precharge != 0){

                            if(typeof(JSONForm[i].configurations.options) == 'string'){

                                JSONForm[i].configurations.options = JSON.parse(JSONForm[i].configurations.options);

                                

                            }

                            if(JSONForm[i].typeField === 'checkField'){

                                initialValue = initialValue.split(",");

                            }

                        }



                        this.answersAspirant[newIndex] = { answer: initialValue };

                    }

                }

            },
            setRenderForm(JSONForm){

                if(JSONForm != undefined){

                    for (let i = 0; i < JSONForm.length; i++) {

                        if(JSONForm[i].deleted != 1){

                            this.renderForm[this.nextIndex] = JSONForm[i];

                        }

                        this.nextIndex ++;
                    }

                }

            },
            changeValue(options){

                // console.log('Asignando Valor');

                return this.answersAspirant[options.idField].answer = options.value;

            },
            sendAnswers(){

                // console.log("Hola desde el metodo de envio");

                this.$http.post('inscription/save',{codecampaign: this.codecampaign, documentAspirant: this.documentAspirant, answers: this.answersAspirant}).then(response => {

                    if(response.body.code == 200){

                        this.titleResultSaveAnswers = "Guardado exitoso";

                        this.bodyResultSaveAnswers = response.body.message;

                   

                    }else{

                        this.titleResultSaveAnswers = "Error al guardar";

                        this.bodyResultSaveAnswers = response.body.message;    

                    }

                    this.setShowResultSaveAnswers(true);

                    this.showModal();

                }, response =>{

                    alert("Algo ha fallado. Contacte con el administrador");
                    return console.log('Too mal', response);

                });

            },
            setLogin(val){
                this.login = val;
            },
            setShowResultSaveAnswers(val){

                this.showResultSaveAnswers = val;

            },
            // setConfigForm(val){

            //     this.configForm = val;

            // },
            // setDefaultForm(val){

            //     this.defaultForm = val;

            // },
            setAllData(val){

                if(val != 1){

                    this.$http.get('campaign/render/' + this.codecampaign).then(response => {

                        // console.log(response);

                        this.setAnswersAspirant(JSON.parse(response.body.configDefaultForm));

                        this.setAnswersAspirant(JSON.parse(response.body.configForm));

                        this.setRenderForm(JSON.parse(response.body.configDefaultForm));

                        this.setRenderForm(JSON.parse(response.body.configForm));

                        this.setLogin(true);

                    }, response =>{

                        alert("Algo ha fallado. Contacte con el administrador");
                        return console.log('Too mal', response);

                    });
                
                }else{

                    this.$http.post('inscription/get/data/document', { code: this.codecampaign, document: this.documentAspirant }).then(response => {

                        console.log('Datos llenaos', response.body);

                        this.setAnswersAspirant(response.body.data.configDefaultForm, 1);

                        this.setAnswersAspirant(response.body.data.configForm, 1);

                        this.setRenderForm(response.body.data.configDefaultForm);

                        this.setRenderForm(response.body.data.configForm);

                        this.setLogin(true);

                        this.closeModal();

                    }, response =>{

                        alert("Algo ha fallado. Contacte con el administrador");
                        return console.log('Too mal', response);

                    });

                }

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
<style>

    .loginBox{

        background-color:#3F4E90;
        color: #fff;
        min-height: 500px;
        display: flex;
        align-items: center;
        padding-left: 1em;
        padding-right: 1em;

    }
    .loginBox button{

        background-color: transparent;
        border: 1px solid #fff;
        padding: .3em 4em;
        border-radius: 10px;
        font-weight: bold;
        color: #fff;
        
    }

    .loginBox a{

        color: #fff !important;

    }

    .loginBox a:hover{

        /* text-decoration: none; */
    }

</style>