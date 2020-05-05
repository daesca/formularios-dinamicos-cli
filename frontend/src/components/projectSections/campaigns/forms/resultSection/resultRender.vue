<template>
    <div id="result-render-section" class="container">
        <div class="resultContainer">
            <h2>Campaña guardada exitosamente</h2>
            
            <div>
                Este es tu código en caso de tener alguna duda o inconveniente al respecto sobre tu inscripcion a la campaña que acabas de aspirar:
                {{ codeResult }}
            </div>
        </div>
    </div>
</template>
<script>
export default {

    // data(){

    //     return{

    //         code: 

    //     }

    // }

    computed:{
        codeResult(){

            return parseInt((Math.random() * (9999 - 1000 + 1)), 10) + 1000;

        }

    }
    
}
</script>