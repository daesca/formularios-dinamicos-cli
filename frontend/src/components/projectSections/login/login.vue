<template>
    <div id="login-container">
        <h3>{{ $languages.welcomeLoginMessageText }}</h3>

        <div v-if="showAlert" class="alert alert-danger" role="alert">
            {{ alertMsg }}
        </div>
        <div class="form-group">
            <label for="user">Usuario</label>
            <input type="email" name="user" class="form-control" v-model="user">
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" v-model="password">
        </div>
        <div>
            <button class="btn btn-primary" @click="credentialsVerification">Acceder</button>
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
    #login-container{

        width: 500px;
        margin: 2em auto;
        padding: 1em;
        border: 1px solid #ccc;
        border-radius: 10px;

    }
</style>