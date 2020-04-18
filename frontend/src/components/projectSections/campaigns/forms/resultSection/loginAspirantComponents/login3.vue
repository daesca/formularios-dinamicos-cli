<template>
    <div id="loginAspirant2">
        <h3>
            Ingresa la fecha de expedición de tu documento de identidad:
        </h3>
        <form @submit.prevent="sendInfoLogin3">

            <div class="form-group">
                <label for="dateDocument">Fecha de expedición:</label>
                <input type="date" name="dateDocument" class="form-control" v-model="dateDocument" required/>

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

    data(){

        return{

            dateDocument: '',
            processing: false,

        }

    },
    methods:{

        sendInfoLogin3(){

            this.$emit('loginSuccessfull', 1);

            // this.$http.get('inscription/validate',{typeDocument: this.typeDocument, document: this.document}).then(response => {

            //     if(response.body.state == 200){

            //         this.$emit('successLogin2', true);

            //     }else if(response.body.state == 406){

                   

            //     }

            // }, response =>{

            //     alert("Algo ha fallado. Contacte con el administrador");
            //     return console.log('Too mal', response);

            // });

        }

    }
}
</script>
