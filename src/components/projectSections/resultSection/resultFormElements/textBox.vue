<template>
    <div class="form-group">

        <label for="resultado"><strong>{{ options.titulo }}</strong></label>
        <textarea :name="'element-' + keyarray" id="" cols="30" rows="10" class="form-control"></textarea>
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