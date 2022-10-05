<template>
    <div :class="$style.footer">
        <ToDoCounter />
        <ul :class="$style.menu">
            <ToDoFilterTab v-for="tab in tabs" :key="tab.id" :name="tab.name" />
        </ul>
    </div>
</template>

<script>
import ToDoCounter from '@/components/atoms/ToDoCounter';
import ToDoFilterTab from '@/components/atoms/ToDoFilterTab';
export default {
    name: "ToDoFooter",
    components: {
        ToDoCounter,
        ToDoFilterTab
    },
    data() {
        return {
            tabs: [
                { id: 1, name: "All" },
                { id: 2, name: "Active" },
                { id: 3, name: "Completed" },
            ],
        };
    },

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
    padding: 0.05rem 2rem;
}

.menu {
    padding: 0.25rem 1rem;
    list-style: none;
    text-decoration: none;
    display: flex;
    align-items: center;
}
</style>