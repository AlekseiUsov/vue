<template>
  <div id="app">
    <ToDoApp />
  </div>
</template>

<script>
import ToDoApp from "@/components/ToDoApp.vue";
export default {
  name: "App",
  data() {
    return {
      todos: [
        { id: 1, title: 'Task 1', isChecked: false },
        { id: 2, title: 'Task 2', isChecked: false },
        { id: 3, title: 'Task 3', isChecked: false }
      ]
    }
  },
  components: {
    ToDoApp
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
