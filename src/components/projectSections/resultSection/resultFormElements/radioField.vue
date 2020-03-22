<template>
    <div class="form-group">
        <label for=""><strong>{{ options.titulo }}</strong></label>
        <br>
        <div v-for="(value, index) in options.elementos" :key="index" class="form-check form-check-inline">
            <input class="form-check-input" type="radio" :name="'inlineRadiobox-' + keyarray" :value="value.valor">
            <label class="form-check-label" :for="'inlineRadiobox-' + keyarray ">{{ value.texto }}</label>
        </div>
        <hr>
    </div>
</template>
<script>
export default {

    props:['keyarray', 'options']
    
}
</script>