<template>
    <div id="index-campaings-container" class="container" style="max-width: 1300px">

        <div class="row">

            <div class="col-12 col-sm-12 col-md-12 col-lg-12 mr-auto ml-auto">
                <h1>Modulo de Campañas</h1>
                <div class="d-flex justify-content-start mb-2">
                    <router-link to="/main/createCampaign" class="add-campaign-button backPrimaryColor mr-2" :title="$languages.createCampaignText"> <i class="icon-plus"></i> </router-link>
                </div>

                <div class="table-responsive">
                    <table class="table" id="table-campaigns">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">{{ $languages.titleLabelForm }}</th>
                                <th scope="col">{{ $languages.categoryHeadText }}</th>
                                <th scope="col">{{ $languages.startDateHeadText }}</th>
                                <th scope="col">{{ $languages.finalDateHeadText }}</th>
                                <th scope="col">{{ $languages.quotaHeadText }}</th>
                                <th scope="col">{{ $languages.optionsHeadText }}</th>
                            </tr>
                        </thead>
                        <tbody>     
                            <tr v-for="(value, index) in campaigns" :key="index">
                                <td scope="row">{{ value.code }}</td>
                                <td>{{ value.name }}</td>
                                <td>{{ categories[value.category] }}</td>
                                <td>{{ value.startDate }}</td>
                                <td>{{ value.finalDate }}</td>
                                <td>{{ value.totalAspirants }}</td>
                                <td class="options-cell">
                                    <router-link :to="{ path: '/main/editCampaign/' + value.code, params:{ codecampaign: value.code } }" class="btn-info mr-2" data-toggle="tooltip" data-placement="top" :title="$languages.editButtonText"><i class="icon-pencil"></i></router-link>
                                    <router-link :to="{ path: '/main/formsCreate/' + value.code, params: { codecampaign: value.code } }" :class="value.renderDefault == null ? 'btn-success mr-2':'btn-form-edit mr-2'" data-toggle="tooltip" data-placement="top" :title="value.renderDefault == null ? $languages.createFormText: $languages.editFormText"><i :class="value.renderDefault == null ? 'icon-doc':'icon-edit'"></i></router-link>
                                    <a href="javascript:void(0)" @click="value.renderDefault == null ? '':copyCampaign(value.code)" :disabled="value.renderDefault == null" :class="(value.renderDefault == null ? 'btn-secondary mr-2':'btn-warning mr-2')" data-toggle="tooltip" data-placement="top" :title="$languages.copyButtonText"><i class="icon-clone"></i></a>
                                    <a href="javascript:void(0)" @click="deleteCampaign(value.code)" class="btn-danger mr-2" data-toggle="tooltip" data-placement="top" :title="$languages.deleteButtonText"><i class="icon-trash-empty"></i></a>
                                    <a v-if="value.renderDefault != null" href="javascript:void(0)" @click="shareCampaign(value.code)" class="btn-primary" data-toggle="modal" data-target="#shareModal" :title="$languages.shareButtonText"><i class="icon-export"></i></a>
                                    <a v-else href="javascript:void(0)"  disabled class="btn-secondary" :title="$languages.shareButtonText"><i class="icon-export"></i></a>
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
            categories:["Categoria 1", "Categoria 2", "Categoria 3"]

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
<style scoped>

    .btn-form-edit{

        background-color: #FF5733;
        color: #fff;

    }
    .add-campaign-button{

        font-size: 2rem;
        padding: 0.3em 0.3em;
        border-radius: 50%;
        color: #fff;

    }
    #table-campaigns thead tr th{

        color: #999999;
        font-weight: normal;
        border-right: 1px solid #999999;
        border-top: none;
        border-bottom: none;
        text-align: center;

    }

    #table-campaigns thead tr th:last-child{

        border-right: none;

    }

    #table-campaigns tbody tr td{

        color: #4d4d4d;
        font-weight: normal;
        text-align: center;
        border: none;
        vertical-align: middle;

    }

    #table-campaigns tbody tr td.options-cell > a{

        padding: .5em .4em;
        border-radius: 50%;

    }



</style>