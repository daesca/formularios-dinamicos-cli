<template>
    <div class="form-group">
        <label :for="'element-' + keyarray"><strong>{{ options.titulo }}</strong></label>
        <select :name="'element-' + keyarray" class="form-control">
            <option default>{{ $languages.selectDefaultOptionText }}</option>
            <option v-for="(value, index) in options.elementos" :key="index" :value="value.valor">{{ value.texto }}</option>
        </select>
        <hr>
    </div>
</template>
<script>
export default {

    props: ['keyarray', 'options'],

    
}
</script>