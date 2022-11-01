<template>
  <div :class="$style.footer">
    <ToDoСounter />
    <ul :class="$style.menu">
      <ToDoTab
        v-for="tab in $store.state.tabs"
        :key="tab.id"
        :name="tab.name"
        :isActive="$store.state.filter == tab.name"
        @changeTab="() => setActiveTab(tab.name)"
      />
    </ul>
  </div>
</template>

<script>
import ToDoСounter from "@/components/atoms/ToDoСounter";
import ToDoTab from "@/components/atoms/ToDoTab";
export default {
  name: "ToDoTabs",
  components: {
    ToDoСounter,
    ToDoTab,
  },
  methods: {
    setActiveTab(tabName) {
      this.$store.commit("setActiveTab", tabName);
    },
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
