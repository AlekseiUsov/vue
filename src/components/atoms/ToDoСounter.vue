<template>
  <p :class="$style.counter">
    {{ $store.getters.getDoneTasks }}/{{ $store.getters.getAllTasks }} left
  </p>
</template>

<script>
export default {
  name: "ToDoCounter",
};
</script>

<style lang="scss" module>
@import "@/assets/main.scss";

.counter {
  color: $transparent-beige;
}
</style>
