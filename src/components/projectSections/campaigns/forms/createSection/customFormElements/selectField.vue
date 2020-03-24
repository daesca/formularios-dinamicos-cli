<template>
    <div>
        <div class="form-group">
            <label for="title">{{ $languages.titleLabelForm }}</label>
            <input
                type="text"
                class="form-control"
                name="title"
                v-model="options.titulo"
            />

            <div id="error-titulo" class="error-block"></div>
        </div>
        <div class="form-group">
        <label for="valueElement">{{ $languages.valueLabelForm }}</label>
        <input
            type="text"
            class="form-control"
            name="valueElement"
            v-model="options.peso"
        />


        <div id="error-peso" class="error-block">

            </div>
        </div>
        <div class="form-group">
            <label for="">{{ $languages.elementsLabelForm }}</label>
            <div id="elements-container" class="default-box">
                <div v-for="(value, index) in options.elementos" :key="index" class="d-flex">
                    <div class="form-group">
                        <label for="element-text">{{ $languages.textElementLabelForm }}</label>
                        <input type="text" name="element-text" placeholder="texto del elemento" class="form-control" v-model="value.texto">
                        <div :id="'error-element-' + index + '-texto'" class="error-block">

                        </div>
                    </div>
                    <div class="form-group">
                        <label for="element-value">{{ $languages.valueElementLabelForm }}</label>
                        <input type="text" name="element-value" placeholder="valor del elemento" class="form-control" v-model="value.valor">
                        <div :id="'error-element-' + index + '-valor'" class="error-block">

                        </div>
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
    props: ["activateSaveOption"],
    data(){

        return{

            type: 'selectField',
            options:{
                titulo: '',
                peso:'0',
                elementos:[
                    {
                        texto:'',
                        valor: '0',
                    }
                ]
            }

        }

    },
    methods:{
        addElements(){

            let newElement = {

                texto: '',
                valor: '0'

            }

            return this.options.elementos.push(newElement);

        },
        deleteElement(index){
            
            this.options.elementos.splice(index, 1);

        },
        validateFields(){

            let result = true;

            let basicInfo = {
                titulo: this.options.titulo,
                peso: this.options.peso,
            }

            let errorsEmptyFields = this.$globalFunctions.emptyFieldsSCRStructure(basicInfo, this.options.elementos);

            // console.log("Errores: ", errorsEmptyFields);

            let errorsEmptyFieldsBasicInfo = errorsEmptyFields.basicInfo;

            let errorsEmptyFieldsElements = errorsEmptyFields.elements;


            // console.log('Elementos del select:', errorsEmptyFields);

            this.$globalFunctions.showErrors(errorsEmptyFields, this.$languages.errorFieldEmptyMessage);

            if(errorsEmptyFields.length > 0){

                result = false;

            }

            // console.log('Estado de la validacion', errorsEmptyFields);
            return result;

        }

    },
    watch: {
        activateSaveOption: function(val) {
        
        if (val) {
            if (this.validateFields()){
            let configElement = {
                type: this.type,
                options: this.options
            };

            return this.$emit("send-option", configElement);

            }else{
            return this.$emit("send-option", false);

            }
        }
        // configForm.push(configElement);
        }
  }
}
</script>