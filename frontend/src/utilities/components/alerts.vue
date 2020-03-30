<template>
    <transition name="slide-fade">
        <div v-if="showAlert" class="alert alert-success" role="alert">
            {{ msg }}
        </div>
    </transition>
</template>
<script>
export default {

    props:['type', 'msg','showAlert'],
    data(){

        return{

            typeAlertsClass:{

                1 : 'alert-success',
                2 : 'alert-warning',
                3 : 'alert-danger' ,

            }

        }

    }
    
}
</script>