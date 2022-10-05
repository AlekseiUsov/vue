<template>
    <div>
        <ul :class="$style.list">
            <ToDoTask v-for="task in tasks" :key="task.id" :title="task.title" />
            <ToDoAddTask />
        </ul>
    </div>
</template>

<script>
import ToDoTask from '@/components/molecules/ToDoTask';
import ToDoAddTask from '@/components/atoms/ToDoAddTask';

export default {
    name: "ToDoList",
    components: {
        ToDoTask,
        ToDoAddTask,
    },
    data() {
        return {
            tasks: [
                { id: 1, title: "Task 1", isChecked: false },
                { id: 2, title: "Task 2", isChecked: false },
                { id: 3, title: "Task 3", isChecked: false },
            ],
        };
    },

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