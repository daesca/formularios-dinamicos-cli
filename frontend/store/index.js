import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({

    state: {
        avalibleFormElemets: {

            textBox: 'Caja de Texto',
            multipleField: 'Campo multiple',
            selectField: 'Lista desplegable',
            checkField: 'Casillas de verificación',
            radioField: 'Única opción',
            countriesField: 'Lista de paises',
            departmentsField: 'Lista de departamantos',
            townsField: 'Lista de municipios',
            neighborhoodField: 'Lista de barrios',
            schoolsField: 'Lista de instituciones educativas',

        },
        configDefaultForm: [{
                "typeField": "selectField",
                "configurations": {
                    "title": "Tipo documento",
                    "weight": "0",
                    "name": "tipoDocumentoSapiencia",
                    "cssClass": "",
                    "required": "1",
                    "options": [{
                            "optionTitle": "Cédula de ciudadanía",
                            "htmlValue": "0",
                            "optionWeight": 0
                        },
                        {
                            "optionTitle": "Cédula de extranjería",
                            "htmlValue": "1",
                            "optionWeight": 0
                        },
                        {
                            "optionTitle": "Tarjeta de indentidad",
                            "htmlValue": "2",
                            "optionWeight": 0
                        },
                        {
                            "optionTitle": "Permiso especial de permanencia",
                            "htmlValue": "3",
                            "optionWeight": 0
                        }
                    ]
                }
            },
            {
                "typeField": "multipleField",
                "configurations": {
                    "title": "Número de documento",
                    "weight": 0,
                    "defaultValue": "",
                    "type": "number",
                    "name": "document",
                    "cssClass": "",
                    "min": "",
                    "max": "",
                    "required": "1"
                }
            }, {
                "typeField": "multipleField",
                "configurations": {
                    "title": "Fecha de expedición del documento",
                    "weight": 0,
                    "defaultValue": "",
                    "type": "date",
                    "name": "fechaExpedicionSapiencia",
                    "cssClass": "",
                    "min": "",
                    "max": "",
                    "required": "1"
                }
            },
            {
                "typeField": "selectField",
                "configurations": {
                    "title": "Sexo",
                    "weight": "0",
                    "name": "sexoSapiencia",
                    "cssClass": "",
                    "required": "1",
                    "options": [{
                            "optionTitle": "Mujer",
                            "htmlValue": "0",
                            "optionWeight": 0
                        },
                        {
                            "optionTitle": "Hombre",
                            "htmlValue": "1",
                            "optionWeight": 0
                        }
                    ]
                }
            },
            {
                "typeField": "selectField",
                "configurations": {
                    "title": "Número Tarjeta de Identidad",
                    "weight": "0",
                    "name": "numeroTarjetaIdentidadSapiencia",
                    "cssClass": "",
                    "required": "1",
                    "options": [{
                            "optionTitle": "Mismo Número de cédula",
                            "htmlValue": "0",
                            "optionWeight": 0
                        },
                        {
                            "optionTitle": "Tarjeta de identidad",
                            "htmlValue": "1",
                            "optionWeight": 0
                        },
                        {
                            "optionTitle": "No aplica",
                            "htmlValue": "2",
                            "optionWeight": 0
                        }
                    ]
                }
            },
            {
                "typeField": "multipleField",
                "configurations": {
                    "title": "Número de tarjeta de identidad",
                    "weight": 0,
                    "defaultValue": "",
                    "type": "text",
                    "name": "numeroTarjetaIdentidadCondicionSapiencia",
                    "cssClass": "",
                    "min": "",
                    "max": "",
                    "required": "1"
                }
            },
            {
                "typeField": "multipleField",
                "configurations": {
                    "title": "Primer nombre",
                    "weight": 0,
                    "defaultValue": "",
                    "type": "text",
                    "name": "primerNombreSapiencia",
                    "cssClass": "",
                    "min": "",
                    "max": "",
                    "required": "1"
                }
            },
            {
                "typeField": "multipleField",
                "configurations": {
                    "title": "Segundo nombre",
                    "weight": 0,
                    "defaultValue": "",
                    "type": "text",
                    "name": "segundoNombreSapiencia",
                    "cssClass": "",
                    "min": "",
                    "max": "",
                    "required": "1"
                }
            },
            {
                "typeField": "multipleField",
                "configurations": {
                    "title": "Primer apellido",
                    "weight": 0,
                    "defaultValue": "",
                    "type": "text",
                    "name": "primerApellidoSapiencia",
                    "cssClass": "",
                    "min": "",
                    "max": "",
                    "required": "1"
                }
            },
            {
                "typeField": "multipleField",
                "configurations": {
                    "title": "Segundo apellido",
                    "weight": 0,
                    "defaultValue": "",
                    "type": "text",
                    "name": "segundoApellido",
                    "cssClass": "",
                    "min": "",
                    "max": "",
                    "required": "1"
                }
            },
            {
                "typeField": "multipleField",
                "configurations": {
                    "title": "Fecha de nacimiento",
                    "weight": 0,
                    "defaultValue": "",
                    "type": "date",
                    "name": "fechaNacimientoSapiencia",
                    "cssClass": "",
                    "min": "",
                    "max": "",
                    "required": "1"
                }
            },
            {
                "typeField": "multipleField",
                "configurations": {
                    "title": "Edad",
                    "weight": 0,
                    "defaultValue": "",
                    "type": "number",
                    "name": "edadSapiencia",
                    "cssClass": "",
                    "min": "",
                    "max": "",
                    "required": "1"
                }
            },
            {
                "typeField": "countriesField",
                "configurations": {
                    "title": "País de nacimiento",
                    "weight": 0,
                    "name": "paisNacimientoSapiencia",
                    "cssClass": "",
                    "required": "1"
                }
            },
            {
                "typeField": "multipleField",
                "configurations": {
                    "title": "Lugar de nacimiento",
                    "weight": 0,
                    "defaultValue": "",
                    "type": "text",
                    "name": "lugarNacimientoSapiencia",
                    "cssClass": "",
                    "min": "",
                    "max": "",
                    "required": "1"
                }
            },
            {
                "typeField": "departmentsField",
                "configurations": {
                    "title": "Departamento de nacimiento",
                    "weight": 0,
                    "name": "departamentoNacimientoSapiencia",
                    "cssClass": "",
                    "required": "1"
                }
            },
            {
                "typeField": "townsField",
                "configurations": {
                    "title": "Municipio de nacimiento",
                    "weight": 0,
                    "name": "municipioNacimientoSapiencia",
                    "cssClass": "",
                    "required": "1"
                }
            },
            {
                "typeField": "departmentsField",
                "configurations": {
                    "title": "Departamento de residencia",
                    "weight": 0,
                    "name": "departamentoResidenciaSapiencia",
                    "cssClass": "",
                    "required": "1"
                }
            },
            {
                "typeField": "townsField",
                "configurations": {
                    "title": "Municipio de residencia",
                    "weight": 0,
                    "name": "municipioResidenciaSapiencia",
                    "cssClass": "",
                    "required": "1"
                }
            },
            {
                "typeField": "neighborhoodField",
                "configurations": {
                    "title": "Barrio, comuna, corregimiento o vereda de residencia",
                    "weight": 0,
                    "name": "lugarResidenciaListaSapiencia",
                    "cssClass": "",
                    "required": "1"
                }
            },
            {
                "typeField": "multipleField",
                "configurations": {
                    "title": "Barrio, comuna, corregimiento o vereda de residencia",
                    "weight": 0,
                    "defaultValue": "",
                    "type": "text",
                    "name": "lugarResidenciaTextoSapiencia",
                    "cssClass": "",
                    "min": "",
                    "max": "",
                    "required": "1"
                }
            },
            {
                "typeField": "multipleField",
                "configurations": {
                    "title": "Dirección de residencia",
                    "weight": 0,
                    "defaultValue": "",
                    "type": "text",
                    "name": "direccionResidenciaSapiencia",
                    "cssClass": "",
                    "min": "",
                    "max": "",
                    "required": "1"
                }
            },
            {
                "typeField": "multipleField",
                "configurations": {
                    "title": "Teléfono fijo",
                    "weight": 0,
                    "defaultValue": "",
                    "type": "number",
                    "name": "telefonoFijoSapiencia",
                    "cssClass": "",
                    "min": "",
                    "max": "",
                    "required": "1"
                }
            },
            {
                "typeField": "multipleField",
                "configurations": {
                    "title": "Celular",
                    "weight": 0,
                    "defaultValue": "",
                    "type": "number",
                    "name": "celularSapiencia",
                    "cssClass": "",
                    "min": "",
                    "max": "",
                    "required": "1"
                }
            },
            {
                "typeField": "selectField",
                "configurations": {
                    "title": "Estrato de la vivienda en que resides",
                    "weight": "0",
                    "name": "estratoSapiencia",
                    "cssClass": "",
                    "required": "1",
                    "options": [{
                            "optionTitle": "1",
                            "htmlValue": "1",
                            "optionWeight": 0
                        },
                        {
                            "optionTitle": "2",
                            "htmlValue": "2",
                            "optionWeight": 0
                        },
                        {
                            "optionTitle": "3",
                            "htmlValue": "3",
                            "optionWeight": 0
                        },
                        {
                            "optionTitle": "4",
                            "htmlValue": "4",
                            "optionWeight": 0
                        },
                        {
                            "optionTitle": "5",
                            "htmlValue": "5",
                            "optionWeight": 0
                        },
                        {
                            "optionTitle": "6",
                            "htmlValue": "6",
                            "optionWeight": 0
                        }
                    ]
                }
            },
            {
                "typeField": "multipleField",
                "configurations": {
                    "title": "Correo electrónico",
                    "weight": 0,
                    "defaultValue": "",
                    "type": "text",
                    "name": "email",
                    "cssClass": "",
                    "min": "",
                    "max": "",
                    "required": "1"
                }
            },
            {
                "typeField": "multipleField",
                "configurations": {
                    "title": "Confirma el correo electrónico",
                    "weight": 0,
                    "defaultValue": "",
                    "type": "text",
                    "name": "confirmarCorreoSapiencia",
                    "cssClass": "",
                    "min": "",
                    "max": "",
                    "required": "1"
                }
            },
            {
                "typeField": "selectField",
                "configurations": {
                    "title": "¿Tienes hijos?",
                    "weight": "0",
                    "name": "tieneHijosSapiencia",
                    "cssClass": "",
                    "required": "1",
                    "options": [{
                            "optionTitle": "Si",
                            "htmlValue": "1",
                            "optionWeight": 0
                        },
                        {
                            "optionTitle": "No",
                            "htmlValue": "0",
                            "optionWeight": 0
                        }
                    ]
                }
            },
            {
                "typeField": "selectField",
                "configurations": {
                    "title": "¿Cuántos hijos tiene?",
                    "weight": "0",
                    "name": "cantidadHijosSapiencia",
                    "cssClass": "",
                    "required": "1",
                    "options": [{
                            "optionTitle": "1",
                            "htmlValue": "1",
                            "optionWeight": 0
                        },
                        {
                            "optionTitle": "2",
                            "htmlValue": "2",
                            "optionWeight": 0
                        },
                        {
                            "optionTitle": "3",
                            "htmlValue": "3",
                            "optionWeight": 0
                        },
                        {
                            "optionTitle": "4",
                            "htmlValue": "4",
                            "optionWeight": 0
                        },
                        {
                            "optionTitle": "5 o más",
                            "htmlValue": "5",
                            "optionWeight": 0
                        }
                    ]
                }
            },
            {
                "typeField": "selectField",
                "configurations": {
                    "title": "¿Fue madre o padre por primera vez, siendo menor de 19 años?",
                    "weight": "0",
                    "name": "padreMenorSapiencia",
                    "cssClass": "",
                    "required": "1",
                    "options": [{
                            "optionTitle": "Si",
                            "htmlValue": "1",
                            "optionWeight": 0
                        },
                        {
                            "optionTitle": "No",
                            "htmlValue": "0",
                            "optionWeight": 0
                        }
                    ]
                }
            },
            {
                "typeField": "selectField",
                "configurations": {
                    "title": "¿Es usted madre o padre soltero?",
                    "weight": "0",
                    "name": "padreSolteroSapiencia",
                    "cssClass": "",
                    "required": "1",
                    "options": [{
                            "optionTitle": "Si",
                            "htmlValue": "1",
                            "optionWeight": 0
                        },
                        {
                            "optionTitle": "No",
                            "htmlValue": "0",
                            "optionWeight": 0
                        }
                    ]
                }
            },
            {
                "typeField": "selectField",
                "configurations": {
                    "title": "¿Tienes alguna condición de vulnerabilidad?",
                    "weight": "0",
                    "name": "vulnerabilidadSapiencia",
                    "cssClass": "",
                    "required": "1",
                    "options": [{
                            "optionTitle": "Si",
                            "htmlValue": "1",
                            "optionWeight": 0
                        },
                        {
                            "optionTitle": "No",
                            "htmlValue": "0",
                            "optionWeight": 0
                        }
                    ]
                }
            },
            {
                "typeField": "checkField",
                "configurations": {
                    "title": "Por favor seleccione una o varias opciones de vulnerabilidad según sea su caso",
                    "weight": "0",
                    "name": "tipoVulnerabilidad",
                    "cssClass": "",
                    "required": "1",
                    "options": [{
                            "optionTitle": "Desmovilizado",
                            "htmlValue": "1",
                            "optionWeight": 0
                        },
                        {
                            "optionTitle": "Desvinculado del conflicto",
                            "htmlValue": "2",
                            "optionWeight": 0
                        },
                        {
                            "optionTitle": "Desplazamiento",
                            "htmlValue": "3",
                            "optionWeight": 0
                        },
                        {
                            "optionTitle": "Víctima de conflicto armado reconocido por la unidad de víctimas",
                            "htmlValue": "4",
                            "optionWeight": 0
                        },
                        {
                            "optionTitle": "Pertenece al sistema de responsabilidad penal para adolescentes (SRPA)",
                            "htmlValue": "5",
                            "optionWeight": 0
                        },
                        {
                            "optionTitle": "Pertenece al sistema de restablecimiento de derechos PARD",
                            "htmlValue": "6",
                            "optionWeight": 0
                        },
                        {
                            "optionTitle": "Pospenado",
                            "htmlValue": "7",
                            "optionWeight": 0
                        },
                        {
                            "optionTitle": "Mujer víctima de violencia basada en género",
                            "htmlValue": "8",
                            "optionWeight": 0
                        }
                    ]
                }
            },
            {
                "typeField": "selectField",
                "configurations": {
                    "title": "¿Te encuentras en condición de discapacidad?",
                    "weight": "0",
                    "name": "discapacidadSapiencia",
                    "cssClass": "",
                    "required": "1",
                    "options": [{
                            "optionTitle": "Si",
                            "htmlValue": "1",
                            "optionWeight": 0
                        },
                        {
                            "optionTitle": "No",
                            "htmlValue": "0",
                            "optionWeight": 0
                        }
                    ]
                }
            },
            {
                "typeField": "checkField",
                "configurations": {
                    "title": "Por favor seleccione una o varias opciones de discapacidad según sea su caso",
                    "weight": "0",
                    "name": "tipoDiscapacidadSapiencia",
                    "cssClass": "",
                    "required": "1",
                    "options": [{
                            "optionTitle": "Auditiva",
                            "htmlValue": "1",
                            "optionWeight": 0
                        },
                        {
                            "optionTitle": "Cognitiva",
                            "htmlValue": "2",
                            "optionWeight": 0
                        },
                        {
                            "optionTitle": "Física",
                            "htmlValue": "3",
                            "optionWeight": 0
                        },
                        {
                            "optionTitle": "Visual",
                            "htmlValue": "4",
                            "optionWeight": 0
                        },
                        {
                            "optionTitle": "Voz y habla",
                            "htmlValue": "5",
                            "optionWeight": 0
                        }
                    ]
                }
            },
            {
                "typeField": "selectField",
                "configurations": {
                    "title": "¿Te reconoces como población afrocolombiana?",
                    "weight": "0",
                    "name": "afrocolombianoSapiencia",
                    "cssClass": "",
                    "required": "1",
                    "options": [{
                            "optionTitle": "Si",
                            "htmlValue": "1",
                            "optionWeight": 0
                        },
                        {
                            "optionTitle": "No",
                            "htmlValue": "0",
                            "optionWeight": 0
                        }
                    ]
                }
            },
            {
                "typeField": "selectField",
                "configurations": {
                    "title": "Indique la población a la que pertenece",
                    "weight": "0",
                    "name": "poblacionesAfrocolombianasSapiencia",
                    "cssClass": "",
                    "required": "1",
                    "options": [{
                            "optionTitle": "Negro-Afrodescendiente",
                            "htmlValue": "1",
                            "optionWeight": 0
                        },
                        {
                            "optionTitle": "Palenquero",
                            "htmlValue": "2",
                            "optionWeight": 0
                        },
                        {
                            "optionTitle": "Raizal",
                            "htmlValue": "3",
                            "optionWeight": 0
                        },
                        {
                            "optionTitle": "Otra",
                            "htmlValue": "4",
                            "optionWeight": 0
                        }
                    ]
                }
            },
            {
                "typeField": "multipleField",
                "configurations": {
                    "title": "Nombre de la entidad",
                    "weight": 0,
                    "defaultValue": "",
                    "type": "text",
                    "name": "nombrePoblacionAfrodescendienteSapiencia",
                    "cssClass": "",
                    "min": "",
                    "max": "",
                    "required": "1"
                }
            },
            {
                "typeField": "selectField",
                "configurations": {
                    "title": "¿Perteneces a una etnia indígena?",
                    "weight": "0",
                    "name": "etniaIndigenaSapiencia",
                    "cssClass": "",
                    "required": "1",
                    "options": [{
                            "optionTitle": "Si",
                            "htmlValue": "1",
                            "optionWeight": 0
                        },
                        {
                            "optionTitle": "No",
                            "htmlValue": "0",
                            "optionWeight": 0
                        }
                    ]
                }
            },
            {
                "typeField": "selectField",
                "configurations": {
                    "title": "Indique la población a la que pertenece",
                    "weight": "0",
                    "name": "poblacionesIndigenasSapiencia",
                    "cssClass": "",
                    "required": "1",
                    "options": [{
                            "optionTitle": "Embera (Dobidá, Eyabidá, katío y chami)",
                            "htmlValue": "1",
                            "optionWeight": 0
                        },
                        {
                            "optionTitle": "Ingas",
                            "htmlValue": "2",
                            "optionWeight": 0
                        },
                        {
                            "optionTitle": "Kamsá",
                            "htmlValue": "3",
                            "optionWeight": 0
                        },
                        {
                            "optionTitle": "Nasa (Paez)",
                            "htmlValue": "4",
                            "optionWeight": 0
                        },
                        {
                            "optionTitle": "Pijaos",
                            "htmlValue": "5",
                            "optionWeight": 0
                        },
                        {
                            "optionTitle": "Senú",
                            "htmlValue": "6",
                            "optionWeight": 0
                        },
                        {
                            "optionTitle": "Tulé (Kuna)",
                            "htmlValue": "7",
                            "optionWeight": 0
                        },
                        {
                            "optionTitle": "Otra",
                            "htmlValue": "8",
                            "optionWeight": 0
                        }
                    ]
                }
            },
            {
                "typeField": "multipleField",
                "configurations": {
                    "title": "Nombre de la entidad",
                    "weight": 0,
                    "defaultValue": "",
                    "type": "text",
                    "name": "nombrePoblacionIndigenaSapiencia",
                    "cssClass": "",
                    "min": "",
                    "max": "",
                    "required": "1"
                }
            },
            {
                "typeField": "selectField",
                "configurations": {
                    "title": "¿Te reconoces como población LGTBI?",
                    "weight": "0",
                    "name": "lgbtiSapiencia",
                    "cssClass": "",
                    "required": "1",
                    "options": [{
                            "optionTitle": "Si",
                            "htmlValue": "1",
                            "optionWeight": 0
                        },
                        {
                            "optionTitle": "No",
                            "htmlValue": "0",
                            "optionWeight": 0
                        }
                    ]
                }
            },
            {
                "typeField": "checkField",
                "configurations": {
                    "title": "Seleccionar",
                    "weight": "0",
                    "name": "tipoLGBTISapiencia",
                    "cssClass": "",
                    "required": "1",
                    "options": [{
                            "optionTitle": "Lesbiana",
                            "htmlValue": "1",
                            "optionWeight": 0
                        },
                        {
                            "optionTitle": "Gay",
                            "htmlValue": "2",
                            "optionWeight": 0
                        },
                        {
                            "optionTitle": "Transgenero",
                            "htmlValue": "3",
                            "optionWeight": 0
                        },
                        {
                            "optionTitle": "Bisexual",
                            "htmlValue": "4",
                            "optionWeight": 0
                        },
                        {
                            "optionTitle": "Intersexual",
                            "htmlValue": "5",
                            "optionWeight": 0
                        }
                    ]
                }
            },
            {
                "typeField": "selectField",
                "configurations": {
                    "title": "¿Por cuál medio te enteraste de la convocatoria?",
                    "weight": "0",
                    "name": "convocatoriaSapiencia",
                    "cssClass": "",
                    "required": "1",
                    "options": [{
                            "optionTitle": "Radio",
                            "htmlValue": "1",
                            "optionWeight": 0
                        },
                        {
                            "optionTitle": "Redes sociales",
                            "htmlValue": "2",
                            "optionWeight": 0
                        },
                        {
                            "optionTitle": "Página oficial de Sapiencia",
                            "htmlValue": "3",
                            "optionWeight": 0
                        },
                        {
                            "optionTitle": "Orientador Sapiencia en mi comuna",
                            "htmlValue": "4",
                            "optionWeight": 0
                        },
                        {
                            "optionTitle": "Orientador Sapiencia en punto fijo",
                            "htmlValue": "5",
                            "optionWeight": 0
                        },
                        {
                            "optionTitle": "Orientador Sapiencia en mi colegio",
                            "htmlValue": "6",
                            "optionWeight": 0
                        },
                        {
                            "optionTitle": "Sede principal Sapiencia",
                            "htmlValue": "7",
                            "optionWeight": 0
                        }
                    ]
                }
            },
            {
                "typeField": "selectField",
                "configurations": {
                    "title": "¿Eres egresado de un colegio del municipio de Medellín?",
                    "weight": "0",
                    "name": "egresadoSapiencia",
                    "cssClass": "",
                    "required": "1",
                    "options": [{
                            "optionTitle": "Si",
                            "htmlValue": "1",
                            "optionWeight": 0
                        },
                        {
                            "optionTitle": "No",
                            "htmlValue": "0",
                            "optionWeight": 0
                        }
                    ]
                }
            },
            {
                "typeField": "schoolsField",
                "configurations": {
                    "title": "¿Cuál es el nombre completo de la institución educativa de la cual egresaste del bachillerato?",
                    "weight": 0,
                    "name": "institucionSapiencia",
                    "cssClass": "",
                    "required": "1"
                }
            },
            {
                "typeField": "selectField",
                "configurations": {
                    "title": "Indica el tipo de institución educativa de la cual egresaste de bachillerato",
                    "weight": "0",
                    "name": "tipoInstitucionSapiencia",
                    "cssClass": "",
                    "required": "1",
                    "options": [{
                            "optionTitle": "Institución pública de Medellín",
                            "htmlValue": "0",
                            "optionWeight": 0
                        },
                        {
                            "optionTitle": "Institución privada de Medellín",
                            "htmlValue": "1",
                            "optionWeight": 0
                        },
                        {
                            "optionTitle": "Institución por cobertura",
                            "htmlValue": "2",
                            "optionWeight": 0
                        }
                    ]
                }
            },
            {
                "typeField": "selectField",
                "configurations": {
                    "title": "Indica el tipo de institución educativa de la cual egresaste de bachillerato",
                    "weight": "0",
                    "name": "tipoInstitucionSegundaOpcionSapiencia",
                    "cssClass": "",
                    "required": "1",
                    "options": [{
                            "optionTitle": "Institución pública",
                            "htmlValue": "0",
                            "optionWeight": 0
                        },
                        {
                            "optionTitle": "Institución privada",
                            "htmlValue": "1",
                            "optionWeight": 0
                        },
                        {
                            "optionTitle": "Institución por cobertura",
                            "htmlValue": "2",
                            "optionWeight": 0
                        }
                    ]
                }
            },
            {
                "typeField": "multipleField",
                "configurations": {
                    "title": "¿Cuál es el nombre completo de la institución educativa de la cual egresaste del bachillerato?",
                    "weight": 0,
                    "defaultValue": "",
                    "type": "text",
                    "name": "nombreInstitucionSapiencia",
                    "cssClass": "",
                    "min": "",
                    "max": "",
                    "required": "1"
                }
            },
            {
                "typeField": "multipleField",
                "configurations": {
                    "title": "Municipio donde se encuentra la institución",
                    "weight": 0,
                    "defaultValue": "",
                    "type": "text",
                    "name": "municipioInstitucionSapiencia",
                    "cssClass": "",
                    "min": "",
                    "max": "",
                    "required": "1"
                }
            },
            {
                "typeField": "selectField",
                "configurations": {
                    "title": "¿Estudiaste una media técnica en la institución educativa donde egresaste del bachillerato?",
                    "weight": "0",
                    "name": "mediaTecnicaSapiencia",
                    "cssClass": "",
                    "required": "1",
                    "options": [{
                            "optionTitle": "Si",
                            "htmlValue": "1",
                            "optionWeight": 0
                        },
                        {
                            "optionTitle": "No",
                            "htmlValue": "0",
                            "optionWeight": 0
                        }
                    ]
                }
            },
            {
                "typeField": "multipleField",
                "configurations": {
                    "title": "Título de la media técnica",
                    "weight": 0,
                    "defaultValue": "",
                    "type": "text",
                    "name": "tituloMediaTecnicaSapiencia",
                    "cssClass": "",
                    "min": "",
                    "max": "",
                    "required": "1"
                }
            },
            {
                "typeField": "multipleField",
                "configurations": {
                    "title": "Institución que otorgó el título de la media técnica",
                    "weight": 0,
                    "defaultValue": "",
                    "type": "text",
                    "name": "institucionMediaTecnicaSapiencia",
                    "cssClass": "",
                    "min": "",
                    "max": "",
                    "required": "1"
                }
            },
            {
                "typeField": "selectField",
                "configurations": {
                    "title": "Año de graduación del bachillerato",
                    "weight": "0",
                    "name": "anuarioGraduacionSapiencia",
                    "cssClass": "",
                    "required": "1",
                    "options": [{
                            "optionTitle": "Año 1",
                            "htmlValue": "1",
                            "optionWeight": 0
                        },
                        {
                            "optionTitle": "Año 2",
                            "htmlValue": "2",
                            "optionWeight": 0
                        },
                        {
                            "optionTitle": "Año 3",
                            "htmlValue": "3",
                            "optionWeight": 0
                        },
                        {
                            "optionTitle": "No aplica",
                            "htmlValue": "0",
                            "optionWeight": 0
                        }
                    ]
                }
            },
            {
                "typeField": "selectField",
                "configurations": {
                    "title": "¿Tienes título en un programa de educación superior (técnica profesional, tecnología o programa profesional universitario)?",
                    "weight": "0",
                    "name": "tieneTituloSuperiorSapiencia",
                    "cssClass": "",
                    "required": "1",
                    "options": [{
                            "optionTitle": "Si",
                            "htmlValue": "1",
                            "optionWeight": 0
                        },
                        {
                            "optionTitle": "No",
                            "htmlValue": "0",
                            "optionWeight": 0
                        }
                    ]
                }
            },
            {
                "typeField": "multipleField",
                "configurations": {
                    "title": "¿En qué institución realizó los estudios?",
                    "weight": 0,
                    "defaultValue": "",
                    "type": "text",
                    "name": "institucionSuperiorSapiencia",
                    "cssClass": "",
                    "min": "",
                    "max": "",
                    "required": "1"
                }
            },
            {
                "typeField": "multipleField",
                "configurations": {
                    "title": "Nombre del programa que estudiaste",
                    "weight": 0,
                    "defaultValue": "",
                    "type": "text",
                    "name": "nombreProgramaSuperiorSapiencia",
                    "cssClass": "",
                    "min": "",
                    "max": "",
                    "required": "1"
                }
            },
            {
                "typeField": "multipleField",
                "configurations": {
                    "title": "Título otorgado según diploma",
                    "weight": 0,
                    "defaultValue": "",
                    "type": "text",
                    "name": "nombreTituloSuperiorSapiencia",
                    "cssClass": "",
                    "min": "",
                    "max": "",
                    "required": "1"
                }
            },
            {
                "typeField": "selectField",
                "configurations": {
                    "title": "¿Estás estudiando actualmente un programa de educación superior (técnica profesional, tecnología o programa profesional universitario)?",
                    "weight": "0",
                    "name": "estudiaActualmenteProgramaSuperiorSapiencia",
                    "cssClass": "",
                    "required": "1",
                    "options": [{
                            "optionTitle": "Si",
                            "htmlValue": "1",
                            "optionWeight": 0
                        },
                        {
                            "optionTitle": "No",
                            "htmlValue": "0",
                            "optionWeight": 0
                        }
                    ]
                }
            },
            {
                "typeField": "selectField",
                "configurations": {
                    "title": "¿Cuál de estos programas?",
                    "weight": "0",
                    "name": "tipoProgramaSuperiorSapiencia",
                    "cssClass": "",
                    "required": "1",
                    "options": [{
                            "optionTitle": "Técnica Profesional",
                            "htmlValue": "0",
                            "optionWeight": 0
                        },
                        {
                            "optionTitle": "Tecnología",
                            "htmlValue": "1",
                            "optionWeight": 0
                        },
                        {
                            "optionTitle": "Carrera Universitaria",
                            "htmlValue": "2",
                            "optionWeight": 0
                        },
                    ]
                }
            },
            {
                "typeField": "multipleField",
                "configurations": {
                    "title": "¿En qué institución estás realizando sus estudios?",
                    "weight": 0,
                    "defaultValue": "",
                    "type": "text",
                    "name": "institucionTituloSuperiorSapiencia",
                    "cssClass": "",
                    "min": "",
                    "max": "",
                    "required": "1"
                }
            },
            {
                "typeField": "multipleField",
                "configurations": {
                    "title": "Nombre del programa que estas estudiando",
                    "weight": 0,
                    "defaultValue": "",
                    "type": "text",
                    "name": "nombreEstudioActualSuperiorSapiencia",
                    "cssClass": "",
                    "min": "",
                    "max": "",
                    "required": "1"
                }
            },
            {
                "typeField": "selectField",
                "configurations": {
                    "title": "¿Eres egresado del sistema de educación escolar para adultos y extraedad (CLEI)?",
                    "weight": "0",
                    "name": "esEgresadoEducacionAdultosSapiencia",
                    "cssClass": "",
                    "required": "1",
                    "options": [{
                            "optionTitle": "Si",
                            "htmlValue": "1",
                            "optionWeight": 0
                        },
                        {
                            "optionTitle": "No",
                            "htmlValue": "0",
                            "optionWeight": 0
                        }
                    ]
                }
            },
            {
                "typeField": "selectField",
                "configurations": {
                    "title": "¿Eres o has sido beneficiario de apoyo para matricula en un programa de educación superior con recursos del municipio?",
                    "weight": "0",
                    "name": "esBeneficiarioRecursosMunicipioSapiencia",
                    "cssClass": "",
                    "required": "1",
                    "options": [{
                            "optionTitle": "Si",
                            "htmlValue": "1",
                            "optionWeight": 0
                        },
                        {
                            "optionTitle": "No",
                            "htmlValue": "0",
                            "optionWeight": 0
                        }
                    ]
                }
            },
            {
                "typeField": "selectField",
                "configurations": {
                    "title": "¿De qué programa con resursos del municipio ha sido beneficiado?",
                    "weight": "0",
                    "name": "tipoProgramaRecursosMunicipioSapiencia",
                    "cssClass": "",
                    "required": "1",
                    "options": [{
                            "optionTitle": "Becas mejores bachilleres",
                            "htmlValue": "0",
                            "optionWeight": 0
                        },
                        {
                            "optionTitle": "Fondo Sapiencia EPM y Universidades",
                            "htmlValue": "1",
                            "optionWeight": 0
                        },
                        {
                            "optionTitle": "Fondo Sapiencia con recursos de Presupuesto Participativo",
                            "htmlValue": "2",
                            "optionWeight": 0
                        },
                        {
                            "optionTitle": "Presupuesto participativo en convenio directo",
                            "htmlValue": "3",
                            "optionWeight": 0
                        },
                        {
                            "optionTitle": "@Medellín",
                            "htmlValue": "4",
                            "optionWeight": 0
                        },
                        {
                            "optionTitle": "Ciudadelas Universitarias",
                            "htmlValue": "5",
                            "optionWeight": 0
                        },

                    ]
                }
            },
            {
                "typeField": "selectField",
                "configurations": {
                    "title": "¿Has participado o pertenecido a algunas de las siguientes categorías?",
                    "weight": "0",
                    "name": "rolSocialSapiencia",
                    "cssClass": "",
                    "required": "1",
                    "options": [{
                            "optionTitle": "Personero",
                            "htmlValue": "0",
                            "optionWeight": 0
                        },
                        {
                            "optionTitle": "Contralor estudiantil",
                            "htmlValue": "1",
                            "optionWeight": 0
                        },
                        {
                            "optionTitle": "Representante de exalumnos ante el Consejo Directivo",
                            "htmlValue": "2",
                            "optionWeight": 0
                        },
                        {
                            "optionTitle": "Representante estudiantil",
                            "htmlValue": "3",
                            "optionWeight": 0
                        },
                        {
                            "optionTitle": "Deportista de una de las ligas INDER Medellín participante de juegos departamentales o nacionales",
                            "htmlValue": "4",
                            "optionWeight": 0
                        },
                        {
                            "optionTitle": "Ganador de estímulos de arte y cultura convocados por el Municipio de Medellín o el Ministerio de Cultura",
                            "htmlValue": "5",
                            "optionWeight": 0
                        },
                        {
                            "optionTitle": "Mujer que haya llegado a la fase de entrevista individual en el concurso Mujeres Jóvenes Talento Medellín",
                            "htmlValue": "6",
                            "optionWeight": 0
                        },
                        {
                            "optionTitle": "Líder de mediación escolar",
                            "htmlValue": "7",
                            "optionWeight": 0
                        },
                        {
                            "optionTitle": "Multiplicadores de convivencia del programa Delinquir No Paga",
                            "htmlValue": "8",
                            "optionWeight": 0
                        },
                        {
                            "optionTitle": "Programa Reintegración Sostenible para un Territorio en Paz",
                            "htmlValue": "9",
                            "optionWeight": 0
                        },
                        {
                            "optionTitle": "Jovenes R",
                            "htmlValue": "10",
                            "optionWeight": 0
                        },

                    ]
                }
            },
        ],
        configMutableDefaultForm: [

        ],
        configForm: [],
        departamentoNacimiento: '1',
        departamentoResidencia: '1',

    },
    mutations: {

        addElementForm(state, value) {

            // console.log(value);

            state.configForm.push(value)

        },
        setConfigForm(state, value) {
            // console.log(value);
            state.configForm = value;

        },
        setConfigDefaultForm(state, value) {
            // console.log(value);
            state.configDefaultForm = value;

        },
        setConfigMutableDefaultForm(state, value) {
            // console.log(value);

            state.configMutableDefaultForm = value;

        },
        editElementForm(state, value) {

            // console.log(value);

            state.configForm[value.keyarray].configurations = JSON.parse(JSON.stringify(value.configurations))

        },
        editElementDefaultForm(state, value) {

            // console.log(value);

            state.configMutableDefaultForm[value.keyarray].configurations = JSON.parse(JSON.stringify(value.configurations))

        },
        deleteElementForm(state, index) {

            // state.configForm.splice(index, 1);
            state.configForm[index].deleted = '1';

        },
        deleteElementDefaultForm(state, index) {

            // state.configMutableDefaultForm.splice(index, 1);
            state.configMutableDefaultForm[index].deleted = '1';

        },
        setNameToFieldOfDefaultForm(state, idcampaign) {

            let nameField = "";

            for (let i = 0; i < state.configMutableDefaultForm.length; i++) {

                nameField = "campaign-" + idcampaign + "-defaultForm-" + i;

                Vue.set(state.configMutableDefaultForm[i], 'deleted', '0');
                state.configMutableDefaultForm[i].configurations.name = nameField;

            }

        },
        setDeletedAttributeToFieldOfDefaultForm(state) {

            for (let i = 0; i < state.configMutableDefaultForm.length; i++) {

                state.configMutableDefaultForm[i].deleted = '0';

            }

        },
        resetConfigForm(state) {

            state.configForm = [];

        },
        resetConfigMutableDefaultForm(state) {

            state.configMutableDefaultForm = [];

        },
        attachSpecificAnswer(state, value) {

            Vue.set(state.answersAspirant[value.index], 'answer', value.reactValue);

        },
        changeDepartamentoNacimiento(state, value) {

            state.departamentoNacimiento = value;

        },
        changeDepartamentoResidencia(state, value) {

            state.departamentoResidencia = value;

        }

    },
    getters: {

        avalibleFormElemets: (state) => state.avalibleFormElemets,
        configForm: (state) => state.configForm,
        configDefaultForm: (state) => state.configDefaultForm,
        configMutableDefaultForm: (state) => state.configMutableDefaultForm,
        departamentoNacimiento: (state) => state.departamentoNacimiento,
        departamentoResidencia: (state) => state.departamentoResidencia,

    }

});

export default store