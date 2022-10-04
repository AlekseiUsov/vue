<template>
    <div>
        <ul :class="$style.list">
            <task v-for="task in tasks" :key="task.id" :title="task.title" />
            <addTask />
        </ul>
    </div>
</template>

<script>
import task from '@/components/molecules/task';
import addTask from '@/components/atoms/addTask';

export default {
    name: "taskList",
    data() {
        return {
            tasks: [
                { id: 1, title: "Task 1", isChecked: false },
                { id: 2, title: "Task 2", isChecked: false },
                { id: 3, title: "Task 3", isChecked: false },
            ],
        };
    },
    components: {
        task,
        addTask,
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