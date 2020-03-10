import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({

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
        deleteElementForm(state, index) {

            state.configForm.splice(index, 1);

        }

    },
    getters: {

        avalibleFormElemets: (state) => state.avalibleFormElemets,
        configForm: (state) => state.configForm,
        nameTypeElement: (state, keyObject) => state.avalibleFormElemets[keyObject],

    }

});