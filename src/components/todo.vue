<template>
  <div :class="$style.todo">
    <img :class="$style.image" src="../assets/background-image.svg" />
    <div :class="$style.block">
      <ToDoTitle />
      <ToDoList />
      <ToDoTabs />
    </div>
  </div>
</template>

<script>
import ToDoTitle from "@/components/atoms/ToDoTitle";
import ToDoList from "@/components/organisms/ToDoList";
import ToDoTabs from "@/components/organisms/ToDoTabs";

export default {
  name: "ToDo",
  components: {
    ToDoTitle,
    ToDoList,
    ToDoTabs,
  },
};
</script>

<style lang="scss" module>
@import "@/assets/main.scss";

.todo {
  box-sizing: border-box;
  position: relative;
  background: linear-gradient(104.11deg, #ff7e5f 14.52%, #feb567 87.26%);
  color: $brown;
  font-size: 20px;
  line-height: 28px;
  padding: 5.5rem;
  min-height: 40rem;
}

.block {
  position: relative;
  display: block;
  margin: 0 auto;
  padding: 0;
  width: 34rem;
  z-index: 20;
  background-color: $white;
}

.image {
  height: 487px;
  top: 5%;
  right: 17%;
  position: absolute;
  z-index: 5;
}
</style>
