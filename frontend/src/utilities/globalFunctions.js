import textos from '../languages/textos'

const globalFunctions = {

    excludeFieldsValidation(fields, excludes) {

        // console.log("Campos de la funcion exclude", fields);
        fields = JSON.parse(JSON.stringify(fields));

        for (let key in fields) {

            for (let i = 0; i < excludes.length; i++) {

                if (key == excludes[i]) {

                    delete fields[key];

                }

            }

        }

        return fields;

    },

    emptyFields(fields) {

        // console.log("Errores vacios", fields);

        let result = {
            state: true,
            emptyFields: []

        };

        for (let key in fields) {

            if (fields[key] === null || fields[key] === '' || fields[key] === undefined) {

                result.emptyFields.push(key);


                if (result.state != false) {

                    result.state = false;

                }

            }


        }

        return result;

    },
    negativeNumbers(fields) {

        // console.log("Validacion numeros negativos", fields);

        let result = {
            state: true,
            negativeNumbers: []

        };

        for (let key in fields) {

            // console.log("key:", key);

            if (fields[key] < 0) {

                result.negativeNumbers.push(key);

                if (result.state != false) {

                    result.state = false;

                }

            }

        }

        return result;

    },
    regularExpressionEvaluate(regexp, fields) {

        let result = {
            state: true,
            wrongFields: []

        };

        for (let key in fields) {

            if (regexp.test(fields[key])) {

                result.wrongFields.push(key);

                if (result.state != false) {

                    result.state = false;

                }
            }

        }

        return result;
    },
    clearErrors() {

        for (let blocks = 0; blocks < document.getElementsByClassName('error-block').length; blocks++) {
            // console.log(document.getElementsByClassName('error-block')[blocks]);
            document.getElementsByClassName('error-block')[blocks].innerHTML = '';
            document.getElementsByClassName('error-block')[blocks].classList.remove('show');

        }

        return true;

    },
    showErrors(errors, msg) {

        /*

            errors['field1', 'field2', ...,'fieldn']
        */
        // console.log("Desde la funcion Show Errors: ", errors);

        // this.clearErrors();

        let idError = "";

        if (errors.length > 0) {

            for (let field = 0; field < errors.length; field++) {

                idError = "error-" + errors[field];

                // let elementError = document.getElementById("error-" + errors[field]);
                let elementError = document.getElementById(idError);
                // console.log(msg);
                elementError.append(msg);
                elementError.classList.add('show');

            }

        }

        return true;

    },
    emptyFieldsSCRStructure(basicInfo, elements, editMode = false, indexGlobal = 0) {

        // console.log("Index global: ", indexGlobal);

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

                    idError = "element-" + indexGlobal + "-" + i + "-" + resultValidateElements.emptyFields[x];

                } else {

                    idError = "element-" + i + "-" + resultValidateElements.emptyFields[x];

                }

                // showElementsEmptyErrors.push(idError);

                result.push(idError);

            }

        }

        // console.log("Total elementos vacios: ", showElementsEmptyErrors);
        if (resultValidateBasicInfo.emptyFields.length == 0 || showElementsEmptyErrors.length == 0) {

            resultValidate = true;

        }
        // result = {

        //     state: resultValidate,
        //     basicInfo: resultValidateBasicInfo.emptyFields,
        //     elements: showElementsEmptyErrors,

        // }
        return result;

    },

    idsErrorOptionStructure(fieldsWithError, indexOption, editMode = false, indexGlobal = 0) {

        // console.log("Opciones Estructura:", fieldsWithError);

        let result = [];

        let idError = "";

        for (let i = 0; i < fieldsWithError.length; i++) {

            // console.log("Resultado Validacion Elementos", resultValidateElements);

            if (editMode) {

                idError = "option-" + indexGlobal + "-" + indexOption + "-" + fieldsWithError[i];

            } else {

                idError = "option-" + indexOption + "-" + fieldsWithError[i];

            }

            // showElementsEmptyErrors.push(idError);

            result.push(idError);

        }

        return result;

    },
    validationFiltersSimple(configurations, errorMessages) {},
    validationFiltersWithOptions(basicInfo, options, errorMessages) {

        let stateValidation = true;
        let stateOptionsValidation = true;

        let emptyFieldsValidationExclude = '';

        let negativeFieldsValidationExclude = '';
        let negativeOptionFieldsValidationExclude = '';

        let onlyNumbersFieldsValidationExclude = '';
        let onlyOptionNumbersFieldsValidationExclude = '';

        emptyFieldsValidationExclude = this.excludeFieldsValidation(basicInfo, ["cssClass", "name"]);

        negativeFieldsValidationExclude = this.excludeFieldsValidation(basicInfo, ["title", "cssClass", "name"]);

        onlyNumbersFieldsValidationExclude = this.excludeFieldsValidation(basicInfo, ["title", "cssClass", "name"]);

        let emptyFieldsValidate = this.emptyFields(emptyFieldsValidationExclude);

        let negativeNumbersValidate = this.negativeNumbers(negativeFieldsValidationExclude);

        let onlyNumbersValidate = this.regularExpressionEvaluate(/[A-Za-z]+/, onlyNumbersFieldsValidationExclude);

        this.clearErrors();

        // console.log("Vacios basicos: ", emptyFieldsValidate);
        // console.log("Negativos basicos: ", negativeNumbersValidate);
        // console.log("Solo numeros basicos: ", onlyNumbersValidate);

        this.showErrors(emptyFieldsValidate.emptyFields, errorMessages.empty);
        this.showErrors(negativeNumbersValidate.negativeNumbers, errorMessages.negativeNumbers);
        this.showErrors(onlyNumbersValidate.wrongFields, errorMessages.onlyNumbers);

        for (let i = 0; i < options.length; i++) {

            /* Exclusion*/
            negativeOptionFieldsValidationExclude = this.excludeFieldsValidation(options[i], ["optionTitle", "htmlValue"]);
            onlyOptionNumbersFieldsValidationExclude = this.excludeFieldsValidation(options[i], ["optionTitle", "htmlValue"]);

            /* Validacion */
            let emptyOptionFieldsValidate = this.emptyFields(options[i]);
            let negativeOptionNumbersValidate = this.negativeNumbers(negativeOptionFieldsValidationExclude);
            let onlyOptionNumbersValidate = this.regularExpressionEvaluate(/[A-Za-z]+/, onlyOptionNumbersFieldsValidationExclude);

            // console.log("Vacios Opciones: ", emptyOptionFieldsValidate);
            // console.log("Negativos Opciones: ", negativeOptionNumbersValidate);
            // console.log("Solo numeros opciones: ", onlyOptionNumbersValidate);

            if (emptyOptionFieldsValidate.state != true || negativeOptionNumbersValidate.state != true || onlyOptionNumbersValidate.state != true) {

                // console.log("Validacion de opciones");

                stateOptionsValidation = false;

            }

            /* Formateo del ID para las opciones */
            emptyOptionFieldsValidate = this.idsErrorOptionStructure(emptyOptionFieldsValidate.emptyFields, i);
            negativeOptionNumbersValidate = this.idsErrorOptionStructure(negativeOptionNumbersValidate.negativeNumbers, i);
            onlyOptionNumbersValidate = this.idsErrorOptionStructure(onlyOptionNumbersValidate.wrongFields, i);

            // console.log("Id opciones vacios: ", emptyOptionFieldsValidate);
            // console.log("Id opciones negativos: ", negativeOptionNumbersValidate);
            // console.log("Id solo numeros opciones: ", onlyOptionNumbersValidate);


            this.showErrors(emptyOptionFieldsValidate, errorMessages.empty);
            this.showErrors(negativeOptionNumbersValidate, errorMessages.negativeNumbers);
            this.showErrors(onlyOptionNumbersValidate, errorMessages.onlyNumbers);

        }

        if (emptyFieldsValidate.state != true || negativeNumbersValidate.state != true || onlyNumbersValidate.state != true || stateOptionsValidation != true) {

            // console.log("Validacion de todo");

            stateValidation = false;

        }

        // console.log('Estado de la validacion', stateValidation);
        return stateValidation;



    },

    /* SelectField Function*/

    newOption() {

        return {

            optionTitle: '',
            htmlValue: '',
            optionWeight: 0,

        }

    }



}

export default globalFunctions;