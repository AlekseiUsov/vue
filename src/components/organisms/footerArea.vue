<template>
    <div :class="$style.footer">
        <footerCurrentPage />
        <ul :class="$style.menu">
            <footerItem v-for="item in items" v-bind:key="item" />
        </ul>
    </div>
</template>

<script>
import footerCurrentPage from '@/components/atoms/footerCurrentPage';
import footerItem from '@/components/atoms/footerItem.vue';
export default {
    name: "footerArea",
    data() {
        return {
            items: ['All', 'Active', 'Complited'],
        };
    },
    components: {
        footerCurrentPage,
        footerItem
    }
};
</script>

<style lang="scss" module>
@import "@/assets/main.scss";

.footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: $beige;
    color: $transparent-beige;
    padding: 0.5rem 2rem;
}

.menu {
    padding: 0.25rem 1rem;
    list-style: none;
    text-decoration: none;
    display: flex;
    align-items: center;
}
</style>