<template>
    <p :class="$style.counter">
        {{ $store.state.tasks.filter((task) => task.isChecked != true).length }}/
        {{ $store.state.tasks.length }}
        left</p>
</template>

<script>
export default {
    name: "ToDoCounter",
}
</script>

<style lang="scss" module>
@import "@/assets/main.scss";

.counter {
    color: $transparent-beige;
}
</style>