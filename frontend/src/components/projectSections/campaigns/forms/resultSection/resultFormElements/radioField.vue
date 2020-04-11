<template>
    <div :class="configurations.cssClass">
        <label for=""><strong>{{ configurations.title }}</strong></label>
        <br>
        <div v-for="(value, index) in configurations.options" :key="index" class="form-check form-check-inline">
            <input class="form-check-input" type="radio" :id="configurations.name + '-' + index" :name="configurations.name" :value="value.htmlValue" :data-weight="value.optionWeight" :required=" configurations.required == '1' ? true:false" />
            <label class="form-check-label" :for="configurations.name + '-' + index">{{ value.optionTitle }}</label>
        </div>
        <hr>
    </div>
</template>
<script>
export default {

    props:['keyarray', 'configurations']
    
}
</script>