<template>
    <div id="loginAspirant1">
        <h3>Bienvenido al registro de campaña. Ingresa los siguientes datos:</h3>
        <form  @submit.prevent="sendInfoLogin1">
            <div class="alert alert-danger" v-show="showAlert">
                El tipo de documento no es el mismo que se tiene en el sistema. Por favor, elija el tipo de documento correcto
            </div>
            <div class="form-group">
                <label for="idType">Tipo de documento:</label>
                <select name="idType" class="form-control" v-model="typeDocument" required>
                    <option value="" default>{{ this.$languages.selectDefaultOptionText }}</option>
                    <option value="1">Cédula de ciudadanía</option>
                    <option value="2">Cédula de extranjería</option>
                    <option value="3">Tarjeta de identidad</option>
                    <option value="4">Permiso especial</option>
                </select>
            </div>
            <div class="form-group">
                <label for="document">Número de identificación:</label>
                <input type="number" name="document" class="form-control" v-model="document" required/>

            </div>
            <div v-show="processing != true" class="button-group text-center">
                <button type="submit" class="btn btn-primary">Continuar</button>
            </div>
            <div v-show="processing == true" class="text-center">
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
            typeDocument: '',
            processing: false,


        }

    },
    methods:{

        sendInfoLogin1(){

            this.processing = true;

            this.$emit('document-aspirant', this.document);
            this.$emit('type-document-aspirant', this.typeDocument);

            this.$emit('changeLogin', 'login2');

            // this.$http.post('inscription/validate',{typeDocument: this.typeDocument, document: this.document}).then(response => {

            //     if(response.body.state == 200){

            //         this.$emit('changeLogin', 'login2');

            //     }else if(response.body.state == 406){

            //         this.showAlert = true;
                
            //     }else{


            //         this.$emit('loginSuccessfull', true);

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