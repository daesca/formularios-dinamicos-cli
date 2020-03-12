import textos from '../languages/textos'

const globalFunctions = {

    fieldsEmpty(fields) {

        let defaultMsg = textos.messageErrorFieldEmpty;

        let result = {};

        //let error = {};

        let state = true;

        for (let key in fields) {

            if (fields[key] == null || fields[key] == '' || fields[key] == undefined) {

                result[key] = {

                    msg: defaultMsg,
                    showError: true

                }



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