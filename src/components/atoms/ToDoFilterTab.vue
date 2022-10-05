<template>
    <li :class="$style.footerTab">
        {{name}}
    </li>
</template>

<script>
export default {
    name: "ToDoFilterTab",
    props: {
        name: String,
    },
};
</script>

<style lang="scss" module>
@import "@/assets/main.scss";

.footerTab {
    color: $transparent-beige;
    padding-left: 1rem;
}

.footerTabActive {
    border: 1px solid $transparent-beige;
    border-radius: 0.2rem;
    padding: 0.1rem 0.4rem;
}
</style>