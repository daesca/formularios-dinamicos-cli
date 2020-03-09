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

        }

    },
    getters: {

        avalibleFormElemets: (state) => state.avalibleFormElemets,
        configForm: (state) => state.configForm

    }

});