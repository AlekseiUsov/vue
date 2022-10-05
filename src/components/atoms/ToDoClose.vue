<template>
    <div :class="$style.icon">
        <img src="../../assets/cross.svg">
    </div>
</template>

<script>
export default {
    name: "ToDoClose"
};
</script>

<style lang="scss" module>
@import "@/assets/main.scss";

.icon {
    display: flex;
    align-items: center;
}

.icon img {
    width: 1.5rem;
    height: 1.5rem;
    display: block;
}
</style>