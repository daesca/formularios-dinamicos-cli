<template>
    <div :id="configurations.name" :class="configurations.cssClass">
        <label :for="configurations.name"><strong>{{ configurations.title }}</strong></label>
        <select v-model="answerAspirant" :name="configurations.name" class="form-control" :required=" configurations.required == '1' ? true:false">
            <option value="" default>{{ $languages.selectDefaultOptionText }}</option>
            <!-- <option v-for="valueCountry in countries" :key="valueCountry.id" :value="valueCountry.id">{{ valueCountry.name }}</option> -->
            <option value="0">Pais 1</option>
            <option value="1">Pais 2</option>
            <option value="2">Pais 3</option>
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
            // countries: [],
            answerAspirant: '',

        }

    },
    created(){

        if(this.defaultValue != undefined){

            this.answerAspirant = this.defaultValue;

        }

        // this.$http.get('sapiencia/get/countries/all').then(response => {

        //     this.countries = response.body;

        // }, response =>{

        //     alert('Fallo al consultar los departamentos. Contacte con el administrador');
        //     console.log("Error:", response.body);

        // });

    },
    watch:{

        answerAspirant(val){

            this.$emit("changeSpecial",{ idField: this.idField, value: val });

            // if(this.configurations.name == 'paisNacimientoSapiencia'){

            //     this.$emit('pais-nacimiento-colombia', val);

            // }

        }

    }
    // beforeMount(){

    //     if(this.idField != undefined){

    //         return this.answerAspirant = this.$store.getters.attachSpecificAnswer({index:this.idField, reactValue: this.answerAspirant});
    //     }

    // }

    
}
</script>