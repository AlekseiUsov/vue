<template>
    <div :class="$style.footer">
        <ToDoСounter />
        <ul :class="$style.menu">
            <ToDoTab v-for="tab in $store.state.tabs" :key="tab.id" :name="tab.name" isActive
                @changeTab="() => filterTasks(tab.name)" />
        </ul>
    </div>
</template>

<script>
import ToDoСounter from '@/components/atoms/ToDoСounter';
import ToDoTab from '@/components/atoms/ToDoTab';
export default {
    name: "ToDoTabs",
    components: {
        ToDoСounter,
        ToDoTab
    },
    methods: {
        activeTab(tabName) {
            this.$store.commit('activeTab', tabName);
        },
    },
    computed: {
        filterTasks(filter) {
            return this.$store.getters.filterTasks(filter)
        },
    }
}
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