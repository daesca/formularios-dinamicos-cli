<template>
    <div :id="configurations.name" :class="configurations.cssClass" :data-filter="idField">
        <label :for="configurations.name"><strong>{{ configurations.title }}</strong></label>
        <select v-model="answerAspirant" :name="configurations.name" class="form-control" :required=" configurations.required == '1' ? true:false">
            <option default>{{ $languages.selectDefaultOptionText }}</option>
            <option v-for="valueSchool in schools" :key="valueSchool.id" :value="valueSchool.id">{{ valueSchool.name }}</option>
            <!-- <option value="0">Institucion 1</option>
            <option value="1">Institucion 2</option>
            <option value="2">Institucion 3</option> -->
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

            answerAspirant: '',
            schools: [],

        }

    },
    created(){

        if(this.defaultValue != undefined){

            this.answerAspirant = this.defaultValue;

        }

        this.$http.get('sapiencia/get/schools/all').then(response => {

            this.schools = response.body;

        }, response =>{

            alert('Fallo al consultar las instituciones educativas. Contacte con el administrador');
            console.log("Error:", response.body);

        });


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