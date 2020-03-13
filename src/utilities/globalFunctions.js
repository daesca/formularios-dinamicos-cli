import textos from '../languages/textos'

const globalFunctions = {

    fieldsEmpty(fields) {

        // console.log(fields);

        let defaultMsg = textos.messageErrorFieldEmpty;

        let result = {};

        let state = true;

        for (let key in fields) {

            result[key] = {

                msg: "",
                showError: false

            }

            if (fields[key] == null || fields[key] == '' || fields[key] == undefined) {

                console.log("Campo a validar", fields[key]);

                result[key].msg = defaultMsg;
                result[key].showError = true;


                if (state != false) {

                    state = false;

                }

                // result.push(error);

            }


        }

        result['state'] = state;

        return result;

    },
    testCode() {

        console.log('Hola desde el pluggin');

    }

}

export default globalFunctions;