<template>
    <div id="login-admin-section">
        <div id="login-container">
            <div class="login-container__header backPrimaryColor">
                <img src="../../../assets/logo-arroba.png" alt="Logo Arroba" class="img-responsive">
            </div>
            <div class="login-container__body">

                <h3 class="font-weight-bold">{{ $languages.welcomeLoginMessageText }}</h3>
                <div class="remember-credentials d-none">
                    
                   ¿Olvidaste tu <a href="javascript:void(0)">usuario</a> o <a href="javascript:void(0)">contraseña</a>?

                </div>

                <div class="form-group">
                    <!-- <label for="user">Usuario</label> -->
                    <input type="email" name="user" class="login-container__body-input" :placeholder="$languages.userPlaceholderInput" v-model="user">
                </div>
                <div class="form-group">
                    <!-- <label for="exampleInputPassword1">Password</label> -->
                    <input type="password" class="login-container__body-input" :placeholder="$languages.passwordPlaceholderInput" v-model="password">
                </div>
                <div class="text-center access-button-container">

                    <div v-if="showAlert" class="errorLogin error-color-text">
                        {{ alertMsg }}
                    </div>

                    <button class="ovalButton backPrimaryColor" @click="credentialsVerification">{{ $languages.accessButtonText }}</button>
                </div>

            </div>
            <div class="login-container__footer default-color-text d-none">
                <div class="login-container__footer-left">
                
                    <i class="icon-wheelchair icon-wheelchair__styles"></i><a class="font-weight-bold accesibility" href="javascript:void(0)">Accesibilidad</a>

                </div>
                <div class="login-container__footer-right">
                    <i class="icon-adjust"></i>
                    <a href="javascript:void(0)"><img src="../../../../public/images/ajustes.png" alt="ajustes"></a>
                    <a href="javascript:void(0)"><img src="../../../../public/images/ajustes2.png" alt="ajustes"></a>
                </div>
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
            alertMsg: 'Correo electrónico o contraseña incorrectos. Vuelve a intentarlo'

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

    .errorLogin{

        margin-bottom: 1.5em;
        font-size: .7rem;

    }

    #login-admin-section{

        background-image: url('../../../assets/ilustracion.jpeg'); 
        min-height: 100vh;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;

    }
    #login-container{

        /* width: 370px; */
        margin: 0em auto;
        top: 30%;
        left: 5%;
        border-radius: 20px 20px 30px 30px;
        position: absolute;
        background-color: #fff;
        overflow: hidden;

    }

    @media (max-width: 430px) {

        #login-container{

            right: 5%;

        }  
        
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

       padding: 1em 1.5em;

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

    .remember-credentials{

        color: #666;
        font-size: .8rem;
        font-weight: 400;
        margin-bottom: .5em;

    }

    .access-button-container{

        margin-top: 3em;
        margin-bottom: 1em;

    }

    .login-container__footer{

        background-color: #CDCDCD;
        border-radius: 0 0 10px 10px;
        padding: .5em;
        display: flex;


    }

    .login-container__footer a{

        color: inherit;

    }

    .login-container__footer a:hover{

        text-decoration: none;

    }

    .icon-wheelchair__styles{

        border: 1.3px solid #02243C;
        border-radius: 50%;
        padding: 0;
        font-weight: bold;
        margin-right: .5em;
        margin-left: .5em;

    }

    .login-container__footer-left{

        display: flex;
        align-items: center;
        width: 50%;

    }

    .login-container__footer-left .accesibility{

        font-size: .8rem;

    }

    .login-container__footer-right{

        align-items: center;
        display: flex;
        justify-content: flex-end;
        width: 50%;

    }

    .login-container__footer-right a{

        display: block;
        width: 28px;
        height: 28px;
        margin-right: .5em;

    }

    .login-container__footer-right a img{

        width: 100%;

    }   

    .login-container__footer-right i.icon-adjust{

        font-size: 1.5em;
        margin-right: .5em;

    }


</style>