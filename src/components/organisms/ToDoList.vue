<template>
    <div>
        <ul :class="$style.list">
            <ToDoTask v-for="task in $store.state.tasks" :key="task.id" :title="task.title"
                @changeStatus="() => changeStatusTask(task.id)" @closeTask="() => deleteTask(task.id)" />
            <ToDoNewTask />
        </ul>
    </div>
</template>

<script>
import ToDoTask from '@/components/molecules/ToDoTask';
import ToDoNewTask from '@/components/atoms/ToDoNewTask';
import { mapMutations } from 'vuex';

export default {
    name: "ToDoList",
    components: {
        ToDoTask,
        ToDoNewTask,
    },
    computed: {
        ...mapMutations(['changeStatusTask', 'deleteTask'])
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