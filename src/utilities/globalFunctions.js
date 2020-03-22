import textos from '../languages/textos'

const globalFunctions = {

    emptyFields(fields) {

        /*
            fields
        
        */

        // console.log(fields);

        // let defaultMsg = textos.messageErrorFieldEmpty;

        let result = {
            state: true,
            // emptyFields: {

            // }
            emptyFields: []

        };

        for (let key in fields) {

            // result.emptyFields[key] = {

            //     msg: "",
            //     showError: false

            // }

            if (fields[key] == null || fields[key] == '' || fields[key] == undefined) {

                // console.log("Campo a validar", fields[key]);

                // result.emptyFields[key].msg = defaultMsg;
                // result.emptyFields[key].showError = true;

                result.emptyFields.push(key);


                if (result.state != false) {

                    result.state = false;

                }

                // result.push(error);

            }


        }

        return result;

    },
    clearErrors() {

        for (let blocks = 0; blocks < document.getElementsByClassName('error-block').length; blocks++) {
            // console.log(document.getElementsByClassName('error-block')[blocks]);
            document.getElementsByClassName('error-block')[blocks].classList.remove('show');

        }

        return true;

    },
    showErrors(errors, msg) {

        /*
            errors: {

                field:{

                    msg: string,
                    showError: boolean
                }

            }
            errors['field1', 'field2', ...,'fieldn']
        */
        // console.log("Desde la funcion Show Errors: ", errors);

        this.clearErrors();

        for (let field = 0; field < errors.length; field++) {

            let elementError = document.getElementById("error-" + errors[field]);
            // console.log(elementError);
            elementError.innerHTML = msg;
            elementError.classList.add('show');

        }

        return true;

    },
    emptyFieldsSCRStructure(basicInfo, elements, editMode = false, indexGlobal = 0) {

        console.log("Index global: ", indexGlobal);

        // console.log("Informacion Basica", basicInfo);
        // console.log("Elementos: ", elements);

        // let result = {};
        let result = [];

        let resultValidate = false;

        let showElementsEmptyErrors = [];

        let idError = "";

        let resultValidateBasicInfo = this.emptyFields(basicInfo);

        // console.log("Resultado Informacion basica", resultValidateBasicInfo);

        let resultValidateElements = [];

        for (let a = 0; a < resultValidateBasicInfo.emptyFields.length; a++) {

            result.push(resultValidateBasicInfo.emptyFields[a]);

        }

        for (let i = 0; i < elements.length; i++) {

            resultValidateElements = this.emptyFields(elements[i]);

            // console.log("Resultado Validacion Elementos", resultValidateElements);

            for (let x = 0; x < resultValidateElements.emptyFields.length; x++) {

                if (editMode) {
                    console.log('');
                    idError = "element-" + indexGlobal + "-" + i + "-" + resultValidateElements.emptyFields[x];

                } else {

                    idError = "element-" + i + "-" + resultValidateElements.emptyFields[x];

                }

                // showElementsEmptyErrors.push(idError);

                result.push(idError);

            }

        }

        // console.log("Total elementos vacios: ", showElementsEmptyErrors);
        if (resultValidateBasicInfo.emptyFields.length == 0 && showElementsEmptyErrors.length == 0) {

            resultValidate = true;

        }
        // result = {

        //     state: resultValidate,
        //     basicInfo: resultValidateBasicInfo.emptyFields,
        //     elements: showElementsEmptyErrors,

        // }
        return result;

    },

}

export default globalFunctions;