<template>
    <li :class="$style.task">
        <ToDoCheckbox />
        {{title}}
        <ToDoClose />
    </li>
</template>

<script>
import ToDoCheckbox from '@/components/atoms/ToDoCheckbox';
import ToDoClose from '@/components/atoms/ToDoClose';


export default {
    name: "ToDoTask",
    components: {
        ToDoCheckbox,
        ToDoClose,
    },
    props: {
        title: String,
    },

};
</script>

<style lang="scss" module>
@import "@/assets/main.scss";

.task {
    display: flex;
    justify-content: space-between;
    padding: 0.25rem;
    box-sizing: border-box;
    border-radius: 0.5rem;
    background-color: $light-beige;
    margin-top: 1rem;
}

.task:first-child {
    margin-top: 0;
}
</style>