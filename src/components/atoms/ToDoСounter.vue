<template>
    <p :class="$style.counter">1/3 left</p>
</template>

<script>
export default {
    name: "ToDoCounter"
};
</script>

<style lang="scss" module>
@import "@/assets/main.scss";

.counter {
    color: $transparent-beige;
}
</style>