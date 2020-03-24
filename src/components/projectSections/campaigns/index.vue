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
                    <tr v-for="(value, index) in $store.getters.createdCampaigns" :key="index">
                        <th scope="row">{{ index }}</th>
                        <td>{{ value.title }}</td>
                        <td>{{ value.category }}</td>
                        <td>{{ value.dateInit }}</td>
                        <td>{{ value.dateFinal }}</td>
                        <td>{{ value.totalAspirants }}</td>
                        <td>
                            <router-link to="/main/formsCreate" class="btn btn-success mr-2"> {{ $languages.createFormText }} </router-link>
                            <router-link :to="{path: '/main/editCampaign/' + index, params:{ keyarray: index } }" class="btn btn-info mr-2">{{ $languages.editButtonText }}</router-link>
                            <button @click="copyCampaign(index)" class="btn btn-warning mr-2">Copiar</button>
                            <button @click="deleteCampaign(index)" class="btn btn-danger">{{ $languages.deleteButtonText }}</button>
                        </td>
                    </tr>
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
    methods:{

        copyCampaign(index){

            this.$store.commit('copyCampaign', index);

        },
        deleteCampaign(index){

            this.$store.commit('deleteCampaign', index);

        }

    }
}
</script>