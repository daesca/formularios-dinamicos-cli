<template>
    <div :class="configurations.cssClass">
        <label :for="'element-' + keyarray"><strong>{{ configurations.title }}</strong></label>
        <select :name="'element-' + keyarray" class="form-control" :required=" configurations.required == '1' ? true:false">
            <option default>{{ $languages.selectDefaultOptionText }}</option>
            <option value="0">Barrio 1</option>
            <option value="1">Barrio 2</option>
            <option value="2">Barrio 3</option>
        </select>
        <hr>
    </div>
</template>
<script>
export default {

    props:['keyarray', 'configurations']

    
}
</script>