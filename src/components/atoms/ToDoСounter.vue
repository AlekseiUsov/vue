<template>
  <div :class="$style.counter">
    <span>{{ getDoneTasks }}</span>/<span>{{ getAllTasks }}</span>left
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "ToDoCounter",
  computed: mapGetters(["getDoneTasks", "getAllTasks"]),
};
</script>

<style lang="scss" module>
@import "@/assets/main.scss";

.counter {
  color: $transparent-beige;
}
</style>
