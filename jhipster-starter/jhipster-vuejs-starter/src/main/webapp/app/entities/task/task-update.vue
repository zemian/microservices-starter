<template>
    <div class="row justify-content-center">
        <div class="col-8">
            <form name="editForm" role="form" novalidate v-on:submit.prevent="save()" >
                <h2 id="jhipsterApp.task.home.createOrEditLabel" v-text="$t('jhipsterApp.task.home.createOrEditLabel')">Create or edit a Task</h2>
                <div>
                    <div class="form-group" v-if="task.id">
                        <label for="id" v-text="$t('global.field.id')">ID</label>
                        <input type="text" class="form-control" id="id" name="id"
                               v-model="task.id" readonly />
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.task.title')" for="task-title">Title</label>
                        <input type="text" class="form-control" name="title" id="task-title"
                            :class="{'valid': !$v.task.title.$invalid, 'invalid': $v.task.title.$invalid }" v-model="$v.task.title.$model" />
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhipsterApp.task.description')" for="task-description">Description</label>
                        <input type="text" class="form-control" name="description" id="task-description"
                            :class="{'valid': !$v.task.description.$invalid, 'invalid': $v.task.description.$invalid }" v-model="$v.task.description.$model" />
                    </div>
                </div>
                <div>
                    <button type="button" id="cancel-save" class="btn btn-secondary" v-on:click="previousState()">
                        <font-awesome-icon icon="ban"></font-awesome-icon>&nbsp;<span v-text="$t('entity.action.cancel')">Cancel</span>
                    </button>
                    <button type="submit" id="save-entity" :disabled="$v.task.$invalid || isSaving" class="btn btn-primary">
                        <font-awesome-icon icon="save"></font-awesome-icon>&nbsp;<span v-text="$t('entity.action.save')">Save</span>
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>
<script lang="ts" src="./task-update.component.ts">
</script>
