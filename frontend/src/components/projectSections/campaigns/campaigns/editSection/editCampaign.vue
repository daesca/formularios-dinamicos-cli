<template>
    <div id="create-campaign-container" class="container">
        <div class="form-group">
            <label for="title">Nombre</label>
            <input type="text" name="title" maxlength="200" class="form-control" v-model="mutableCampaignInfo.name"/>
            <div id="error-name" class="error-block"></div>
        </div>
        <div class="form-group">
            <label for="category">Area de conocimiento</label>
            <select name="category" class="form-control" v-model="mutableCampaignInfo.category">
                <option value="">Seleccione una opcion</option>
                <option value="1">Agronomía, Veterinaria y afines</option>
                <option value="2">Bellas Artes</option>
                <option value="3">Ciencias de la Educación</option>
                <option value="4">Ciencias de la Salud</option>
                <option value="5">Ciencias Sociales y Humanas</option>
                <option value="6">Economía, Administración, Contaduría y afines</option>
                <option value="7">Ingeniería, Arquitectura, Urbanismo y afines</option>
                <option value="8">Matemáticas y Ciencias Naturales</option>
            </select>
            <div id="error-category" class="error-block"></div>
        </div>
        <div class="form-group">
            <label for="dateInit">Fecha Inicio</label>
            <input type="date" name="dateInit" class="form-control" v-model="mutableCampaignInfo.startDate"/>
            <div id="error-startDate" class="error-block"></div>
        </div>
        <div class="form-group">
            <label for="dateFinal">Fecha fin</label>
            <input type="date" name="dateFinal" class="form-control" v-model="mutableCampaignInfo.finalDate"/>
            <div id="error-finalDate" class="error-block"></div>
        </div>
        <div class="form-group">
            <label for="totalAspirants">Total de aspirantes</label>
            <input type="number" min="1" max="99999" name="totalAspirants" class="form-control" v-model="mutableCampaignInfo.totalAspirants"/>
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

            let result = false;

            let emptyFieldsException = this.$globalFunctions.excludeFieldsValidation(this.mutableCampaignInfo, ['renderDefault', 'render']);

            let resultValidate = this.$globalFunctions.emptyFields(emptyFieldsException);

            // console.log("Resultado de la edicion: ", resultValidate);
            
            let validateDates = this.$globalFunctions.validateDates(this.mutableCampaignInfo.startDate, this.mutableCampaignInfo.finalDate)

            this.$globalFunctions.clearErrors();
            
            this.$globalFunctions.showErrors(resultValidate.emptyFields, this.$languages.errorFieldEmptyMessage);

            if(validateDates == false){

                this.$globalFunctions.showErrors(['startDate'], "La fecha inicial debe ser menor a la fecha final");

            }

            if(validateDates && resultValidate.state){

                result = true;

            }

            // console.log('Estado de la validacion', resultValidate.state);
            return result;

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