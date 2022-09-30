<template>
    <div>
        <ul :class="$style.list">
            <task />
            <addTask />
        </ul>
    </div>
</template>

<script>
import task from '@/components/molecules/task';
import addTask from '@/components/atoms/addTask';

export default {
    name: "taskList",
    props: ['todos'],
    components: {
        task,
        addTask
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