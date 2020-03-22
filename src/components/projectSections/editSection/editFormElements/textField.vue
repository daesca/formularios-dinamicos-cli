<template>
    <div id="textField-edit-container">
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
            <label for="valueElement"><strong>{{ $languages.valueLabelForm }}</strong></label>
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
                    // let configElement = {
                    // type: 'checkField',
                    // options: this.mutableOptions
                    // };

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

            // console.log(resultValidate);

            this.$globalFunctions.showErrors(resultValidate.emptyFields, this.$languages.errorFieldEmptyMessage);

            // console.log('Estado de la validacion', resultValidate.state);
            return resultValidate.state;

        },
        // editElement(){

        //     if(this.validateFields()){

        //         let editOptions = {
                    
        //             keyarray: this.keyarray,
        //             options: this.mutableOptions,

        //         }

        //         // console.log('Opciones del elemento', editOptions);

        //         this.$store.commit('editElementForm', editOptions);
        //         this.alertMsg = this.$languages.editSuccessMessage;
        //         this.alertType = 1;
        //         this.showAlertMessage = true;
        //         var self = this; 
        //         setTimeout(function(){ 
        //             // console.log('SetTimeOut', self.showAlertMessage);
        //             self.showAlertMessage = false; 
        //             }, 3000);
            
        //     }

        // },        
        // cancelEdition(){
                
        //     this.mutableOptions = JSON.parse(JSON.stringify(this.options));

        //     // console.log('Opciones del elemento', this.mutableOptions);

        //     // this.$store.commit('editElementForm', editOptions);

        //     // let jqIdModal = "#" + this.idmodal;

        //     this.$JQ(this.jqIdModal).modal('hide');

        //     document.getElementsByClassName('modal-backdrop')[0].remove();

        // },
        // closeValidation(){

        //     if(this.validateFields()){

        //         this.editElement();

        //         // let jqIdModal = "#" + this.idmodal;

        //         this.$JQ(this.jqIdModal).modal('hide');

        //         document.getElementsByClassName('modal-backdrop')[0].remove();

        //     }

        // },
    }
    
}
</script>
