<template>
    <div class="form-group">

        <label for="resultado">Este es el resultado: {{ options.title }}</label>
        <input type="text" name="resultado" class="form-control">

    </div>
</template>
<script>
export default {

    props:['options']
    
}
</script>

<style scoped>

</style>