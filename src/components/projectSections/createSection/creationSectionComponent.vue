<template>
    <div id="creationSectionComponent-container">

        <h3 class="text-center">Creacion de elementos</h3>

        Selected: {{ selected }}

        <br>

        <select v-model="selected">
                
            <option disabled value="">Seleccione una opcion</option>
            <option v-for="(value, key, index) in $store.getters.avalibleFormElemets" :key="index" :value="key">{{ value }}</option>

        </select>

        <br>

        <hr>

        <defaulted v-show="selected == ''"></defaulted>
        
        <div v-if="selected != ''">

            <component :is="selected" :activateSaveOption="saveOption" @send-option="saveElement"></component>

                <!-- <component :is="selected" :activateSaveOption ="saveOption"></component> -->

        </div>

        <div v-show="selected != ''" class="text-right">

            <button @click="saveOption = true" class="btn btn-primary mr-1">Guardar elemento</button>
            <button @click="selected = ''" class="btn btn-secondary">Cancelar</button>

        </div>

        <br>

    </div>

</template>
<script>
    import defaulted from './default';
    import textBox from './customFormElements/textBox';
    import textField from './customFormElements/textField';

    export default {
        components:{
            textBox,
            textField,
            defaulted
        },
        data(){
            return{

                selected: '',
                saveOption: false,
                avalibleFormElemets: {

                    TextBox: "Caja de Texto",
                    TextField: "Campo de texto"

                }

            }
        },
        methods:{

            saveElement(val) {

                if(val != false){

                    console.log("Esta entrando en el metodo", val);

                    this.$store.commit('addElementForm', val);
                      
                    this.selected = '';

                }

                this.saveOption = false;
                


                // configForm.push(configElement);

            },
            // cancelCreation(){

            //     this.selected = '';

            // }

        }
    }
</script>
<style scoped>

</style>