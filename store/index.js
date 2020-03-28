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
        configForm: {
            0: [{

                options: { "titulo": "Campaña creada 1 editado", "peso": "25" },
                type: 'textBox',

            }]
        },
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
            console.log("editCampaign", value);
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