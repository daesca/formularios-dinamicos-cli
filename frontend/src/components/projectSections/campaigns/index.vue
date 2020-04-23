<template>
    <div id="index-campaings-container" class="container-full">

        <div class="row">

            <div class="col-12 col-sm-12 col-md-8 col-lg-8 mr-auto ml-auto">
                <h1>Modulo de Campañas</h1>
                <div class="d-flex justify-content-start mb-2">
                    <router-link to="/main/createCampaign" class="btn btn-info mr-2"> {{ $languages.createCampaignText }} </router-link>
                </div>

                <div class="table-responsive">
                    <table class="table">
                        <thead class="thead-dark">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">{{ $languages.titleLabelForm }}</th>
                                <th scope="col">Categoria</th>
                                <th scope="col">Fecha Inicio</th>
                                <th scope="col">Fecha Final</th>
                                <th scope="col">Cupos</th>
                                <th scope="col">Opciones</th>
                            </tr>
                        </thead>
                        <tbody>     
                            <tr v-for="(value, index) in campaigns" :key="index">
                                <th scope="row">{{ value.code }}</th>
                                <td>{{ value.name }}</td>
                                <td>{{ value.category }}</td>
                                <td>{{ value.startDate }}</td>
                                <td>{{ value.finalDate }}</td>
                                <td>{{ value.totalAspirants }}</td>
                                <td>
                                    <router-link :to="{ path: '/main/formsCreate/' + value.code, params: { codecampaign: value.code } }" class="btn btn-success mr-2"> {{ value.renderDefault == null ? $languages.createFormText: $languages.editFormText }} </router-link>
                                    <router-link :to="{ path: '/main/editCampaign/' + value.code, params:{ codecampaign: value.code } }" class="btn btn-info mr-2">{{ $languages.editButtonText }}</router-link>
                                    <button @click="copyCampaign(value.code)" class="btn btn-warning mr-2">{{ $languages.copyButtonText }}</button>
                                    <button @click="deleteCampaign(value.code)" class="btn btn-danger mr-2">{{ $languages.deleteButtonText }}</button>
                                    <button @click="shareCampaign(value.code)" class="btn btn-primary" data-toggle="modal" data-target="#shareModal">{{ $languages.shareButtonText }}</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </div>

        <!-- Modal -->
        <div class="modal fade" id="shareModal" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="loginModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Compartir Campaña</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="form-group">
                            <label for="linkShare">Link:</label>
                            <input type="text" id="linkShare" data-toggle="tooltip" data-placement="top" title="Link copiado" data-trigger="manual" class="form-control" v-model="linkShareCampaign" readonly>
                        </div>
                        <div>
                            <button class="btn btn-info" @click="copyLink">Copiar al portapeles</button>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){

        return{

            campaigns: '',
            linkShareCampaign: '',

        }

    },
    beforeMount(){

        this.allCampaigns();

    },
    methods:{

        allCampaigns(){

            this.$http.get('campaign/home').then(response => {

                this.campaigns = response.body;

            }, response =>{

                console.log("Too mal", response);

            });

        },
        copyCampaign(index){

            this.$http.get('campaign/copy/' + index).then(response => {

                if(response.body.status){

                    alert("Campaña copiada con exito");

                    return this.allCampaigns();

                }else{

                    return alert("Error al eliminar");

                }

            }, response =>{

                console.log("Too mal", response);

            });


        },
        deleteCampaign(index){

            this.$http.get('campaign/remove/' + index).then(response => {

                if(response.body.status){

                    alert("Campaña eliminada");

                    return this.allCampaigns();

                }else{

                    return alert("Error al eliminar");

                }

            }, response =>{

                console.log("Too mal", response);

            });

            // this.$store.commit('deleteCampaign', index);

        },
        shareCampaign(val){

            this.linkShareCampaign = "http://arrobamedellin.edu.co:8009/preinscripciones/frontend/dist/#/render/" + val;

        },

        copyLink(){

            /* Get the text field */
            let copyText = document.getElementById("linkShare");

            /* Select the text field */
            copyText.select();
            copyText.setSelectionRange(0, 99999); /*For mobile devices*/

            /* Copy the text inside the text field */
            document.execCommand("copy");

            this.$JQ("#linkShare").tooltip('show');
            
            let self = this;

            setTimeout(function(){ 
                self.$JQ("#linkShare").tooltip('hide'); 
            });

        }

    }
}
</script>