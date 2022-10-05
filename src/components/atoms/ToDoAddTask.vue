<template>
    <div>
        <div :class="$style.AddTask">Add a new task</div>
    </div>
</template>
    
<script>
export default {
    name: "ToDoAddTask"
}; </script>

<style lang="scss" module>
@import "@/assets/main.scss";

.AddTask {
    margin-top: 1rem;
    color: $beige;
    background-color: $ivory;
    border: 1.5px dashed $beige;
    border-radius: 0.5rem;
}
</style>
