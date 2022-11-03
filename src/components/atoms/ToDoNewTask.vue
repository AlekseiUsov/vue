<template>
  <input
    :class="$style.addTask"
    placeholder="Add a new task"
    @keyup.enter="getInputValue"
    v-model="value"
  />
</template>

<script>
export default {
  name: "ToDoNewTask",
  data() {
    return {
      value: "",
    };
  },
  methods: {
    getInputValue() {
      this.$emit("getInputValue", this.value);
      this.value = "";
    },
  },
};
</script>

<style lang="scss" module>
@import "@/assets/main.scss";

.addTask {
  width: 100%;
  text-align: center;
  margin-top: 1rem;
  color: $beige;
  background-color: $ivory;
  border: 1.5px dashed $beige;
  border-radius: 0.5rem;
}

.addTask::placeholder {
  color: $beige;
}

.addTask:focus {
  outline: none;
}
</style>
