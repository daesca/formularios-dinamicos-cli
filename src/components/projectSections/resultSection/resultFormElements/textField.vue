<template>
    <div class="form-group">

        <label for="resultado"><strong>{{ options.titulo }} </strong></label>
        <input type="text" name="resultado" class="form-control" :placeholder="options.placeholder">

    </div>
</template>
<script>
export default {

    props:['options']
    
}
</script>

<style scoped>

</style>