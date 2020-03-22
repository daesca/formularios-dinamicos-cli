<template>

    <div id="textBox-edit-container">

        <div
            class="form-group"
        >
                <label for="title"><strong>{{ $languages.titleLabelForm }}</strong></label>
                <input
                    type="text"
                    name="title"
                    class="form-control"
                    v-model="mutableOptions.titulo"
                    required
                />
                <div id="error-titulo" class="error-block"></div>

        </div>
        <div
            class="form-group"
        >
                <label for="valueElement1"><strong>{{ $languages.valueLabelForm }}</strong></label>
                <input
                    type="text"
                    name="valueElement"
                    class="form-control"
                    v-model="mutableOptions.peso"
                    required
                />
                <div id="error-peso" class="error-block"></div>

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

            let resultValidate = this.$globalFunctions.emptyFields(this.mutableOptions);

            this.$globalFunctions.showErrors(resultValidate.emptyFields, this.$languages.errorFieldEmptyMessage);

            // console.log('Estado de la validacion', resultValidate.state);

            return resultValidate.state;

        },  


    },

    
}
</script>