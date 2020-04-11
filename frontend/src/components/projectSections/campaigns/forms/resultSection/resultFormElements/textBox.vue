<template>
    <div :class="configurations.cssClass">
        <label for="resultado"><strong>{{ configurations.title }}</strong></label>
        <textarea :name="configurations.name" id="" cols="30" rows="10" class="form-control" :data-weight="configurations.weight"></textarea>
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