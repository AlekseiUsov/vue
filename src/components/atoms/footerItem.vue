<template>
    <li :class="$style.footerItem">
        {{title}}
    </li>
</template>

<script>
export default {
    props: {
        task: {
            type: Object,
        },
        title: String,
    },
    name: "footerItem"
};
</script>

<style lang="scss" module>
@import "@/assets/main.scss";

.footerItem {
    color: $transparent-beige;
    padding-left: 1rem;
}

.footerItemActive {
    border: 1px solid $transparent-beige;
    border-radius: 0.2rem;
    padding: 0.1rem 0.4rem;
}
</style>