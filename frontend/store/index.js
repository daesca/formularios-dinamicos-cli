import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({

    state: {
        avalibleFormElemets: {

            textBox: 'Caja de Texto',
            textField: 'Campo de texto',
            selectField: 'Lista de opciones',
            checkField: 'Selección multiple',
            radioField: 'Única opción',

        },
        countForms: 0,
        configForm: { "0": [{ "type": "selectField", "options": { "titulo": "Tipo de documento", "peso": "0", "elementos": [{ "texto": "Cedula de ciudadania", "valor": "0" }, { "texto": "Cédula de extranjería", "valor": "0" }, { "texto": "Tarjeta de identidad", "valor": "0" }, { "texto": "Permiso especial de permanencia", "valor": "0" }] } }, { "type": "textField", "options": { "titulo": "Documento", "peso": "0" } }, { "type": "selectField", "options": { "titulo": "Sexo", "peso": "0", "elementos": [{ "texto": "Mujer", "valor": "0" }, { "texto": "Hombre", "valor": "0" }] } }, { "type": "textField", "options": { "titulo": "Primer Nombre", "peso": "0" } }, { "type": "textField", "options": { "titulo": "Segundo Nombre", "peso": "0" } }, { "type": "textField", "options": { "titulo": "Primer Apellido", "peso": "0" } }, { "type": "textField", "options": { "titulo": "Segundo Apellido", "peso": "0" } }, { "type": "textField", "options": { "titulo": "Edad", "peso": "0" } }, { "type": "textField", "options": { "titulo": "Telefono fijo", "peso": "0" } }, { "type": "textField", "options": { "titulo": "Teléfono celular", "peso": "0" } }, { "type": "selectField", "options": { "titulo": "Estrato de la vivienda en que reside", "peso": "0", "elementos": [{ "texto": "1", "valor": "0" }, { "texto": "2", "valor": "0" }, { "texto": "3", "valor": "0" }, { "texto": "4", "valor": "0" }, { "texto": "5", "valor": "0" }, { "texto": "6", "valor": "0" }] } }] },
        createdForms: [

        ],
        createdCampaigns: [{
            code: '25896',
            title: 'Campaña creada 1',
            category: '1',
            dateInit: '2020-01-01',
            dateFinal: '2020-12-01',
            totalAspirants: '100',
        }],

    },
    mutations: {

        addElementForm(state, value) {

            console.log(value);

            state.configForm[state.countForms].push(value)

        },
        addForms(state, value) {

            state.createdForms[state.countForms] = {

                indexConfigForm: state.countForms,
                titleForm: value.tituloForm,

            }

            state.countForms++;

        },
        addCampaign(state, value) {

            state.createdCampaigns.push(value)

        },
        copyCampaign(state, index) {

            state.createdCampaigns.push(state.createdCampaigns[index]);

        },
        editElementForm(state, value) {

            state.configForm[state.countForms][value.keyarray].options = value.options

        },
        editCampaign(state, value) {

            state.createdCampaigns[value.keyarray] = value.mutableCampaignInfo

        },
        deleteElementForm(state, index) {

            state.configForm[0].splice(index, 1);

        },
        deleteCampaign(state, index) {

            state.createdCampaigns.splice(index, 1);

        },

    },
    getters: {

        countForms: (state) => state.countForms,
        avalibleFormElemets: (state) => state.avalibleFormElemets,
        configForm: (state) => state.configForm,
        configFormLast: (state) => {

            return state.configForm[state.countForms];

        },
        createdForms: (state) => state.createdForms,
        createdCampaigns: (state) => state.createdCampaigns,

    }

});

export default store