<template>
    <div id="loginAspirant2">
        <h3 class="mb-4">
            Notamos que haz realizado preinscripciones anteriormente, asi que hemos enviado un código al siguiente correo <b>{{ email }}</b>,
            el cual deberás ingresar para continuar.
            
        </h3>
        <form @submit.prevent="sendInfoLogin2">

            <div class="form-group">
                <label for="accessCode">Código:</label>
                <input type="text" name="accessCode" class="form-control" v-model="accessCode" required/>
                <a href="javascript:void(0)" @click="alternativeValidation"><small>¿No puedes acceder a esa cuenta de correo? Quizá podamos hacer algo</small></a>

            </div>
            <div class="button-group text-center">

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

    props:['document'],
    data(){

        return{

            accessCode: '',
            processing: false,

        }

    },
    methods:{

        sendInfoLogin2(){

            // this.$emit('changeLogin', 'login3');

            this.$http.post('inscription/validate/code',{document: this.document, code: this.accessCode}).then(response => {

                if(response.body.code == 200){

                    this.$emit('loginSuccessfull', 1);

                }else{

                   console.log("Algo malo paso");

                }

            }, response =>{

                alert("Algo ha fallado. Contacte con el administrador");
                return console.log('Too mal', response);

            });

        },
        alternativeValidation(){

            this.$emit('alternativeValidation');

        }

    }
}
</script>