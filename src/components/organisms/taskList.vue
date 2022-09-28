<template>
    <div>
        <ul>
            {{todos}}
            <task />
        </ul>
    </div>
</template>

<script>
import task from '@/componets/molecules/task.vue';
export default {
    name: "taskList",
    props: ['todos'],
    components: {
        task
    }
}
</script>

<style lang="scss" module>
.list {
    margin: 0;
    padding: 1.5rem;
    list-style: none;
    background-color: $white;
}

@import "@/styles/main.scss";
</style>