<template>
    <div>
        <div :class="$style.addTask">Add a new task</div>
    </div>
</template>
    
<script>
export default {
    name: " addTask"
}; </script>

<style lang="scss" module>
@import "@/assets/main.scss";

.addTask {
    margin-top: 1rem;
    color: $beige;
    background-color: $ivory;
    border: 1.5px dashed $beige;
    border-radius: 0.5rem;
}
</style>
