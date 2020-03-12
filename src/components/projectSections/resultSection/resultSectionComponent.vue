<template>
    <div id="resultSectionComponent-container">
        <h3 class="text-center">{{ $languages.resultSectionTitle }}</h3>
        <!-- <ul>
            <ol v-for="(value, key, index) in $store.getters.configForm" :key="index" :value="key" >

                <component :is="value.type" :options="value.options"></component>

            </ol>
        </ul> -->

        <form>
            <component v-for="(value, key, index) in $store.getters.configForm" :is="value.type" :options="value.options" :key="index"></component>

                <!-- <component :is="value.type" :options="value.options"></component> -->
        </form>

    </div>

</template>
<script>

    import textField from './resultFormElements/textField';
    import textBox from './resultFormElements/textBox';

    export default {
        components:{
            textField,
            textBox
        }

    }
</script>
<style scoped>

</style>