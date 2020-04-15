<template>
    <div :class="configurations.cssClass">
        <label for="resultado"><strong>{{ configurations.title }}</strong></label>
        <textarea :name="configurations.name" id="" cols="30" rows="10" class="form-control" :data-weight="configurations.weight"></textarea>
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
    beforeMount(){

        if(this.idField != undefined){

            return this.answerAspirant = this.$store.getters.attachSpecificAnswer({index:this.idField, reactValue: this.answerAspirant});
        }

    }
    
}
</script>

<style scoped>

</style>