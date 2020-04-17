<template>
    <div id="index-campaings-container" class="container">
        <h1>Modulo de Campañas</h1>
        <div class="d-flex justify-content-start mb-2">
            <router-link to="/main/createCampaign" class="btn btn-info mr-2"> {{ $languages.createCampaignText }} </router-link>
            <!-- <router-link to="/main/formsCreate" class="btn btn-info"> {{ $languages.createFormText }} </router-link> -->
        </div>
        <!-- <div v-if="$store.getters.createdCampaigns.length == 0"> -->
        <!-- <div class="alert alert-danger">
            <span>{{ $languages.noCampaignsAvalible }}</span>
        </div> -->
        <!-- <div v-else class="table-responsive"> -->
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
                    <!-- <tr>
                        <th scope="row">0</th>
                        <td>Campaña creada 1</td>
                        <td>Tecnologia e Informacion</td>
                        <td>01-01-2020</td>
                        <td>01-12-2020</td>
                        <td>100</td>
                        <td>
                            <router-link to="/main/formsCreate" class="btn btn-success mr-2"> {{ $languages.createFormText }} </router-link>
                            <router-link to="/main/editCampaign" class="btn btn-info mr-2">{{ $languages.editButtonText }}</router-link>
                            <button @click="deleteCampaign(index)" class="btn btn-danger">{{ $languages.deleteButtonText }}</button>
                        </td>
                    </tr> -->
                    <!-- <tr v-for="(value, index) in $store.getters.createdCampaigns" :key="index"> -->
                    <template v-for="(value, index) in campaigns">
                        <tr v-if="value.deleted != '1'" :key="index">
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
                                <button @click="deleteCampaign(value.code)" class="btn btn-danger">{{ $languages.deleteButtonText }}</button>
                            </td>
                        </tr>
                    </template>
                    <!-- <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                    </tr> -->
                </tbody>
                </table>
        </div>
    </div>
</template>
<script>
export default {
    data(){

        return{

            campaigns: '',

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

            // this.$store.commit('copyCampaign', index);

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

    }
}
</script>