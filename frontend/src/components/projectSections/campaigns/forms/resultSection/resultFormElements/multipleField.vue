<template>
    <div :id="configurations.name" :class="configurations.cssClass" :style="show">

        <label for="resultado"><strong>{{ configurations.title }} </strong></label>
        <input v-if="configurations.type == 'text'" type="text" v-model="answerAspirant" :name="configurations.name" class="form-control" :required=" configurations.required == '1' ? true:false"/>
        <input v-else-if="configurations.type == 'file'" type="file" :name="configurations.name" class="form-control" :required=" configurations.required == '1' ? true:false"/>
        <input v-else :type="configurations.type" v-model="answerAspirant" :name="configurations.name" class="form-control" :min="configurations.min" :max="configurations.max" :required=" configurations.required == '1' ? true:false"/>
        <hr>
    </div>
</template>
<script>

import globalFunctions from '../../../../../../utilities/globalFunctions';

let props = globalFunctions.propsResultFormElements();

export default {

    props:props,
    data(){

        return{

            answerAspirant: '',
            show:{

                display: 'block',

            }

        }

    },

    created(){

        if(this.defaultValue != undefined){

            this.answerAspirant = this.defaultValue;

        }

        // if(this.configurations.name == "lugarNacimientoSapiencia"){

        //     return this.show.display = 'none';

        // }

    },
    watch:{

        answerAspirant(val){

            this.$emit("changeSpecial",{ idField: this.idField, value: val });

            // if(this.configurations.name == "lugarNacimientoSapiencia"){

            //     this.show.display = 'none';

            // }

        },


    }
    // beforeMount(){

    //     if(this.idField != undefined){

    //         return this.answerAspirant = this.$store.getters.attachSpecificAnswer({index:this.idField, reactValue: this.answerAspirant});
            
    //     }

    // }
    
}
</script>

<style scoped>

</style>