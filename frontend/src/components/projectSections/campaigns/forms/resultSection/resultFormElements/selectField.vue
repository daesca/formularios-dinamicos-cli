<template>
    <div :class="configurations.cssClass">
        <label :for="'element-' + keyarray"><strong>{{ configurations.title }}</strong></label>
        <select :name="configurations.name" class="form-control" :data-weight="configurations.weight" :required="configurations.required == '1' ? true:false">
            <option default>{{ $languages.selectDefaultOptionText }}</option>
            <option v-for="(value, index) in configurations.options" :key="index" :value="value.htmlValue" :data-weight="value.optionWeight">{{ value.optionTitle }}</option>
        </select>
        <hr>
    </div>
</template>
<script>
export default {

    props:['keyarray', 'configurations']

    
}
</script>