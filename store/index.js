import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({

    state: {
        avalibleFormElemets: {

            textBox: "Caja de Texto",
            textField: "Campo de texto"

        },
        configForm: [


        ]

    },
    mutations: {

        addElementForm(state, value) {

            state.configForm.push(value)

        },
        editElementForm(state, value) {
            console.log("Esto es el value", value);
            state.configForm[value.keyarray].options = value.options

        },
        deleteElementForm(state, index) {

            state.configForm.splice(index, 1);

        }

    },
    getters: {

        avalibleFormElemets: (state) => state.avalibleFormElemets,
        configForm: (state) => state.configForm,

    }

});

export default store