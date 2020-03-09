<template>
    <div id="resultSectionComponent-container">
        <h3 class="text-center">Resultado</h3>
        <ul>
            <ol v-for="(value, key, index) in $store.getters.configForm" :key="index" :value="key" >

                <component :is="value.type" :options="value.options"></component>

            </ol>
        </ul>
    </div>

</template>
<script>
    import textField from '../resultFormElements/textField';
    export default {
        components:{
            textField
        }

    }
</script>
<style scoped>

</style>