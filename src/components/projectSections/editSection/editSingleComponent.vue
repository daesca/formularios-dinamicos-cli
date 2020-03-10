<template>

    <div id="editSingleComponent-container">
        
        <div id="title">
           <strong>Titulo:</strong> {{ options.titulo }} <br>
           <strong>Tipo: </strong>{{ textos.type }}
        </div>
        <div id="edit-buttons" class="text-right">
            <button class="btn btn-info mr-1" data-toggle="modal" data-target="#exampleModal">Editar</button>
            <button @click="deleteItem" class="btn btn-success">Eliminar</button>
        </div>

        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div v-for="(value, key, index) in options" :key="index">
                            <label :for="key">{{ key }}</label>
                            <input type="text" :value="value" :name="key"/>
                            <!-- Valor: {{ value }} -->
                            <!-- <ul>
                                <li>Indice: {{ index }}, Key: {{ capitalize(key, false) }}, Valor: {{ value }}</li>
                            </ul> -->
                        </div>
                    </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Guardar</button>
                </div>
                </div>
            </div>
        </div>

    </div>

</template>
<script>

    export default {
        props: ['type','options', 'keyarray'],
        methods:{

            capitalize(str, allWords=false) {

                let exp=/^\w/;

                if (allWords) {
                    exp=/\b\w/g;
                }
            
                if(typeof str === 'string') {
                    return str.replace(exp, c => c.toUpperCase());
                } else {
                    return '';
                }
            },

            deleteItem(){

                this.$store.commit('deleteElementForm', this.keyarray);

            }

        }

    }
</script>
<style scoped>

</style>