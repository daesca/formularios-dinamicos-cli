<template>
    <div class="form-group">
        <label for=""><strong>{{ options.titulo }}</strong></label>
        <br>
        <div v-for="(value, index) in options.elementos" :key="index" class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" :id="'inlineCheckbox-' + keyarray + '-' + index" :value="value.valor">
            <label class="form-check-label" :for="'inlineCheckbox-' + keyarray + '-' + index">{{ value.texto }}</label>
        </div>
        <hr>
    </div>
</template>
<script>
export default {

    props:['keyarray', 'options']
    
}
</script>