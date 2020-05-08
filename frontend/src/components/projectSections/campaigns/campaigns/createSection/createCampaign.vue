<template>
    <div id="create-campaign-container" class="container">
        <div class="form-group">
            <label for="title">Nombre</label>
            <input type="text" name="title" class="form-control" maxlength="200" v-model="campaignInfo.name"/>
            <div id="error-name" class="error-block"></div>
        </div>
        <div class="form-group">
            <label for="category">Area de conocimiento</label>
            <select name="category" class="form-control" v-model="campaignInfo.category">
                <option value="" selected>Seleccione una opcion</option>
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
            <input type="date" name="dateInit" class="form-control" v-model="campaignInfo.startDate"/>
            <div id="error-startDate" class="error-block"></div>
        </div>
        <div class="form-group">
            <label for="dateFinal">Fecha Fin</label>
            <input type="date" name="dateFinal" class="form-control" v-model="campaignInfo.finalDate"/>
            <div id="error-finalDate" class="error-block"></div>
        </div>
        <div class="form-group">
            <label for="totalAspirants">Total de aspirantes</label>
            <input type="number" min="1" maxlength="6" name="totalAspirants" class="form-control" v-model="campaignInfo.totalAspirants"/>
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
                name:'',
                category:'',
                startDate: '',
                finalDate: '',
                totalAspirants: '1',
            }
        }

    },
    methods:{
        // validateDates(startDate, finalDate){

        //     let result = true;

        //     let formalDate1 = new Date(startDate);
        //     let formalDate2 = new Date(finalDate);

        //     // console.log("Fecha1: ", formalDate1.getTime);
        //     // console.log("Fecha2: ", formalDate2.getTime);

        //     let error = document.getElementById("error-startDate");

        //     if(formalDate1 > formalDate2){

        //         console.log("Entra al metodo");

                
                
        //         error.innerHTML = "La fecha inicial debe ser menor a la fecha final";

        //         error.classList.add('show');

        //         result = false;

        //     }else{

        //         error.classList.remove('show');

        //     }

        //     return result;

        // },
        validateFields(){

            let result = false;

            let resultValidate = this.$globalFunctions.emptyFields(this.campaignInfo);

            let validateDates = this.$globalFunctions.validateDates(this.campaignInfo.startDate, this.campaignInfo.finalDate)
            
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

                document.getElementById("preload").classList.add("show");

                this.$http.post('campaign/store', this.campaignInfo).then(response => {

                    // console.log("Too bn", response);          
                if(response.body.status){

                    alert("Campaña creada exitosamente");

                    return this.$router.go(-1);

                }else{

                    return alert("Error al eliminar. Contacte al administrador");

                }
        

                }, response =>{

                    alert("Algo ha fallado. Contacte con el administrador");
                    return console.log('Too mal', response);

                });

                document.getElementById("preload").classList.remove("show");
                

            }

        },
        cancelOption(){

            return this.$router.go(-1);

        }

    }
}
</script>