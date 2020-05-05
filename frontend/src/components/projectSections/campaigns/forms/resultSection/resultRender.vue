<template>
    <div id="result-render-section" class="container">
        <div class="resultContainer">
            <h2>Campaña guardada exitosamente</h2>
            
            <div>
                Este es tu código en caso de tener alguna duda o inconveniente al respecto sobre tu inscripcion a la campaña que acabas de aspirar:<br>
                <b>{{ codeResult }}</b>
            </div>
        </div>
    </div>
</template>
<script>
export default {

    computed:{
        codeResult(){

            return parseInt((Math.random() * (99999 - 10000 + 1)), 10) + 10000;

        }

    }
    
}
</script>
<style scoped>
    .resultContainer{

        max-width: 500px;
        text-align: center;
        margin: 2em auto;
        border: 1px solid #ccc;
        padding: 2em;
        border-radius: 10px;

    }
</style>