<template>
    <div id="loginAspirant2">
        <h3>
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

                <button type="submit" class="btn btn-primary">Continuar</button>

            </div>

        </form>

    </div>
</template>
<script>
export default {

    props:['email', 'accesCodeAuthoriced'],
    data(){

        return{

            accessCode: '',

        }

    },
    methods:{

        sendInfoLogin2(){

            this.$emit('changeLogin', 'login3');

            // this.$http.get('inscription/validate',{typeDocument: this.typeDocument, document: this.document}).then(response => {

            //     if(response.body.state == 200){

            //         this.$emit('successLogin2', true);

            //     }else if(response.body.state == 406){

                   

            //     }

            // }, response =>{

            //     alert("Algo ha fallado. Contacte con el administrador");
            //     return console.log('Too mal', response);

            // });

        },
        alternativeValidation(){

            this.$emit('changeLogin', 'login3');

        }

    }
}
</script>