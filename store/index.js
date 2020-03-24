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
        configForm: [


        ],
        createdForms: [

        ],
        createdCampaigns: [

        ],

    },
    mutations: {

        addElementForm(state, value) {

            state.configForm.push(value)

        },
        addForms(state, value) {

            state.createdForms[state.countForms] = {

                indexConfigForm: state.countForms,
                titleForm: value.tituloForm,

            }

        },
        addCampaign(state, value) {

            state.createdCampaigns.push(value)

        },
        editElementForm(state, value) {

            state.configForm[value.keyarray].options = value.options

        },
        editCampaing(state, value) {

            state.createdCampaigns[value.keyarray] = value.mutableCampaignInfo

        },
        deleteElementForm(state, index) {

            state.configForm.splice(index, 1);

        },
        deleteCampaign(state, index) {

            state.createdCampaigns.splice(index, 1);

        },

    },
    getters: {

        avalibleFormElemets: (state) => state.avalibleFormElemets,
        configForm: (state) => state.configForm,
        createdForms: (state) => state.createdForms,
        createdCampaigns: (state) => state.createdCampaigns,

    }

});

export default store