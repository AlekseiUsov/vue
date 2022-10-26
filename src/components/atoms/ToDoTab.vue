<template>
    <li :class="$style.ToDoTab">
        {{ name }}
    </li>
</template>

<script>
export default {
    name: "ToDoTab",
    props: {
        name: String,
    },
};
</script>

<style lang="scss" module>
@import "@/assets/main.scss";

.ToDoTab {
    color: $transparent-beige;
    padding-left: 1rem;
}

.ToDoTabActive {
    border: 1px solid $transparent-beige;
    border-radius: 0.2rem;
    padding: 0.1rem 0.4rem;
}
</style>