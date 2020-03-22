<template>
    <div id="resultSectionComponent-container">
        <h3 class="text-center">{{ $languages.resultSectionTitle }}</h3>
        <!-- <ul>
            <ol v-for="(value, key, index) in $store.getters.configForm" :key="index" :value="key" >

                <component :is="value.type" :options="value.options"></component>

            </ol>
        </ul> -->

        <form>
            <component v-for="(value, key, index) in $store.getters.configForm" :is="value.type" :options="value.options" :key="index" :keyarray="index"></component>

                <!-- <component :is="value.type" :options="value.options"></component> -->
        </form>

    </div>

</template>
<script>

    // import textField from './resultFormElements/textField';
    // import textBox from './resultFormElements/textBox';

    import * as resultComponents from '../../../importGroups/resultSection/resultElementsImports'

    export default {
        components:{
            'textBox': resultComponents.textBox,
            'textField': resultComponents.textField,
            'selectField': resultComponents.selectField,
            'checkField': resultComponents.checkField,
            'radioField': resultComponents.radioField,
        }

    }
</script>
<style scoped>

</style>