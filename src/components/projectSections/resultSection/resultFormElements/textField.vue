<template>
    <div class="form-group">

        <label for="resultado"><strong>{{ options.titulo }} </strong></label>
        <input type="text" :name="'element-' + keyarray" class="form-control" :placeholder="options.placeholder">
        <hr>
    </div>
</template>
<script>
export default {

    props:['keyarray', 'options']
    
}
</script>

<style scoped>

</style>