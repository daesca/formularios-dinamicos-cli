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
                    :departamentonacimiento="$store.getters.departamentoNacimiento"
                    :departamentoresidencia="$store.getters.departamentoResidencia"
                    @changeSpecial="changeValue"
                    @pais-nacimiento-colombia="isColombia"
                >
                </component>

                <!-- <component 
                    v-for="(value, key, index) in renderForm"
                    :is="value.typeField" 
                    :key="index" 
                    :defaultValue="answersAspirant[value.idField].answer" 
                    :configurations="value.configurations" 
                    :keyarray="index" 
                    :idField="value.idField"
                    @changeSpecial="changeValue" 
                >
                </component> -->

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
            'schoolsField': configComponents.schoolsField,
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
        // mounted(){

        //     const paisNacimientoContainer = document.querySelector("#paisNacimientoSapiencia");
        //     const paisNacimientoField = document.querySelector("select[name='paisNacimientoSapiencia']");

        //     paisNacimientoField.addEventListener('change', function(event){

        //         console.log("Valor del pais:", event.target.value);

        //     });


        // },
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
                let self = this;
                this.$nextTick().then(function(){
                    if(val == true){

                        self.initialRules();

                    }
                });

            },
            setShowResultSaveAnswers(val){

                this.showResultSaveAnswers = val;

            },
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
                        
                        this.initialRules();

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
            isColombia(val){

                // if(val == '1'){

                //     this.$JQ("#lugarNacimientoSapiencia").toggle('slow');
                //     this.$JQ("#departamentoNacimientoSapiencia").toggle('slow');
                //     this.$JQ("#municipioNacimientoSapiencia").toggle('slow'); 

                // }else{

                //     // this.$JQ("#lugarNacimientoSapiencia").toggle('slow');
                //     this.$JQ("#departamentoNacimientoSapiencia").toggle('slow');
                //     this.$JQ("#municipioNacimientoSapiencia").toggle('slow'); 

                // }
                
            },
            initialRules(){

                const paisNacimientoField = document.querySelector("select[name='paisNacimientoSapiencia']");
                
                const lugarNacimientoContainer = document.querySelector("#lugarNacimientoSapiencia");
                // const lugarNacimientoField = document.querySelector("input[name='lugarNacimientoSapiencia']");
                lugarNacimientoContainer.style.display = 'none';

                const departamentoNacimientoContainer = document.querySelector("#departamentoNacimientoSapiencia");
                // const departamentoNacimientoField = document.querySelector("select[name='paisNacimientoSapiencia']");

                departamentoNacimientoContainer.style.display = 'none';

                const municipioNacimientoContainer = document.querySelector("#municipioNacimientoSapiencia");
                // const municipioNacimientoField = document.querySelector("select[name='municipioNacimientoSapiencia']");

                municipioNacimientoContainer.style.display = 'none';

                const municipioResidenciaField = document.querySelector("select[name='municipioResidenciaSapiencia']");

                const barriosListaContainer =  document.querySelector("#lugarResidenciaListaSapiencia");
                // const barriosListaField = document.querySelector("select[name='lugarResidenciaListaSapiencia']");

                barriosListaContainer.style.display = 'none';

                const barrioTextoContainer = document.querySelector("#lugarResidenciaTextoSapiencia");
                // const barrioTextoField = document.querySelector("input[name='lugarResidenciaTextoSapiencia']");

                barrioTextoContainer.style.display = 'none';

                // const tieneHijosContainer = document.querySelector("#tieneHijosSapiencia");
                const tieneHijosField = document.querySelector("select[name='tieneHijosSapiencia']");

                const cantidadHijosContainer = document.querySelector("#cantidadHijosSapiencia");
                // const cantidadHijosField = document.querySelector("select[name='cantidadHijosSapiencia']");

                cantidadHijosContainer.style.display = 'none';

                const padreMenorContainer = document.querySelector("#padreMenorSapiencia");
                // const padreMenorField = document.querySelector("select[name='padreMenorSapiencia']");

                padreMenorContainer.style.display = 'none';

                const padreSolteroContainer = document.querySelector("#padreSolteroSapiencia");
                // const padreSolteroField = document.querySelector("select[name='padreSolteroSapiencia']");

                padreSolteroContainer.style.display = 'none';

                // const tieneVulnerabilidadContainer = document.querySelector("#vulnerabilidadSapiencia");
                const tieneVulnerabilidadField = document.querySelector("select[name='vulnerabilidadSapiencia']");

                const tipoVulnerabilidadContainer = document.querySelector("#tipoVulnerabilidad");
                // const tipoVulnerabilidadField = document.querySelector("se");

                tipoVulnerabilidadContainer.style.display = 'none';

                // const tieneDiscapacidadContainer = document.querySelector("#discapacidadSapiencia");
                const tieneDiscapacidadField = document.querySelector("select[name='discapacidadSapiencia']");

                const tipoDiscapacidadContainer = document.querySelector("#tipoDiscapacidadSapiencia");

                tipoDiscapacidadContainer.style.display = 'none';

                // const esAfrocolombianoContainer = document.querySelector("#afrocolombianoSapiencia");
                const esAfrocolombianoField = document.querySelector("select[name='afrocolombianoSapiencia']");

                const poblacionesAfrocolombianasContainer = document.querySelector("#poblacionesAfrocolombianasSapiencia");
                const polacionesAfrocolombianasField = document.querySelector("select[name='poblacionesAfrocolombianasSapiencia']");

                poblacionesAfrocolombianasContainer.style.display = 'none';

                const nombrePoblacionAfrocolombianaContainer = document.querySelector("#nombrePoblacionAfrodescendienteSapiencia");

                nombrePoblacionAfrocolombianaContainer.style.display = 'none';

                const esIndigenaField = document.querySelector("select[name='etniaIndigenaSapiencia']");

                const poblacionesIndigenasContainer = document.querySelector("#poblacionesIndigenasSapiencia");
                poblacionesIndigenasContainer.style.display = 'none';

                const poblacionesIndigenasField = document.querySelector("select[name='poblacionesIndigenasSapiencia']");

                const nombrePoblacionIndigenaContainer = document.querySelector("#nombrePoblacionIndigenaSapiencia");
                nombrePoblacionIndigenaContainer.style.display = 'none';

                const esLGBTIField = document.querySelector("select[name='lgbtiSapiencia']");

                const tipoLGBTIContainer = document.querySelector("#tipoLGBTISapiencia");
                tipoLGBTIContainer.style.display = 'none';

                const esEgresadoField = document.querySelector("select[name='egresadoSapiencia']");

                const listaInstitucionesContainer = document.querySelector("#institucionSapiencia");
                listaInstitucionesContainer.style.display = 'none';

                const listaInstitucionesField = document.querySelector("select[name='institucionSapiencia']");

                const tipoInstitucionContainer = document.querySelector("#tipoInstitucionSapiencia");
                tipoInstitucionContainer.style.display = 'none';
                
                const tipoInstitucionSegundaOpcionContainer = document.querySelector("#tipoInstitucionSegundaOpcionSapiencia");
                tipoInstitucionSegundaOpcionContainer.style.display = 'none';

                const nombreInstitucionContainer = document.querySelector("#nombreInstitucionSapiencia");
                nombreInstitucionContainer.style.display = 'none';

                const municipioInstitucionContainer = document.querySelector("#municipioInstitucionSapiencia");
                municipioInstitucionContainer.style.display = 'none';

                const estudioMediaTecnicaField = document.querySelector("select[name='mediaTecnicaSapiencia']");

                const tituloMediaTecnicaContainer = document.querySelector("#tituloMediaTecnicaSapiencia");
                tituloMediaTecnicaContainer.style.display = 'none';

                const institucionMediaTecnicaContainer = document.querySelector("#institucionMediaTecnicaSapiencia");
                institucionMediaTecnicaContainer.style.display = 'none';

                const tieneTituloEducacionSuperiorField = document.querySelector("select[name='tieneTituloSuperiorSapiencia']");

                const institucionEducacionSuperiorContainer = document.querySelector("#institucionSuperiorSapiencia");
                institucionEducacionSuperiorContainer.style.display = 'none';

                const nombreProgramaEducacionSuperiorContainer = document.querySelector("#nombreProgramaSuperiorSapiencia");
                nombreProgramaEducacionSuperiorContainer.style.display = 'none';

                const tituloProgramaEducacionSuperiorContainer = document.querySelector("#nombreTituloSuperiorSapiencia");
                tituloProgramaEducacionSuperiorContainer.style.display = 'none';

                const estudiaActualmenteEducacionSuperiorField = document.querySelector("select[name='estudiaActualmenteProgramaSuperiorSapiencia']");

                const tipoProgramaSuperiorSapienciaContainer = document.querySelector("#tipoProgramaSuperiorSapiencia");
                tipoProgramaSuperiorSapienciaContainer.style.display = 'none';

                const lugarEstudiosActualesContainer = document.querySelector("#institucionTituloSuperiorSapiencia");
                lugarEstudiosActualesContainer.style.display = 'none';

                const nombreEstudioActualContainer = document.querySelector("#nombreEstudioActualSuperiorSapiencia");
                nombreEstudioActualContainer.style.display = 'none';

                const esBeneficiarioRecursosMunicipioField = document.querySelector("select[name='esBeneficiarioRecursosMunicipioSapiencia']");

                const tipoProgramaRecursosContainer = document.querySelector("#tipoProgramaRecursosMunicipioSapiencia");
                tipoProgramaRecursosContainer.style.display = 'none';

                paisNacimientoField.addEventListener('change', function(event){

                    if(event.target.value == '1'){

                        // this.$JQ("#lugarNacimientoSapiencia").toggle('slow');
                        // departamentoNacimientoContainer.toggle('slow');
                        // municipioNacimientoContainer.toggle('slow');
                        
                        lugarNacimientoContainer.style.display = 'none'
                        departamentoNacimientoContainer.style.display = 'block';
                        municipioNacimientoContainer.style.display = 'block'; 

                    }else{
                        
                        // departamentoNacimientoContainer.toggle('slow');
                        // municipioNacimientoContainer.toggle('slow');
                        lugarNacimientoContainer.style.display = 'block'
                        departamentoNacimientoContainer.style.display = 'none';
                        municipioNacimientoContainer.style.display = 'none';  

                    }


                });

                municipioResidenciaField.addEventListener('change', function(event){

                    if(event.target.value == '1'){

                        barriosListaContainer.style.display = 'block';
                        barrioTextoContainer.style.display = 'none';

                    }else{

                        barriosListaContainer.style.display = 'none';
                        barrioTextoContainer.style.display = 'block';
                        
                    }

                });

                tieneHijosField.addEventListener('change', function(event){

                    if(event.target.value == '1'){

                        cantidadHijosContainer.style.display = 'block';
                        padreMenorContainer.style.display = 'block';
                        padreSolteroContainer.style.display = 'block';

                    }else{

                        cantidadHijosContainer.style.display = 'none';
                        padreMenorContainer.style.display = 'none';
                        padreSolteroContainer.style.display = 'none';
                        
                    }                    

                });

                tieneVulnerabilidadField.addEventListener('change', function(event){

                    if(event.target.value == '1'){

                        tipoVulnerabilidadContainer.style.display = 'block';

                    }else{

                        tipoVulnerabilidadContainer.style.display = 'none';


                    }

                });

                tieneDiscapacidadField.addEventListener('change', function(event){


                    if(event.target.value == '1'){

                        tipoDiscapacidadContainer.style.display = 'block';

                    }else{

                        tipoDiscapacidadContainer.style.display = 'none';

                    }

                });

                esAfrocolombianoField.addEventListener('change', function(event){


                    if(event.target.value == '1'){

                        poblacionesAfrocolombianasContainer.style.display = 'block';

                    }else{

                        poblacionesAfrocolombianasContainer.style.display = 'none';

                    }

                });

                polacionesAfrocolombianasField.addEventListener('change', function(event){


                    if(event.target.value == '4'){

                        nombrePoblacionAfrocolombianaContainer.style.display = 'block';

                    }else{

                        nombrePoblacionAfrocolombianaContainer.style.display = 'none';

                    }

                });

                esIndigenaField.addEventListener('change', function(event){

                    if(event.target.value == '1'){

                        poblacionesIndigenasContainer.style.display = 'block';

                    }else{

                        poblacionesIndigenasContainer.style.display = 'none';

                    }

                });

                poblacionesIndigenasField.addEventListener('change', function(event){

                    if(event.target.value == '8'){

                        nombrePoblacionIndigenaContainer.style.display = 'block';

                    }else{

                        nombrePoblacionIndigenaContainer.style.display = 'none';

                    }

                });

                esLGBTIField.addEventListener('change', function(event){

                    if(event.target.value == '1'){

                        tipoLGBTIContainer.style.display = 'block';

                    }else{

                        tipoLGBTIContainer.style.display = 'none';

                    }

                });

                esEgresadoField.addEventListener('change', function(event){

                    if(event.target.value == '1'){

                        listaInstitucionesContainer.style.display = 'block';
                        tipoInstitucionContainer.style.display = 'block';

                        tipoInstitucionSegundaOpcionContainer.style.display = 'none';
                        nombreInstitucionContainer.style.display = 'none';
                        municipioInstitucionContainer.style.display = 'none';

                    }else{

                        listaInstitucionesContainer.style.display = 'none';
                        tipoInstitucionContainer.style.display = 'none';

                        tipoInstitucionSegundaOpcionContainer.style.display = 'block';
                        nombreInstitucionContainer.style.display = 'block';
                        municipioInstitucionContainer.style.display = 'block';

                    }

                });

                estudioMediaTecnicaField.addEventListener('change', function(event){

                    if(event.target.value == '1'){

                        tituloMediaTecnicaContainer.style.display = 'block';
                        institucionMediaTecnicaContainer.style.display = 'block';

                    }else{

                        tituloMediaTecnicaContainer.style.display = 'none';
                        institucionMediaTecnicaContainer.style.display = 'none';

                    }

                });

                tieneTituloEducacionSuperiorField.addEventListener('change', function(event){

                    if(event.target.value == '1'){

                        institucionEducacionSuperiorContainer.style.display = 'block';

                        nombreProgramaEducacionSuperiorContainer.style.display = 'block';

                        tituloProgramaEducacionSuperiorContainer.style.display = 'block';

                    }else{

                        institucionEducacionSuperiorContainer.style.display = 'none';

                        nombreProgramaEducacionSuperiorContainer.style.display = 'none';

                        tituloProgramaEducacionSuperiorContainer.style.display = 'none';

                    }

                });

                estudiaActualmenteEducacionSuperiorField.addEventListener('change', function(event){

                    if(event.target.value){

                        tipoProgramaSuperiorSapienciaContainer.style.display = 'block';

                        lugarEstudiosActualesContainer.style.display = 'block';

                        nombreEstudioActualContainer.style.display = 'block';
                        

                    }else{

                        tipoProgramaSuperiorSapienciaContainer.style.display = 'none';

                        lugarEstudiosActualesContainer.style.display = 'none';

                        nombreEstudioActualContainer.style.display = 'none';

                    }

                })

                esBeneficiarioRecursosMunicipioField.addEventListener('change', function(event){

                    if(event.target.value == '1'){

                        tipoProgramaRecursosContainer.style.display = 'block';

                    }else{

                        tipoProgramaRecursosContainer.style.display = 'none';

                    }

                });


            }

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