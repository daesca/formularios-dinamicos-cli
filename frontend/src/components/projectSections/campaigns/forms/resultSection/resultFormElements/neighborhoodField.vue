<template>
    <div :id="configurations.name" :class="configurations.cssClass">
        <label :for="configurations.name"><strong>{{ configurations.title }}</strong></label>
        <select v-model="answerAspirant" :name="configurations.name" class="form-control" :required=" configurations.required == '1' ? true:false">
            <option value="" default>{{ $languages.selectDefaultOptionText }}</option>
            <!-- <option v-for="valueNeighborhood in neighborhoods" :key="valueNeighborhood.id" :value="valueNeighborhood.id">{{ valueNeighborhood.name }}</option> -->
            <option value="0">Barrio 1</option>
            <option value="1">Barrio 2</option>
            <option value="2">Barrio 3</option>
        </select>
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

            // neighborhoods:[],
            answerAspirant: '',

        }

    },
    created(){

        // this.$http.get('sapiencia/get/neighborhoods/all').then(response => {

        //     this.neighborhoods = response.body;

        // }, response =>{

        //     alert('Fallo al consultar los barrios. Contacte con el administrador');
        //     console.log("Error:", response.body);

        // });

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