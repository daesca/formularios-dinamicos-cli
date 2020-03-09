<template>

    <div id="editSingleComponent-container">
        
        <div id="title">{{ options.title }}</div>
        <div id="edit-buttons">
            <button class="btn-info" data-toggle="modal" data-target="#exampleModal">Editar</button>
            <button class="btn-success">Eliminar</button>
        </div>

        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div v-for="{value, key, index} in $store.getter.configForm" :key="index">
                            <lablel :for="key">{{ key }}</lablel>
                            <input type="text" :value="value" :name="key"/>
                        </div>
                    </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Guardar</button>
                </div>
                </div>
            </div>
        </div>

    </div>

</template>
<script>

    export default {
        props: ['options']

    }
</script>
<style scoped>

</style>