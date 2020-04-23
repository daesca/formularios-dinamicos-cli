<template>
    <div id="login-admin-section">
        <div id="login-container">
            <div class="login-container__header backPrimaryColor">

            </div>
            <div class="login-container__body">

                <h3>{{ $languages.welcomeLoginMessageText }}</h3>

                <div v-if="showAlert" class="alert alert-danger" role="alert">
                    {{ alertMsg }}
                </div>
                <div class="form-group">
                    <!-- <label for="user">Usuario</label> -->
                    <input type="email" name="user" class="form-control" v-model="user">
                </div>
                <div class="form-group">
                    <!-- <label for="exampleInputPassword1">Password</label> -->
                    <input type="password" class="form-control" v-model="password">
                </div>
                <div class="text-center">
                    <button class="ovalButton backPrimaryColor" @click="credentialsVerification">Acceder</button>
                </div>

            </div>
            <div class="login-container__footer">
                Accesibilidad
            </div>

        </div>
    </div>
</template>
<script>
export default {
    
    data(){

        return{

            user: '',
            password: '',
            showAlert: false,
            alertMsg: 'Credenciales incorrectas'

        }

    },
    methods:{

        credentialsVerification(){

            if(this.user == 'admin' && this.password == "admin"){

                this.$router.push('main');

            }else{

                this.showAlert = true;

            }

        }

    }

}
</script>
<style scoped>

    #login-admin-section{

        background-image: url('../../../assets/ilustracion.jpeg'); 
        min-height: 100vh;
        background-position: initial;
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;

    }
    #login-container{

        width: 350px;
        margin: 0em auto;
        top: 30%;
        left: 5%;
        border-radius: 10px;
        position: absolute;
        background-color: #fff;

    }

    .login-container__header{

        height:100px;
        border-radius: 10px 10px 0 0;

    }

    .login-container__body{

       padding: 1em;

    }

    .login-container__footer{

        background-color: #CDCDCD;
        border-radius: 0 0 10px 10px;
        padding: .5em;

    }
</style>