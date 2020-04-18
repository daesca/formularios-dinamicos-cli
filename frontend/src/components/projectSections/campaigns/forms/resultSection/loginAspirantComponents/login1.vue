<template>
    <div id="loginAspirant1">
        <h3 class="mb-4">Bienvenido al registro de campaña. Ingresa los siguientes datos:</h3>
        <form  @submit.prevent="sendInfoLogin1">
            <div class="alert alert-danger" v-show="showAlert">
                El tipo de documento no es el mismo que se tiene en el sistema. Por favor, elija el tipo de documento correcto
            </div>
            <div class="form-group">
                <label for="document">Número de identificación:</label>
                <input type="number" name="document" class="form-control" v-model="document" required/>

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

    data(){

        return{

            showAlert: false,
            document: '',
            processing: false,


        }

    },
    methods:{

        sendInfoLogin1(){

            this.processing = true;

            this.$emit('document-aspirant', this.document);

             this.$emit('changeLogin', 'login2');

            // this.$emit('changeLogin', 'login2');

            // this.$http.post('inscription/validate',{typeDocument: this.typeDocument, document: this.document}).then(response => {

            //     console.log('Desde login1: ', response);

            //     if(response.body.state == 200){

            //         this.$emit('access-code', response.body.accessCode);

            //         this.$emit('changeLogin', 'login2');

            //     }else if(response.body.state == 406){

            //         this.showAlert = true;
                
            //     }else{


            //         this.$emit('loginSuccessfull', 0);

            //     }

            //     this.processing = false;

            // }, response =>{

            //     alert("Algo ha fallado. Contacte con el administrador");

            //     this.processing = false;
            //     return console.log('Too mal', response);

            // });


        }

    }
    
}
</script>