<template>
    <div id="create-campaign-container" class="container">
        <div class="form-group">
            <label for="title">Nombre</label>
            <input type="text" name="title" class="form-control" v-model="mutableCampaignInfo.name"/>
            <div id="error-name" class="error-block"></div>
        </div>
        <div class="form-group">
            <label for="category">Area de conocimiento</label>
            <select name="category" class="form-control" v-model="mutableCampaignInfo.category">
                <option value="" selected>Seleccione una opcion</option>
                <option value="0">Categoria 1</option>
                <option value="1">Categoria 2</option>
                <option value="2">Categoria 3</option>
            </select>
            <div id="error-category" class="error-block"></div>
        </div>
        <div class="form-group">
            <label for="dateInit">Fecha Inicio</label>
            <input type="date" name="dateInit" class="form-control" v-model="mutableCampaignInfo.startDate"/>
            <div id="error-dateInit" class="error-block"></div>
        </div>
        <div class="form-group">
            <label for="dateFinal">Fecha fin</label>
            <input type="date" name="dateFinal" class="form-control" v-model="mutableCampaignInfo.finalDate"/>
            <div id="error-dateFinal" class="error-block"></div>
        </div>
        <div class="form-group">
            <label for="totalAspirants">Total de aspirantes</label>
            <input type="number" min="1" name="totalAspirants" class="form-control" v-model="mutableCampaignInfo.totalAspirants"/>
            <div id="error-totalAspirants" class="error-block"></div>
        </div>
        <div>
            <button class="btn btn-success" @click="saveOption">{{ $languages.saveButtonText }}</button>
            <button class="btn btn-default" @click="cancelOption">{{ $languages.cancelButtonText }}</button>
        </div>          
    </div>
</template>
<script>
export default {
    props:['codecampaign'],
    data(){

        return{
             mutableCampaignInfo: '',  

            // campaignInfo:{    
            //     title:'',
            //     category:'',
            //     dateInit: '',
            //     dateFinal: '',
            //     totalAspirants: '1',
            //     formAssociated: '',
            // }
        }

    },
    mounted(){

        // console.log("Prop", this.codecampaign);

        this.$http.get('campaign/edit/' + this.codecampaign).then(response => {

            if(response.body.status){

                this.mutableCampaignInfo = response.body.data;

                return true;

            }else{

                return alert("Error al eliminar");

            }

        }, response =>{

            alert("Algo ha fallado. Contacte con el administrador");
            
            return console.log('Too mal', response);

        });

    },
    methods:{
        validateFields(){

            // let options = {

            //     name: this.mutableCampaignInfo.name,
            //     category: this.mutableCampaignInfo.category,
            //     dateInit: this.mutableCampaignInfo.startDate,
            //     dateFinal: this.mutableCampaignInfo.finalDate,
            //     totalAspirants: this.mutableCampaignInfo.totalAspirants
            // }

            let emptyFieldsException = this.$globalFunctions.excludeFieldsValidation(this.mutableCampaignInfo, ['renderDefault', 'render']);

            let resultValidate = this.$globalFunctions.emptyFields(emptyFieldsException);

            console.log("Resultado de la edicion: ", resultValidate);

            this.$globalFunctions.showErrors(resultValidate.emptyFields, this.$languages.errorFieldEmptyMessage);

            // console.log('Estado de la validacion', resultValidate.state);
            return resultValidate.state;

        },
    

        saveOption(){

            if(this.validateFields()){

                this.$http.post('campaign/update', this.mutableCampaignInfo).then(response => {

                    // console.log("Too bn", response);

                    if(response.body.status){

                        alert("Edicion finalizada exitosamente");

                        return this.$router.go(-1);

                    }else{

                        return alert("Error al eliminar");

                    }


                }, response =>{

                    alert("Algo ha fallado. Contacte con el administrador", response);
                    return console.log('Too mal', response);

                });
                

            }


        },
        cancelOption(){

            return this.$router.go(-1);

        }

    }
}
</script>