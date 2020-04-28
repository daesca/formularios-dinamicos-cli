<template>
    <div :id="configurations.name" :class="configurations.cssClass">
        <label :for="configurations.name"><strong>{{ configurations.title }}</strong></label>
        <select v-model="answerAspirant" :name="configurations.name" class="form-control" :required=" configurations.required == '1' ? true:false">
            <option value="" default>{{ $languages.selectDefaultOptionText }}</option>
            <!-- <option v-for="valueDepartment in departments" :key="valueDepartment.id" :value="valueDepartment.id">{{ valueDepartment.name }}</option> -->
            <option value="0">Departamento 1</option>
            <option value="1">Departamento 2</option>
            <option value="2">Departamento 3</option>
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
            // departments:[],
            answerAspirant: '',

        }

    },
    created(){

        // this.$http.get('sapiencia/get/departments/all').then(response => {

        //     this.departments = response.body;

        // }, response =>{

        //     alert('Fallo al consultar los departamentos. Contacte con el administrador');
        //     console.log("Error:", response.body);

        // });

        if(this.defaultValue != undefined){

            this.answerAspirant = this.defaultValue;

        }

    },
    watch:{

        answerAspirant(val){

            this.$emit("changeSpecial",{ idField: this.idField, value: val })

            // if(){


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