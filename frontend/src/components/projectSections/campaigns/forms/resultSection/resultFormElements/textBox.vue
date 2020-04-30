<template>
    <div :id="configurations.name" :class="configurations.cssClass" :data-filter="idField">
        <label for="resultado"><strong>{{ configurations.title }}</strong></label>
        <textarea v-model="answerAspirant" :name="configurations.name" id="" cols="30" rows="10" class="form-control" :data-weight="configurations.weight"></textarea>
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

        }

    },
    created(){

        if(this.defaultValue != undefined){

            this.answerAspirant = this.defaultValue;

        }

    },
    watch:{

        answerAspirant(val){

            this.$emit("changeSpecial",{ idField: this.idField, value: val })

        }

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