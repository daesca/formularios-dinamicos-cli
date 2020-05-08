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
                        :codecampaign="codecampaign"
                        @document-aspirant="setDocumentAspirant"
                        @email-aspirant="setEmailAspirant"
                        @changeLogin="setTypeLogin"
                        @alternativeValidation="showModal"
                        @loginSuccessfull="setAllData">

                    </component>

                </div>
            

            </div>

        </div>

        <form v-show="login" @submit.prevent="sendAnswers" id="renderForm">
            <h3 class="text-center" style="width: 100%">Campaña {{ codecampaign }}</h3>

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

            <div class="text-right mt-2" style="width: 100%">
                <button class="btn btn-success">Enviar</button>
            </div>


        </form>

        <!-- Modal -->
        <div class="modal fade" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="loginModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header" style="border-bottom: none">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
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

                        if(JSONForm[i].deleted != '1'){

                            // console.log("Indice:", JSONForm[i].idField);

                            let newIndex = JSONForm[i].idField;

                            // console.log('El indes', JSONForm[0]);

                            let initialValue = '';

                            if(JSONForm[i].typeField == 'checkField'){

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

                                    if(JSONForm[i].configurations.defaultValue != undefined && JSONForm[i].configurations.defaultValue != ''){

                                        initialValue = initialValue.split(",");
                                    }

                                }

                            }

                            this.answersAspirant[newIndex] = { answer: initialValue };
                        }

                    }

                }

            },
            setRenderForm(JSONForm){

                if(JSONForm != undefined){

                    for (let i = 0; i < JSONForm.length; i++) {


                        if(JSONForm[i].deleted != '1'){

                            // if(this.nextIndex == 66){

                                // console.log("Dato descarriado:", this.nextIndex);

                            // }

                            this.renderForm[this.nextIndex] = JSONForm[i];

                            this.nextIndex ++;

                        }

                        
                    }

                }

                // console.log("Desde Answers:", JSONForm);

            },
            changeValue(options){

                // console.log('Asignando Valor');

                return this.answersAspirant[options.idField].answer = options.value;

            },
            filterAnswers(){

                let filterAnswers = JSON.parse(JSON.stringify(this.answersAspirant));

                // console.log("Variable filterAnswers", filterAnswers);

                let allFields = document.querySelectorAll("div#renderResult-container > form > div");

                let indexFilter = '';

                for(let i = 0; i < allFields.length; i++){

                    if(allFields[i].getAttribute("data-show") == '0'){

                        indexFilter = allFields[i].getAttribute("data-filter");

                        delete filterAnswers[indexFilter];

                    }

                }

                return filterAnswers;

            },

            sendAnswers(){

                // console.log("Hola desde el metodo de envio");

                let filteredAnswers = this.filterAnswers();

                this.$http.post('inscription/save',{codecampaign: this.codecampaign, documentAspirant: this.documentAspirant, answers: filteredAnswers}).then(response => {

                    if(response.body.code == 200){

                        // this.titleResultSaveAnswers = "Guardado exitoso";

                        // this.bodyResultSaveAnswers = response.body.message;

                        this.$router.push({ path:'/result'});

                    }else{

                        this.titleResultSaveAnswers = "Error al guardar";

                        this.bodyResultSaveAnswers = response.body.message;    

                        this.setShowResultSaveAnswers(true);

                        this.showModal();

                    }

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

                        // console.log(JSON.parse(response.body.configDefaultForm));

                        // console.log("------------------------------------------");

                        

                        this.setAnswersAspirant(JSON.parse(response.body.configDefaultForm));

                        this.setAnswersAspirant(JSON.parse(response.body.configForm));
                        
    
                        this.setRenderForm(JSON.parse(response.body.configDefaultForm));

                            // console.log(JSON.parse(response.body.configForm));

                        this.setRenderForm(JSON.parse(response.body.configForm));

                        

                        this.setLogin(true);


                    }, response =>{

                        alert("Algo ha fallado. Contacte con el administrador");
                        return console.log('Too mal', response);

                    });
                
                }else{

                    this.$http.post('inscription/get/data/document', { code: this.codecampaign, document: this.documentAspirant }).then(response => {

                        // console.log('Datos llenaos', response.body);


                        this.setRenderForm(response.body.data.configDefaultForm);

                        this.setRenderForm(response.body.data.configForm);
                        
                        this.setAnswersAspirant(response.body.data.configDefaultForm, 1);

                        this.setAnswersAspirant(response.body.data.configForm, 1);

                        this.setLogin(true);

                        let modal = document.getElementsByClassName('modal-backdrop')[0];

                        // console.log("Modal: ", modal);

                        if( modal != undefined){
                            
                            this.closeModal();

                        }


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
                const lugarNacimientoField = document.querySelector("input[name='lugarNacimientoSapiencia']");
                const departamentoNacimientoContainer = document.querySelector("#departamentoNacimientoSapiencia");
                const departamentoNacimientoField = document.querySelector("select[name='departamentoNacimientoSapiencia']");
                const municipioNacimientoContainer = document.querySelector("#municipioNacimientoSapiencia");
                const municipioNacimientoField = document.querySelector("select[name='municipioNacimientoSapiencia']");
                const municipioResidenciaField = document.querySelector("select[name='municipioResidenciaSapiencia']");
                const barriosListaContainer =  document.querySelector("#lugarResidenciaListaSapiencia");
                const barriosListaField = document.querySelector("select[name='lugarResidenciaListaSapiencia']");
                const barrioTextoContainer = document.querySelector("#lugarResidenciaTextoSapiencia");
                const barrioTextoField = document.querySelector("input[name='lugarResidenciaTextoSapiencia']");
                const tieneHijosField = document.querySelector("select[name='tieneHijosSapiencia']");
                const cantidadHijosContainer = document.querySelector("#cantidadHijosSapiencia");
                const cantidadHijosField = document.querySelector("select[name='cantidadHijosSapiencia']");
                const padreMenorContainer = document.querySelector("#padreMenorSapiencia");
                const padreMenorField = document.querySelector("select[name='padreMenorSapiencia']");
                const padreSolteroContainer = document.querySelector("#padreSolteroSapiencia");
                const padreSolteroField = document.querySelector("select[name='padreSolteroSapiencia']");
                const tieneVulnerabilidadField = document.querySelector("select[name='vulnerabilidadSapiencia']");
                const tipoVulnerabilidadContainer = document.querySelector("#tipoVulnerabilidad");
                // const tipoVulnerabilidadField = ''
                const tieneDiscapacidadField = document.querySelector("select[name='discapacidadSapiencia']");
                const tipoDiscapacidadContainer = document.querySelector("#tipoDiscapacidadSapiencia");
                const esAfrocolombianoField = document.querySelector("select[name='afrocolombianoSapiencia']");
                const poblacionesAfrocolombianasContainer = document.querySelector("#poblacionesAfrocolombianasSapiencia");
                const poblacionesAfrocolombianasField = document.querySelector("select[name='poblacionesAfrocolombianasSapiencia']");
                const nombrePoblacionAfrocolombianaContainer = document.querySelector("#nombrePoblacionAfrodescendienteSapiencia");
                const nombrePoblacionAfrocolombianaField = document.querySelector("input[name='nombrePoblacionAfrodescendienteSapiencia']");
                const esIndigenaField = document.querySelector("select[name='etniaIndigenaSapiencia']");
                const poblacionesIndigenasContainer = document.querySelector("#poblacionesIndigenasSapiencia");
                const poblacionesIndigenasField = document.querySelector("select[name='poblacionesIndigenasSapiencia']");
                const nombrePoblacionIndigenaContainer = document.querySelector("#nombrePoblacionIndigenaSapiencia");
                const nombrePoblacionIndigenaField = document.querySelector("input[name='nombrePoblacionIndigenaSapiencia']");
                const esLGBTIField = document.querySelector("select[name='lgbtiSapiencia']");
                const tipoLGBTIContainer = document.querySelector("#tipoLGBTISapiencia");
                const esEgresadoField = document.querySelector("select[name='egresadoSapiencia']");
                const listaInstitucionesContainer = document.querySelector("#institucionSapiencia");
                const listaInstitucionesField = document.querySelector("select[name='institucionSapiencia']");
                const tipoInstitucionContainer = document.querySelector("#tipoInstitucionSapiencia");
                const tipoInstitucionField = document.querySelector("select[name='tipoInstitucionSapiencia']");                
                const tipoInstitucionSegundaOpcionContainer = document.querySelector("#tipoInstitucionSegundaOpcionSapiencia");
                const tipoInstitucionSegundaOpcionField = document.querySelector("select[name='tipoInstitucionSegundaOpcionSapiencia']");
                const nombreInstitucionContainer = document.querySelector("#nombreInstitucionSapiencia");
                const nombreInstitucionField = document.querySelector("input[name='nombreInstitucionSapiencia']");
                const municipioInstitucionContainer = document.querySelector("#municipioInstitucionSapiencia");
                const municipioInstitucionField = document.querySelector("input[name='municipioInstitucionSapiencia']");
                const estudioMediaTecnicaField = document.querySelector("select[name='mediaTecnicaSapiencia']");
                const tituloMediaTecnicaContainer = document.querySelector("#tituloMediaTecnicaSapiencia");
                const tituloMediaTecnicaField = document.querySelector("input[name='tituloMediaTecnicaSapiencia']");
                const institucionMediaTecnicaContainer = document.querySelector("#institucionMediaTecnicaSapiencia");
                const institucionMediaTecnicaField = document.querySelector("input[name='institucionMediaTecnicaSapiencia']");
                const tieneTituloEducacionSuperiorField = document.querySelector("select[name='tieneTituloSuperiorSapiencia']");
                const institucionEducacionSuperiorContainer = document.querySelector("#institucionSuperiorSapiencia");
                const institucionEducacionSuperiorField = document.querySelector("input[name='institucionSuperiorSapiencia']");
                const nombreProgramaEducacionSuperiorContainer = document.querySelector("#nombreProgramaSuperiorSapiencia");
                const nombreProgramaEducacionSuperiorField = document.querySelector("input[name='nombreProgramaSuperiorSapiencia']");
                const tituloProgramaEducacionSuperiorContainer = document.querySelector("#nombreTituloSuperiorSapiencia");
                const tituloProgramaEducacionSuperiorField = document.querySelector("input[name='nombreTituloSuperiorSapiencia']");
                const estudiaActualmenteEducacionSuperiorField = document.querySelector("select[name='estudiaActualmenteProgramaSuperiorSapiencia']");
                const tipoProgramaSuperiorSapienciaContainer = document.querySelector("#tipoProgramaSuperiorSapiencia");
                const tipoProgramaSuperiorSapienciaField = document.querySelector("select[name='tipoProgramaSuperiorSapiencia']");
                const lugarEstudiosActualesContainer = document.querySelector("#institucionTituloSuperiorSapiencia");
                const lugarEstudiosActualesField = document.querySelector("input[name='institucionTituloSuperiorSapiencia']");
                const nombreEstudioActualContainer = document.querySelector("#nombreEstudioActualSuperiorSapiencia");
                const nombreEstudioActualField = document.querySelector("input[name='nombreEstudioActualSuperiorSapiencia']");
                const esBeneficiarioRecursosMunicipioField = document.querySelector("select[name='esBeneficiarioRecursosMunicipioSapiencia']");
                const tipoProgramaRecursosContainer = document.querySelector("#tipoProgramaRecursosMunicipioSapiencia");
                const tipoProgramaRecursosField = document.querySelector("select[name='tipoProgramaRecursosMunicipioSapiencia']");


                /*-------------------------------------------- */

                lugarNacimientoContainer.style.display = 'none';
                lugarNacimientoContainer.dataset.show = '0';
                lugarNacimientoField.required = false;

                departamentoNacimientoContainer.style.display = 'none';
                departamentoNacimientoContainer.dataset.show = '0';
                departamentoNacimientoField.required = false;

                municipioNacimientoContainer.style.display = 'none';
                municipioNacimientoContainer.dataset.show = '0';
                municipioNacimientoField.required = false;

                barriosListaContainer.style.display = 'none';
                barriosListaContainer.dataset.show = '0';
                barriosListaField.required = false;

                barrioTextoContainer.style.display = 'none';
                barrioTextoContainer.dataset.show = '0';
                barrioTextoField.required = false;

                cantidadHijosContainer.style.display = 'none';
                cantidadHijosContainer.dataset.show = '0';
                cantidadHijosField.required = false;

                padreMenorContainer.style.display = 'none';
                padreMenorContainer.dataset.show = '0';
                padreMenorField.required = false;

                padreSolteroContainer.style.display = 'none';
                padreSolteroContainer.dataset.show = '0';
                padreSolteroField.required = false;

                tipoVulnerabilidadContainer.style.display = 'none';
                tipoVulnerabilidadContainer.dataset.show = '0';
                // tipoVulnerabilidadContainer.required = false;

                tipoDiscapacidadContainer.style.display = 'none';
                tipoDiscapacidadContainer.dataset.show = '0';
                // tipoDiscapacidadContainer.required = false;

                nombrePoblacionAfrocolombianaContainer.style.display = 'none';
                nombrePoblacionAfrocolombianaContainer.dataset.show = '0';
                nombrePoblacionAfrocolombianaField.required = false;

                poblacionesAfrocolombianasContainer.style.display = 'none';
                poblacionesAfrocolombianasContainer.dataset.show = '0';
                poblacionesAfrocolombianasField.required = false;


                poblacionesIndigenasContainer.style.display = 'none';
                poblacionesIndigenasContainer.dataset.show = '0';
                poblacionesIndigenasField.required = false;

                nombrePoblacionIndigenaContainer.style.display = 'none';
                nombrePoblacionIndigenaContainer.dataset.show = '0';
                nombrePoblacionIndigenaField.required = false;

                tipoLGBTIContainer.style.display = 'none';
                tipoLGBTIContainer.dataset.show = '0';
                // tipoLGBTIContainer.required = false;

                listaInstitucionesContainer.style.display = 'none';
                listaInstitucionesContainer.dataset.show = '0';
                listaInstitucionesField.required = false;

                tipoInstitucionContainer.style.display = 'none';
                tipoInstitucionContainer.dataset.show = '0';
                tipoInstitucionField.required = false;

                tipoInstitucionSegundaOpcionContainer.style.display = 'none';
                tipoInstitucionSegundaOpcionContainer.dataset.show = '0';
                tipoInstitucionSegundaOpcionField.required = false;

                nombreInstitucionContainer.style.display = 'none';
                nombreInstitucionContainer.dataset.show = '0';
                nombreInstitucionField.required = false;

                municipioInstitucionContainer.style.display = 'none';
                municipioInstitucionContainer.dataset.show = '0';
                municipioInstitucionField.required = false;
                
                tituloMediaTecnicaContainer.style.display = 'none';
                tituloMediaTecnicaContainer.dataset.show = '0';
                tituloMediaTecnicaField.required = false;

                institucionMediaTecnicaContainer.style.display = 'none';
                institucionMediaTecnicaContainer.dataset.show = '0';
                institucionMediaTecnicaField.required = false;
            
                institucionEducacionSuperiorContainer.style.display = 'none';
                institucionEducacionSuperiorContainer.dataset.show = '0';
                institucionEducacionSuperiorField.required = false;

                nombreProgramaEducacionSuperiorContainer.style.display = 'none';
                nombreProgramaEducacionSuperiorContainer.dataset.show = '0';
                nombreProgramaEducacionSuperiorField.required = false;

                tituloProgramaEducacionSuperiorContainer.style.display = 'none';
                tituloProgramaEducacionSuperiorContainer.dataset.show = '0';
                tituloProgramaEducacionSuperiorField.required = false;

                tipoProgramaSuperiorSapienciaContainer.style.display = 'none';
                tipoProgramaSuperiorSapienciaContainer.dataset.show = '0';
                tipoProgramaSuperiorSapienciaField.required = false;

                lugarEstudiosActualesContainer.style.display = 'none';
                lugarEstudiosActualesContainer.dataset.show = '0';
                lugarEstudiosActualesField.required = false;

                nombreEstudioActualContainer.style.display = 'none';
                nombreEstudioActualContainer.dataset.show = '0';
                nombreEstudioActualField.required = false;

                tipoProgramaRecursosContainer.style.display = 'none';
                tipoProgramaRecursosContainer.dataset.show = '0';
                tipoProgramaRecursosField.required = false;

                /*------------------------------------------------------ */

                paisNacimientoField.addEventListener('change', function(event){

                    if(event.target.value == '1'){

                        // this.$JQ("#lugarNacimientoSapiencia").toggle('slow');
                        // departamentoNacimientoContainer.toggle('slow');
                        // municipioNacimientoContainer.toggle('slow');
                        
                        lugarNacimientoContainer.style.display = 'none'
                        lugarNacimientoContainer.dataset.show = '0';
                        lugarNacimientoField.required = false;

                        departamentoNacimientoContainer.style.display = 'block';
                        departamentoNacimientoContainer.dataset.show = '1';
                        departamentoNacimientoField.required = true;

                        municipioNacimientoContainer.style.display = 'block';
                        municipioNacimientoContainer.dataset.show = '1';
                        municipioNacimientoField.required = false;

                    }else{
                        
                        // departamentoNacimientoContainer.toggle('slow');
                        // municipioNacimientoContainer.toggle('slow');
                        lugarNacimientoContainer.style.display = 'block'
                        lugarNacimientoContainer.dataset.show = '1';
                        lugarNacimientoField.required = true;

                        departamentoNacimientoContainer.style.display = 'none';
                        departamentoNacimientoContainer.dataset.show = '0';
                        departamentoNacimientoField.required = false;

                        municipioNacimientoContainer.style.display = 'none'; 
                        municipioNacimientoContainer.dataset.show = '0';
                        municipioNacimientoField.required = false;

                    }


                });

                municipioResidenciaField.addEventListener('change', function(event){

                    if(event.target.value == '1'){

                        barriosListaContainer.style.display = 'block';
                        barriosListaContainer.dataset.show = '1';
                        barriosListaField.required = true;

                        barrioTextoContainer.style.display = 'none';
                        barrioTextoContainer.dataset.show = '0';
                        barrioTextoField.required = false;

                    }else{

                        barriosListaContainer.style.display = 'none';
                        barriosListaContainer.dataset.show = '0';
                        barriosListaField.required = false;

                        barrioTextoContainer.style.display = 'block';
                        barrioTextoContainer.dataset.show = '1';
                        barrioTextoField.required = false;
                        
                    }

                });

                tieneHijosField.addEventListener('change', function(event){

                    if(event.target.value == '1'){

                        cantidadHijosContainer.style.display = 'block';
                        cantidadHijosContainer.dataset.show = '1';
                        cantidadHijosField.required = true;

                        padreMenorContainer.style.display = 'block';
                        padreMenorContainer.dataset.show = '1';
                        padreMenorField.required = true;

                        padreSolteroContainer.style.display = 'block';
                        padreSolteroContainer.dataset.show = '1';
                        padreSolteroField.required = false;

                    }else{

                        cantidadHijosContainer.style.display = 'none';
                        cantidadHijosContainer.dataset.show = '0';
                        cantidadHijosField.required = false;

                        padreMenorContainer.style.display = 'none';
                        padreMenorContainer.dataset.show = '0';
                        padreMenorField.required = false;

                        padreSolteroContainer.style.display = 'none';
                        padreSolteroContainer.dataset.show = '0';
                        padreSolteroField.required = false;
                        
                    }                    

                });

                tieneVulnerabilidadField.addEventListener('change', function(event){

                    if(event.target.value == '1'){

                        tipoVulnerabilidadContainer.style.display = 'block';
                        tipoVulnerabilidadContainer.dataset.show = '1';
                        // tipoVulnerabilidadContainer.required = true;

                    }else{

                        tipoVulnerabilidadContainer.style.display = 'none';
                        tipoVulnerabilidadContainer.dataset.show = '0';
                        // tipoVulnerabilidadContainer.required = false;

                    }

                });

                tieneDiscapacidadField.addEventListener('change', function(event){


                    if(event.target.value == '1'){

                        tipoDiscapacidadContainer.style.display = 'block';
                        tipoDiscapacidadContainer.dataset.show = '1';
                        // tipoDiscapacidadContainer.required = false;

                    }else{

                        tipoDiscapacidadContainer.style.display = 'none';
                        tipoDiscapacidadContainer.dataset.show = '0';

                    }

                });

                esAfrocolombianoField.addEventListener('change', function(event){


                    if(event.target.value == '1'){

                        poblacionesAfrocolombianasContainer.style.display = 'block';
                        poblacionesAfrocolombianasContainer.dataset.show = '1';
                        poblacionesAfrocolombianasField.required = true;

                    }else{

                        poblacionesAfrocolombianasContainer.style.display = 'none';
                        poblacionesAfrocolombianasContainer.dataset.show = '0';
                        poblacionesAfrocolombianasField.required = false;

                    }

                });

                poblacionesAfrocolombianasField.addEventListener('change', function(event){


                    if(event.target.value == '4'){

                        nombrePoblacionAfrocolombianaContainer.style.display = 'block';
                        nombrePoblacionAfrocolombianaContainer.dataset.show = '1';
                        nombrePoblacionAfrocolombianaField.required = true;

                    }else{

                        nombrePoblacionAfrocolombianaContainer.style.display = 'none';
                        nombrePoblacionAfrocolombianaContainer.dataset.show = '0';
                        nombrePoblacionAfrocolombianaField.required = false;

                    }

                });

                esIndigenaField.addEventListener('change', function(event){

                    if(event.target.value == '1'){

                        poblacionesIndigenasContainer.style.display = 'block';
                        poblacionesIndigenasContainer.dataset.show = '1';
                        poblacionesIndigenasField.required = true;

                    }else{

                        poblacionesIndigenasContainer.style.display = 'none';
                        poblacionesIndigenasContainer.dataset.show = '0';
                        poblacionesIndigenasField.required = false;

                    }

                });

                poblacionesIndigenasField.addEventListener('change', function(event){

                    if(event.target.value == '8'){

                        nombrePoblacionIndigenaContainer.style.display = 'block';
                        nombrePoblacionIndigenaContainer.dataset.show = '1';
                        nombrePoblacionIndigenaField.required = true;

                    }else{

                        nombrePoblacionIndigenaContainer.style.display = 'none';
                        nombrePoblacionIndigenaContainer.dataset.show = '0';
                        nombrePoblacionIndigenaField.required = false;

                    }

                });

                esLGBTIField.addEventListener('change', function(event){

                    if(event.target.value == '1'){

                        tipoLGBTIContainer.style.display = 'block';
                        tipoLGBTIContainer.dataset.show = '1';

                    }else{

                        tipoLGBTIContainer.style.display = 'none';
                        tipoLGBTIContainer.dataset.show = '0';

                    }

                });

                esEgresadoField.addEventListener('change', function(event){

                    if(event.target.value == '1'){

                        listaInstitucionesContainer.style.display = 'block';
                        listaInstitucionesContainer.dataset.show = '1';
                        listaInstitucionesField.required = true;

                        tipoInstitucionContainer.style.display = 'block';
                        tipoInstitucionContainer.dataset.show = '1';
                        tipoInstitucionField.required = true;

                        tipoInstitucionSegundaOpcionContainer.style.display = 'none';
                        tipoInstitucionSegundaOpcionContainer.dataset.show = '0';
                        tipoInstitucionSegundaOpcionField.required = false;

                        nombreInstitucionContainer.style.display = 'none';
                        nombreInstitucionContainer.dataset.show = '0';
                        nombreInstitucionField.required = false;

                        municipioInstitucionContainer.style.display = 'none';
                        municipioInstitucionContainer.dataset.show = '0';
                        municipioInstitucionField.required = false;

                    }else{

                        listaInstitucionesContainer.style.display = 'none';
                        listaInstitucionesContainer.dataset.show = '0';
                        listaInstitucionesField.required = false;

                        tipoInstitucionContainer.style.display = 'none';
                        tipoInstitucionContainer.dataset.show = '0';
                        tipoInstitucionField.required = false;

                        tipoInstitucionSegundaOpcionContainer.style.display = 'block';
                        tipoInstitucionSegundaOpcionContainer.dataset.show = '1';
                        tipoInstitucionSegundaOpcionField.required = true;

                        nombreInstitucionContainer.style.display = 'block';
                        nombreInstitucionContainer.dataset.show = '1';
                        nombreInstitucionField.required = true;

                        municipioInstitucionContainer.style.display = 'block';
                        municipioInstitucionContainer.dataset.show = '1';
                        municipioInstitucionField.required = true;

                    }

                });

                estudioMediaTecnicaField.addEventListener('change', function(event){

                    if(event.target.value == '1'){

                        tituloMediaTecnicaContainer.style.display = 'block';
                        tituloMediaTecnicaContainer.dataset.show = '1';
                        tituloMediaTecnicaField.required = true;

                        institucionMediaTecnicaContainer.style.display = 'block';
                        institucionMediaTecnicaContainer.dataset.show = '1';
                        institucionMediaTecnicaField.required = true;

                    }else{

                        tituloMediaTecnicaContainer.style.display = 'none';
                        tituloMediaTecnicaContainer.dataset.show = '0';
                        tituloMediaTecnicaField.required = false;

                        institucionMediaTecnicaContainer.style.display = 'none';
                        institucionMediaTecnicaContainer.dataset.show = '0';
                        institucionMediaTecnicaField.required = false;

                    }

                });

                tieneTituloEducacionSuperiorField.addEventListener('change', function(event){

                    if(event.target.value == '1'){

                        institucionEducacionSuperiorContainer.style.display = 'block';
                        institucionEducacionSuperiorContainer.dataset.show = '1';
                        institucionEducacionSuperiorField.required = true;

                        nombreProgramaEducacionSuperiorContainer.style.display = 'block';
                        nombreProgramaEducacionSuperiorContainer.dataset.show = '1';
                        nombreProgramaEducacionSuperiorField.required = true;

                        tituloProgramaEducacionSuperiorContainer.style.display = 'block';
                        tituloProgramaEducacionSuperiorContainer.dataset.show = '1';
                        tituloProgramaEducacionSuperiorField.required = true;

                    }else{

                        institucionEducacionSuperiorContainer.style.display = 'none';
                        institucionEducacionSuperiorContainer.dataset.show = '0';
                        institucionEducacionSuperiorField.required = false;

                        nombreProgramaEducacionSuperiorContainer.style.display = 'none';
                        nombreProgramaEducacionSuperiorContainer.dataset.show = '0';
                        nombreProgramaEducacionSuperiorField.required = false;

                        tituloProgramaEducacionSuperiorContainer.style.display = 'none';
                        tituloProgramaEducacionSuperiorContainer.dataset.show = '0';
                        tituloProgramaEducacionSuperiorField.required = false;

                    }

                });

                estudiaActualmenteEducacionSuperiorField.addEventListener('change', function(event){

                    if(event.target.value == '1'){

                        tipoProgramaSuperiorSapienciaContainer.style.display = 'block';
                        tipoProgramaSuperiorSapienciaContainer.dataset.show = '1';
                        tipoProgramaSuperiorSapienciaField.required = true;

                        lugarEstudiosActualesContainer.style.display = 'block';
                        lugarEstudiosActualesContainer.dataset.show = '1';
                        lugarEstudiosActualesField.required = true;

                        nombreEstudioActualContainer.style.display = 'block';
                        nombreEstudioActualContainer.dataset.show = '1';
                        nombreEstudioActualField.required = true;
                        

                    }else{

                        tipoProgramaSuperiorSapienciaContainer.style.display = 'none';
                        tipoProgramaSuperiorSapienciaContainer.dataset.show = '0';
                        tipoProgramaSuperiorSapienciaField.required = false;

                        lugarEstudiosActualesContainer.style.display = 'none';
                        lugarEstudiosActualesContainer.dataset.show = '0';
                        lugarEstudiosActualesField.required = false;

                        nombreEstudioActualContainer.style.display = 'none';
                        nombreEstudioActualContainer.dataset.show = '0';
                        nombreEstudioActualField.required = false;

                    }

                })

                esBeneficiarioRecursosMunicipioField.addEventListener('change', function(event){

                    if(event.target.value == '1'){

                        tipoProgramaRecursosContainer.style.display = 'block';
                        tipoProgramaRecursosContainer.dataset.show = '1';
                        tipoProgramaRecursosField.required = true;

                    }else{

                        tipoProgramaRecursosContainer.style.display = 'none';
                        tipoProgramaRecursosContainer.dataset.show = '0';
                        tipoProgramaRecursosField.required = false;

                    }

                });


            }

        }

    }



</script>
<style>

    /* #renderResult-container{

        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        background-color: aliceblue;
        box-shadow: 0px 0px 10px #F2f2f2;

    } */

    #renderForm{

        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        background-color: aliceblue;
        box-shadow: 0px 0px 10px #F2f2f2;

    }

    #renderForm > div {

        width: 45%;
        margin: 2%;
    }

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