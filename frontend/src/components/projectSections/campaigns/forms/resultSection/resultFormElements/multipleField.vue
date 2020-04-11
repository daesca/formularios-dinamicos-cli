<template>
    <div :class="configurations.cssClass">

        <label for="resultado"><strong>{{ configurations.title }} </strong></label>
        <input v-if="configurations.type == 'text'" type="text" :name="configurations.name" class="form-control" :value="configurations.defaultValue" :required=" configurations.required == '1' ? true:false"/>
        <input v-else-if="configurations.type == 'file'" type="file" :name="configurations.name" class="form-control" :required=" configurations.required == '1' ? true:false"/>
        <input v-else :type="configurations.type" :name="configurations.name" class="form-control" :value="configurations.defaultValue" :min="configurations.min" :max="configurations.max" :required=" configurations.required == '1' ? true:false"/>
        <hr>
    </div>
</template>
<script>
export default {

    props:['keyarray', 'configurations']
    
}
</script>

<style scoped>

</style>