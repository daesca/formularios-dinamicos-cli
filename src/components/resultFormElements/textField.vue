<template>
    <div id="textField-result-container">

        <label for="resultado">Este es el resultado: {{ options.title }}</label>
        <input type="text" name="resultado">

    </div>
</template>
<script>
export default {

    props:['options']
    
}
</script>

<style scoped>

</style>