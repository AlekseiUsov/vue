<template>
    <div>
        <input :class="$style.addTask" placeholder="Add a new task">
    </div>
</template>
    
<script>
export default {
    name: "ToDoNewTask",
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
