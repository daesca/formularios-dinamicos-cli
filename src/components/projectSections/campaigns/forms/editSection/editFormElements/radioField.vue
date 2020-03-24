<template>

    <div id="radioField-edit-container">
        <div class="form-group">
            <label for="title">{{ $languages.titleLabelForm }}</label>
            <input
                type="text"
                class="form-control"
                name="title"
                v-model="mutableOptions.titulo"
            />

            <div id="error-titulo" class="error-block"></div>

        </div>
        <div class="form-group">
            <label for="valueElement">{{ $languages.valueLabelForm }}</label>
            <input
                type="text"
                class="form-control"
                name="valueElement"
                v-model="mutableOptions.peso"
            />


            <div id="error-peso" class="error-block"></div>
        </div>
        <div class="form-group">
            <label for="">{{ $languages.elementsLabelForm }}</label>
            <div id="elements-container">
                <div v-for="(value, index) in mutableOptions.elementos" :key="index" class="d-flex">
                    <div class="form-group">
                        <label for="element-text">{{ $languages.textElementLabelForm }}</label>
                        <input type="text" name="element-text" placeholder="texto del elemento" class="form-control" v-model="mutableOptions.elementos[index].texto">
                        <div :id="'error-element-' + keyarray + '-' + index + '-texto'" class="error-block"></div>
                    </div>
                    <div class="form-group">
                        <label for="element-value">{{ $languages.valueElementLabelForm }}</label>
                        <input type="text" name="element-value" placeholder="valor del elemento" class="form-control" v-model="mutableOptions.elementos[index].valor">
                        <div :id="'error-element-' + keyarray + '-'+ index +'-valor'" class="error-block"></div>
                    </div>
                    <div class="d-flex align-items-center">
                        <button class="btn btn-danger" @click="deleteElement(index)">{{ $languages.deleteButtonText }}</button>
                    </div>
                </div>
                <div id="elements-container__addButtons">
                    <button class="btn btn-success" @click="addElements">{{ $languages.addButtonText }}</button>
                </div>
            </div>
        </div>
    </div>

</template>
<script>
export default {
    props:['keyarray', 'options', 'editsaveoption', 'canceloption'],

    data(){

        return{

            mutableOptions: JSON.parse(JSON.stringify(this.options)),

        }

    },
    watch: {

        editsaveoption: function(val) {
            
            if (val) {
                if (this.validateFields()){

                    return this.$emit("send-option", this.mutableOptions);

                }else{

                    return this.$emit("send-option", false);

                }

            }

        },
        canceloption: function(val){

            this.$globalFunctions.clearErrors();

            if(val){

                this.mutableOptions = JSON.parse(JSON.stringify(this.options));
                return this.$emit("restore-info");

            }

        },
    },
    methods:{
        validateFields(){

            let result = true;

            let basicInfo = {
                titulo: this.mutableOptions.titulo,
                peso: this.mutableOptions.peso,
            }

            let errorsEmptyFields = this.$globalFunctions.emptyFieldsSCRStructure(basicInfo, this.mutableOptions.elementos, true, this.keyarray);

            // console.log("Errores: ", errorsEmptyFields);

            let errorsEmptyFieldsBasicInfo = errorsEmptyFields.basicInfo;

            let errorsEmptyFieldsElements = errorsEmptyFields.elements;

            // console.log('Elementos del select:', errorsEmptyFields);

            this.$globalFunctions.showErrors(errorsEmptyFields, this.$languages.errorFieldEmptyMessage);

            // console.log('Estado de la validacion', result);

            if(errorsEmptyFields.length > 0){

                result = false;

            }
            return result;

        },

        addElements(){
            
            let newElement = {
                
                texto: '',
                valor: '0'

            }

            return this.mutableOptions.elementos.push(newElement);

        },
        deleteElement(index){
            
            this.mutableOptions.elementos.splice(index, 1);

        },
    
    },
}
</script>