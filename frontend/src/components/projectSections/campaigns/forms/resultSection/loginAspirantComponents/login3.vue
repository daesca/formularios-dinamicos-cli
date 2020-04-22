<template>
    <div id="loginAspirant2">
        <h3>
            Ingresa la fecha de expedición de tu documento de identidad:
        </h3>
        <form @submit.prevent="sendInfoLogin3">

            <div class="form-group">
                <label for="dateDocument">Fecha de expedición:</label>
                <input type="date" name="dateDocument" class="form-control" v-model="dateDocument" required/>
                <div><span v-show="showErrorAlert"><b>Alerta:</b>Fecha errada</span></div>
                

            </div>
            <div class="button-group text-center">

                <button type="submit" class="btn btn-primary">Continuar</button>

            </div>
            <div v-show="processing" class="text-center">
                <div class="spinner-border" role="status">
                    <span class="sr-only">Loading...</span>
                </div><br>
                <small>Procesando...</small>
            </div>

        </form>

    </div>
</template>
<script>
export default {
    props:['document'],
    data(){

        return{

            dateDocument: '',
            processing: false,
            showErrorAlert: false,

        }

    },
    methods:{

        sendInfoLogin3(){

            this.$http.post('inscription/validate/expedition',{document: this.document, expeditionDate: this.dateDocument}).then(response => {

                this.processing = true;
                
                if(response.body.code == 200){

                    this.showErrorAlert = false;
                    this.$emit('loginSuccessfull', 1);

                }else{

                   this.showErrorAlert = true;

                }

                this.processing = false;

            }, response =>{

                alert("Algo ha fallado. Contacte con el administrador");
                return console.log('Too mal', response);

            });

        }

    }
}
</script>
