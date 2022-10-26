<template>
    <h1 :class="$style.title">to do list</h1>
</template>

<script>
export default {
    name: "ToDoTitle",
};
</script>

<style lang="scss" module>
@import "@/assets/main.scss";

.title {
    margin: 0;
    padding: 0.5rem 0;
    background-color: $beige;
}
</style>