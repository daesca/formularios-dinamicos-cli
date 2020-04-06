<template>
    <div :class="configurations.cssClass">
        <label :for="'element-' + keyarray"><strong>{{ configurations.title }}</strong></label>
        <select :name="'element-' + keyarray" class="form-control" :required=" configurations.required == '1' ? true:false">
            <option default>{{ $languages.selectDefaultOptionText }}</option>
            <option value="0">Municipio 1</option>
            <option value="1">Municipio 2</option>
            <option value="2">Municipio 3</option>
        </select>
        <hr>
    </div>
</template>
<script>
export default {

    props:['keyarray', 'configurations']

    
}
</script>