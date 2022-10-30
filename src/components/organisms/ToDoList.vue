<template>
    <div>
        <ul :class="$style.list">
            <ToDoTask v-for="task in $store.state.tasks" :key="task.id" :title="task.title"
                @changeStatus="() => changeStatusTask(task.id)" @closeTask="() => deleteTask(task.id)" />
            <ToDoNewTask @getInputValue="(value) => addTask(value)" />
        </ul>
    </div>
</template>

<script>
import ToDoTask from '@/components/molecules/ToDoTask';
import ToDoNewTask from '@/components/atoms/ToDoNewTask';

export default {
    name: "ToDoList",
    components: {
        ToDoTask,
        ToDoNewTask,
    },
    methods: {
        changeStatusTask(id) {
            this.$store.commit('changeStatusTask', id);
        },
        deleteTask(id) {
            this.$store.commit('deleteTask', id);
        },
        addTask(value) {
            this.$store.commit('addTask', value);
        }
    }

}
</script>

<style lang="scss" module>
@import "@/assets/main.scss";

.list {
    margin: 0;
    padding: 1.5rem;
    list-style: none;
    background-color: $white;
}
</style>