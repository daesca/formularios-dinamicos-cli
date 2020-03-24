<template>
    <div id="create-campaign-container" class="container">
        <div class="form-group">
            <label for="title">Nombre</label>
            <input type="text" name="title" class="form-control" v-model="campaignInfo.title"/>
            <div id="error-title" class="error-block"></div>
        </div>
        <div class="form-group">
            <label for="category">Area de conocimiento</label>
            <select name="category" class="form-control" v-model="campaignInfo.category">
                <option selected>Seleccione una opcion</option>
                <option value="0">Categoria 1</option>
                <option value="1">Categoria 2</option>
                <option value="2">Categoria 3</option>
            </select>
            <div id="error-category" class="error-block"></div>
        </div>
        <div class="form-group">
            <label for="dateInit">Fecha Inicio</label>
            <input type="date" name="dateInit" class="form-control" v-model="campaignInfo.dateInit"/>
            <div id="error-dateInit" class="error-block"></div>
        </div>
        <div class="form-group">
            <label for="dateFinal">Fecha Fin</label>
            <input type="date" name="dateFinal" class="form-control" v-model="campaignInfo.dateFinal"/>
            <div id="error-dateFinal" class="error-block"></div>
        </div>
        <div class="form-group">
            <label for="totalAspirants">Total de aspirantes</label>
            <input type="number" min="1" name="totalAspirants" class="form-control" v-model="campaignInfo.totalAspirants"/>
            <div id="error-totalAspirants" class="error-block"></div>
        </div>
        <div>
            <button class="btn btn-success" @click="saveOption()">{{ $languages.saveButtonText }}</button>
            <button class="btn btn-default" @click="cancelOption()">{{ $languages.cancelButtonText }}</button>
        </div>          
    </div>
</template>
<script>
export default {
    data(){

        return{

            campaignInfo:{    
                title:'',
                category:'',
                dateInit: '',
                dateFinal: '',
                totalAspirants: '1',
            }
        }

    },
    methods:{
        validateFields(){

            let options = {

                title: this.title,
                category: this.category,
                dateInit: this.dateInit,
                dateFinal: this.dateFinal,
                totalAspirants: this.totalAspirants
            }

            let resultValidate = this.$globalFunctions.emptyFields(this.options);

            this.$globalFunctions.showErrors(resultValidate.emptyFields, this.$languages.errorFieldEmptyMessage);

            // console.log('Estado de la validacion', resultValidate.state);
            return resultValidate.state;

        },
        saveOption(){

            if(this.validateFields()){

                this.$store.commit('addCampaign', this.campaignInfo);
                
                return this.$router.push('campaigns');

            }


        },
        cancelOption(){

            return this.$router.push('campaigns');

        }

    }
}
</script>