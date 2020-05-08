<template>
    <div id="loginAspirant1">
        <h3 class="mb-4">Bienvenido al registro de campaña. Ingresa el número de identificación para continuar:</h3>
        <form  @submit.prevent="sendInfoLogin1">
            <div class="form-group">
                <label for="document">Número de identificación:</label>
                <input type="number" name="document" class="form-control" v-model="document" required/>

            </div>
            <div v-show="showAlert" class="alert alert-danger text-center">
                {{ alertMsg }}
            </div>
            <div v-show="!processing" class="button-group text-center">
                <button type="submit" class="">Continuar</button>
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

    props:['codecampaign'],

    data(){

        return{

            showAlert: false,
            alertMsg: '',
            document: '',
            processing: false,


        }

    },
    methods:{

        sendInfoLogin1(){

            this.showAlert = false;

            this.processing = true;

            this.$emit('document-aspirant', this.document);

            this.$http.post('inscription/validate/document',{document: this.document, codecampaign: this.codecampaign}).then(response => {

                // console.log('Desde login1: ', response);

                if(response.body.code == 200){

                    console.log(response.body);

                    this.$emit('document-aspirant', response.body.data[0].document);

                    this.$emit('email-aspirant', response.body.data[0].email);

                    this.$emit('changeLogin', 'login2');

                }else if(response.body.code == 501){

                    this.alertMsg = response.body.message;
                    this.showAlert = true;
                
                }else if(response.body.code == 503){

                    this.alertMsg = response.body.message;
                    this.showAlert = true;

                }
                else{

                    console.log('No hay informacion previa');

                    this.$emit('loginSuccessfull', 0);

                }

                this.processing = false;

            }, response =>{

                alert("Algo ha fallado. Contacte con el administrador");

                this.processing = false;
                return console.log('Too mal', response);

            });


        }

    }
    
}
</script>