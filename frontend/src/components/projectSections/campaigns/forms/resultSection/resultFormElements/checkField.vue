<template>
    <div :class="configurations.cssClass">
        <label for=""><strong>{{ configurations.title }}</strong></label>
        <br>
        <div v-for="(value, index) in configurations.options" :key="index" class="form-check">
            <input class="form-check-input" type="checkbox" :id="'inlineCheckbox-' + keyarray + '-' + index" :value="value.htmlValue" :required=" configurations.required == '1' ? true:false"/>
            <label class="form-check-label" :for="'inlineCheckbox-' + keyarray + '-' + index">{{ value.optionTitle }}</label>
        </div>
        <hr>
    </div>
</template>
<script>
export default {

    props:['keyarray', 'configurations']
    
}
</script>