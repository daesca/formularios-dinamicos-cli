<template>
    <div :class="configurations.cssClass">
        <label :for="configurations.name"><strong>{{ configurations.title }}</strong></label>
        <select :name="configurations.name" class="form-control" :required=" configurations.required == '1' ? true:false">
            <option default>{{ $languages.selectDefaultOptionText }}</option>
            <option value="0">Departamento 1</option>
            <option value="1">Departamento 2</option>
            <option value="2">Departamento 3</option>
        </select>
        <hr>
    </div>
</template>
<script>
export default {

    props:['keyarray', 'configurations']

    
}
</script>