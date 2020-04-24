<template>
    <div id="login-admin-section">
        <div id="login-container">
            <div class="login-container__header backPrimaryColor">
                <img src="../../../assets/logo-arroba.png" alt="Logo Arroba" class="img-responsive">
            </div>
            <div class="login-container__body">

                <h3>{{ $languages.welcomeLoginMessageText }}</h3>

                <div v-if="showAlert" class="alert alert-danger" role="alert">
                    {{ alertMsg }}
                </div>
                <div class="form-group">
                    <!-- <label for="user">Usuario</label> -->
                    <input type="email" name="user" class="login-container__body-input" :placeholder="$languages.userPlaceholderInput" v-model="user">
                </div>
                <div class="form-group">
                    <!-- <label for="exampleInputPassword1">Password</label> -->
                    <input type="password" class="login-container__body-input" :placeholder="$languages.passwordPlaceholderInput" v-model="password">
                </div>
                <div class="text-center">
                    <button class="ovalButton backPrimaryColor" @click="credentialsVerification">{{ $languages.accessButtonText }}</button>
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
        text-align: center;

    }

    .login-container__header img{

        width: 90%;
    }

    .login-container__body{

       padding: 1em;

    }

    .login-container__body-input{

        color: #02243C;
        font-weight: bold;
        font-family: "Roboto", sans-serif;
        padding: .4em;
        width: 100%;  

    }

    .login-container__body-input::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
        color: #02243C;
        opacity: 1; /* Firefox */
    }

    .login-container__body-input:-ms-input-placeholder { /* Internet Explorer 10-11 */
        color: #02243C;
    }

    .login-container__body-input::-ms-input-placeholder { /* Microsoft Edge */
        color: #02243C;
    }

    .login-container__footer{

        background-color: #CDCDCD;
        border-radius: 0 0 10px 10px;
        padding: .5em;

    }
</style>