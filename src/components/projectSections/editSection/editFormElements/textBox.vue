<template>

    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Editar elemento</h5>
            <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
            >
                <span aria-hidden="true">&times;</span>
            </button>
            </div>
            <div class="modal-body">

            <alerts :msg="$languages.messageErrorFieldEmpty" :type="1" :showAlert="showAlertMessage"></alerts>

                <div id="textBox-edit-container">

                    <div
                        class="form-group"
                    >
                            <label for="title"><strong>Título</strong></label>
                            <input
                                type="text"
                                name="title"
                                class="form-control"
                                v-model="titulo"
                                required
                            />

                    </div>
                    <div
                        class="form-group"
                    >
                            <label for="valueElement1"><strong>Peso</strong></label>
                            <input
                                type="text"
                                name="valueElement"
                                class="form-control"
                                v-model="peso"
                                required
                            />

                    </div>
                </div>
            </div>
            <div class="modal-footer">
            <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
            >
                Cancelar
            </button>
            <button
                type="button"
                class="btn btn-primary"
                @click="editElement"
            >
                Guardar
            </button>
            </div>
        </div>
    </div> 
              
</template>
<script>

import { alerts } from '../../../../importGroups/utilities/index';
export default {

    props:['keyarray','options'],
    components: {

        alerts

    },
    data(){

        return{

            titulo: this.options.titulo,
            peso: this.options.peso,
            showAlertMessage: false,

        }

    },
    methods:{

        capitalize(str, allWords = false) {
            let exp = /^\w/;

            if (allWords) {
                exp = /\b\w/g;
            }

            if (typeof str === "string") {
                return str.replace(exp, c => c.toUpperCase());
            } else {
                return "";
            }
        },
        editElement(){

            let editOptions = {

                keyarray: this.keyarray,
                options: {

                    titulo: this.titulo,
                    peso: this.peso,

                }

            }

            // console.log('Opciones del elemento', editOptions);

            this.$store.commit('editElementForm', editOptions);
            this.showAlertMessage = true;
            var self = this; 
            setTimeout(function(){ 
                // console.log('SetTimeOut', self.showAlertMessage);
                self.showAlertMessage = false; 
                }, 3000);
        },
    
    },

    
}
</script>