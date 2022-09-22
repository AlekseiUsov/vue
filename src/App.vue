<template>
  <div id="app">
    <ToDoList />
  </div>
</template>

<script>
import ToDoList from "@/components/ToDoList";
export default {
  name: "App",
  components: {
    ToDoList,
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
