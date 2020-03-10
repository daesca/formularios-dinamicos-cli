<template>
    <div class="form-group">

        <label for="resultado">Este es el resultado: {{ options.title }}</label>
        <textarea name="" id="" cols="30" rows="10" class="form-control"></textarea>

    </div>
</template>
<script>
export default {

    props:['options']
    
}
</script>

<style scoped>

</style>