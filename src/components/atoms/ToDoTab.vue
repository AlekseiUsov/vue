<template>
    <li :class="[$style.tab, { [$style.active]: isActive }]" @click="$emit('changeTab')">
        {{ name }}
    </li>
</template>

<script>
export default {
    name: "ToDoTab",
    props: {
        name: String,
        isActive: {
            type: Boolean,
            default: false,
        },
    },
}
</script>

<style lang="scss" module>
@import "@/assets/main.scss";

.tab {
    color: $transparent-beige;
    padding-left: 0.25rem;
}

.active {
    border: 1px solid $transparent-beige;
    border-radius: 0.2rem;
    padding: 0.1rem 0.4rem;
    margin-left: 1rem;
}
</style>