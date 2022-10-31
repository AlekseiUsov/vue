<template>
    <li :class="$style.task">
        <ToDoCheckbox @checkCheckbox="$emit('changeStatus')" :isChecked="isChecked" />
        {{ title }}
        <ToDoCloseBth @close="$emit('closeTask')" />
    </li>
</template>

<script>
import ToDoCheckbox from '@/components/atoms/ToDoCheckbox';
import ToDoCloseBth from '@/components/atoms/ToDoCloseBth';


export default {
    name: "ToDoTask",
    components: {
        ToDoCheckbox,
        ToDoCloseBth,
    },
    props: {
        title: String,
        isChecked: {
            type: Boolean,
            default: false
        }
    }
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