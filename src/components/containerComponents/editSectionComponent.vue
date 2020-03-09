<template>
    <div id="editSectionComponent-container">
        <h3 class="text-center">Editor de elementos</h3>
        <ul>
            <li v-for="(value, key, index) in $store.getters.configForm" :key="index" :value="key" >
                <strong>Index del elemento: {{ index }} </strong>
                <component :is="value.type" :options="value.options"></component>

            </li>
        </ul>

    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>

</style>