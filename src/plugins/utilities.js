const globalFunctions = {

    install(Vue, options) {

        Vue.fieldsEmpty = function(fields) {

            let defaultMsg = "Este campo no debe estar vacío";

            let result = [];

            var error = {};

            for (let key in fields) {

                if (fields.key == null || fields.key == '' || fields.key == undefined) {

                    error = {

                        key: {

                            msg: defaultMsg,
                            showErrors: true

                        }

                    }

                    result.push(error);

                }


            }

            return result;

        };

        Vue.testCode = function() {

            console.log('Hola desde el pluggin');

        }


    }


}

export default globalFunctions;